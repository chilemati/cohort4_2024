import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../atoms/user';
import Fetching from '../fetching/Fetching';
const baseUrl = import.meta.env.VITE_API_PROD

const Blogs = () => {
    const [blog,setBlog] = useState(null);
    const User = useRecoilValue(UserAtom);
    const redir = useNavigate();
    

    useEffect(()=> {

       if(User.isLoggedIn) {
        axios.get(baseUrl+'/blogs',{headers: {"Access-Control-Allow-Origin": "*" ,token: User.data.token}})
       .then(({data})=> {
        if(data.status) {
            setBlog(data.data);

        }
       })
       .catch(err=> {
        console.log(err)
       })
       }else{
        redir('/login')
       }
    },[User.isLoggedIn])
  return (
    <div className='flexCol gap-3' >
        <h2 className='text-red-700 font-bold text-3xl my-4 ' >All Blogs</h2>
        <div className="flexCol w-[70%] gap-3">
            {
                blog && blog.map((each)=>(
                    <div key={each._id} className="w-full  ">
                        <h5 onClick={()=> redir('/blogs/'+each._id)} className="text-base ps-2 rounded-xl cursor-pointer w-[100%] hover:text-red-700 font-semibold py-4 shadow "> {each.title} </h5>
                    </div>
                ))
            }
             {
            !blog && <Fetching />
          }
        </div>
       
    </div>
  )
}

export default Blogs