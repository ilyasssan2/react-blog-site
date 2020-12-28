import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PageTop from "../components/PageTop";
import { services } from "../data/api";
function Services({ match }) {
  document.title = "Services";
  const id = match.params.id;
  const [post, setPost] = useState();
const currentPost = useRef();
  useEffect(() => {
    console.log("setting the current post ");
    setPost(services.find((xs) => xs.id === Number(id)));
  if(id){
    currentPost.current.scrollIntoView({ behavior: "smooth" })
  }
  }, [id]);
  return (
    <div>
      <PageTop page="Services" />
      <div className="services ">
        <div className="container">
          <div className="row">
            <div className="services__cards my-5">
              {services &&
                services.map((xs) => (
                  <div className="services__card m-3 " key={xs.id}>
                    <div className="card__img">
                      <img src={xs.img} alt="" />
                    </div>
                    <div className="card__info">
                      <h3 className="card__title">{xs.title}</h3>
                      <p className="card__description"> {xs.description.slice(0, 62) + "..."}</p>
                      <Link to={`/Services/${xs.id}`} className="card__link">
                        Read more
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
      
        
        </div>
       
      </div>
      <div className="container" ref={currentPost}>
      {post && (
              <div className="row my-5">
                <div className="col-6 ">
                  <div className="image__container">
                    <img src={post.img} alt="img" style={{ width: "100%" }} />
                  </div>
                </div>
                <div className="col-6 project">
                  <h1>{post.title && post.title}</h1>
                  <div className="divider"></div>
                  <p> {post.description && post.description} </p>
                </div>
              </div>
            )}
      </div>
    </div>
  );
}

export default Services;
