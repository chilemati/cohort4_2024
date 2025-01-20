import { lazy } from 'react';
import { useRecoilState } from "recoil";
const Blogs = lazy(() => import("../blogs/Blogs"));
const Bus = lazy(() => import("../bus/Bus"));
const Car = lazy(() => import("../car/Car"));
const Counter = lazy(() => import("../counter/Counter"));
const Details = lazy(() => import("../details/Details"));
const Login = lazy(() => import("../login/Login"));
const Section3 = lazy(() => import("../section3/Section3"));
const Signup = lazy(() => import("../signup/Signup"));



export const navList = [
    {
        name: "Home",
        to: "/",
        component: <Car brand="Ford" worth="100" />,
        show: true,
    },
    {
        name: "Blogs",
        to: "/blogs",
        component: <Blogs />,
        show: true,
    },
    {
        name: "Bus",
        to: "/bus",
        component: <Bus />,
        show: true,
    },
    {
        name: "Section3",
        to: "/section3",
        component: <Section3 />,
        show: true,
    },
    {
        name: "Counter",
        to: "/counter",
        component: <Counter />,
        show: true,
    },
    {
        name: "Login",
        to: "/login",
        component: <Login />,
        show: true,
    },
    // {
    //     name: "Create Blog",
    //     to: "/create",
    //     component: <Create />,
    //     show: true,
    // },
  
    {
        name: "Signup",
        to: "/signup",
        component: <Signup />,
        show: false,
    },
    {
        name: "Details",
        to: "/car/:id",
        component: <Details />,
        show: false,
    },
    {
        name: "Details",
        to: "/blogs/:id",
        component: <Details />,
        show: false,
    },
    
]