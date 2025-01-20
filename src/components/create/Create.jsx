import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import useToastify from '../customHooks/useToastify';
import { Link, useNavigate } from 'react-router-dom';
import {Blogs} from '../../../data/db.json'

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

 const Create = () => {
  const {toastContainer,success,dismissAll,info} = useToastify()
  const redir = useNavigate();
  return (
  <div className='flexCol gap-1' >
    <h1 className='text-red-700 font-bold text-3xl my-4' >New Blog</h1>
    <Formik
      initialValues={{
        title: '',
        body: '',
       
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        info('Please Wait...')
        let id = Number(Blogs[Blogs.length -1].id)+1;
        let upd = {...values,id: String(id) };

        axios.post('http://localhost:9000/Blogs',upd)
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
        
          <button className='px-4 py-2 my-4 rounded-md border-2 hover:bg-green-700 hover:text-white  ' type="submit">Create</button>
         
        </Form>
      )}
    </Formik>
    {toastContainer}
  </div>
)};

export default Create;