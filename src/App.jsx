import React, { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import { navList } from "./components/nav/navData";

const Error = lazy(() => import("./components/error/Error"));
const Create = lazy(() => import("./components/create/Create"));
// js environment
const App = () => {
  // js environment
  // document.write("<h1> Hello World! </h1>")
 
  function Times(a, b) {
    return a * b;
  }
  // <tagName attributes > </tagname>
  // <tagName attributes >

  console.log(Times(3, 4));
  return (
    <React.Fragment>
      {/* jsx environment */}
      {/* router: step 2 */}
      <Nav />
      <Suspense fallback={<div className="h-[80vh] flexCenter text-[3rem] text-bold italic text-red-800 " > <img src='/loading.gif' alt="loading gif" loading="lazy" /> </div>} >
      <Routes>
        {/* <Route path="/" element={<Car brand="Ford" worth="100" />} />
        <Route path="/bus" element={<Bus />} />
        <Route path="/section3" element={<Section3 />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/car/:id" element={<Details />} /> */}
        {
          navList.map((each,i)=> (
            
            <Route key={i} path={each.to} element={each.component} />
          ))
        }
        <Route  path='/create' element={<Create />} />
        <Route path="*" element={<Error />} />

      </Routes>
      </Suspense>
      <Footer />
    </React.Fragment>
  );
  // js environment
};
// js environment

export default App;
