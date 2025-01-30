import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import ComfirmDiag from "../dialog/ComfirmDiag";
import useToastify from "../customHooks/useToastify";
import { useRecoilValue } from "recoil";
import { UserAtom } from "../atoms/user";
import Update from "../update/Update";
import Fetching from "../fetching/Fetching";
const baseUrl = import.meta.env.VITE_API_PROD;

const Details = () => {
  let { id } = useParams();
  const [blog, setBlog] = useState(null);
  const redir = useNavigate();
  const User = useRecoilValue(UserAtom);
  const [open, setOpen] = useState(false);
  const { toastContainer, success, dismissAll, info, error } = useToastify();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get(baseUrl + "/blogs/" + id, { headers: { token: User.data.token } })
      .then(({ data }) => {
        if (data.status) {
          setBlog(data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleDelete(id) {
    info("Deleting...");
    axios
      .delete(baseUrl + "/blogs", {
        headers: { token: User.data.token },
        data: { id },
      })
      .then(({ data }) => {
        if (data.status) {
          dismissAll();
          success("Blog Deleted Successfully!");
          setTimeout(() => {
            redir("/blogs");
          }, 5000);
        } else {
          dismissAll();
          error("An error occured!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      {!toggle && (
        <div>
          {blog && (
            <>
              <h2 className=" text-2xl font-bold text-purple-900 text-center my-5 capitalize ">
                {" "}
                <IoArrowBack
                  className="me-2 ms-4 cursor-pointer "
                  onClick={() => redir("/blogs")}
                />{" "}
                {blog.title}{" "}
              </h2>
              <p className="text-base font-normal font-Montserrat w-[70%] mx-auto p-3 border-l-2 border-l-purple-900 ">
                {" "}
                {blog.body}{" "}
              </p>
            </>
          )}
          {blog && User.data.role === "Admin" && (
            <>
              <div className="flexCenter my-5 gap-3 text-3xl ">
                <MdDeleteForever
                  title="Delete Blog"
                  className="hover:text-red-800 "
                  onClick={() => {
                    setOpen(true);
                  }}
                />
                <GrUpdate
                  title="Update Blog"
                  className="hover:text-green-800"
                  onClick={() => {
                    setToggle(true);
                  }}
                />
              </div>
            </>
          )}
          {
            !blog && <Fetching />
          }
          <ComfirmDiag
            open={open}
            setOpen={setOpen}
            action={{ method: handleDelete, id: id }}
          />
          {toastContainer}
        </div>
      )}
      {toggle && (
        <Update toggle={toggle} setToggle={setToggle} Data={blog && blog} />
      )}
    </>
  );
};

export default Details;
