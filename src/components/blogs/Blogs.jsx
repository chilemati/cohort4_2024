import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../atoms/user';


const Blogs = () => {
    const [blog,setBlog] = useState(null);
    const User = useRecoilValue(UserAtom);
    const redir = useNavigate();
    

    useEffect(()=> {

       if(User.isLoggedIn) {
        axios.get('http://localhost:9000/Blogs')
       .then(({data})=> {
        // console.log(resp.data)
        setBlog(data);
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
        <div className="flexCol gap-3">
            {
                blog && blog.sort((a,b)=> b.id - a.id ).map((each)=>(
                    <div key={each.id} className="w-full  ">
                        <h5 onClick={()=> redir('/blogs/'+each.id)} className="text-base ps-2 rounded-xl cursor-pointer hover:text-red-700 font-semibold py-4 shadow "> {each.title} </h5>
                    </div>
                ))
            }
        </div>
       
    </div>
  )
}

export default Blogs