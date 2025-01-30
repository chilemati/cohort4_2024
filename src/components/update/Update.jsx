import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import useToastify from '../customHooks/useToastify';
import { Link, useNavigate } from 'react-router-dom';
import {Blogs} from '../../../data/db.json'
import { IoArrowBack } from 'react-icons/io5';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../atoms/user';
const baseUrl = import.meta.env.VITE_API_PROD

const SignupSchema = Yup.object().shape({
  body: Yup.string()
    .min(2, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Required'),
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(80, 'Too Long!')
    .required('Required'),
 
});

 const Update = ({toggle,setToggle,Data}) => {
  const {toastContainer,success,dismissAll,info} = useToastify()
  const redir = useNavigate();
  const User = useRecoilValue(UserAtom);
  return (
  <div className='flexCol gap-1' >
   <p className="flexStart w-full mt-4 ">
   <IoArrowBack className='me-2 ms-4 cursor-pointer text-red-700 font-bold text-3xl ' onClick={()=> setToggle(false) } />
   </p>
  
    <h1 className='text-red-700 font-bold text-3xl w-full flexCenter my-4' >  Update Blog</h1>
    <Formik
      initialValues={{
        title: Data.title,
        body: Data.body,
       
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        info('Please Wait...')
        let upd = {...values,id:Data._id, };

        axios.patch(baseUrl+'/blogs',upd,{headers: {token: User.data.token}})
       .then(({data})=> {
         dismissAll();
         success('Sucessfull!');
         setTimeout(() => {
          redir('/blogs');
         }, 5000);
       })
       .catch(err=> {
        console.log(err)
       })
      }}
    >
      {({ errors, touched }) => (
        <Form className='flex items-center justify-center flex-col gap-4 ' >
          <fieldset>
          <Field className='shadow py-3 px-4 rounded-xl ' placeholder='Title' name="title" />
          {errors.title && touched.title ? (
            <div className='text-[10px] text-red-700 ' >{errors.title}</div>
          ) : null}
          </fieldset>
          <fieldset>
          <Field as='textarea' className='shadow py-3 px-4 rounded-xl min-h-[40vh]  ' placeholder='Content' name="body" />
          {errors.body && touched.body ? (
            <div className='text-[10px] text-red-700 ' >{errors.body}</div>
          ) : null}
          </fieldset>
        
          <button className='px-4 py-2 my-4 rounded-md border-2 hover:bg-green-700 hover:text-white  ' type="submit">Update</button>
         
        </Form>
      )}
    </Formik>
    {toastContainer}
  </div>
)};

export default Update;