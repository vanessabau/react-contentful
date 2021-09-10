import React from "react";
import blog1 from "../Images/blog/blog1.jpg";
import blog2 from "../Images/blog/blog2.jpg";

const Blog = () => (
  <div>
    <section id="blog">
      <div className="container">
        <div className="text-center">
          <h2>Blogs</h2>
          <p className="lead">
            Morbi pharetra tincidunt nulla, quis ullamcorper libero tincidunt
            et.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 blog-content">
            <img className="img-blog img-fluid" src={blog1} alt="meeting" />
            <h3>
              <a href="_#">
                Morbi pharetra tincidunt nulla, quis ullamcorper libero
                tincidunt et.
              </a>
            </h3>
            <p>
              Aenean nec dolor vitae nisi sagittis pretium id sed quam. Duis id
              finibus orci. Nulla vel condimentum ipsum, vitae pharetra velit.
              Maecenas scelerisque est ac urna convallis finibus. Pellentesque
              pulvinar diam sed orci convallis porttitor. Nullam orci nulla,
              semper sit amet venenatis at, feugiat quis tortor. Donec vulputate
              elit fermentum lectus efficitur, id auctor tortor luctus.
            </p>
            <button className="btn btn-primary">Read More</button>
          </div>
          <div className="col-md-6 blog-content">
            <img className="img-blog img-fluid" src={blog2} alt="meeting" />
            <h3>
              <a href="_#">
                Morbi pharetra tincidunt nulla, quis ullamcorper libero
                tincidunt et.
              </a>
            </h3>
            <p>
              Aenean nec dolor vitae nisi sagittis pretium id sed quam. Duis id
              finibus orci. Nulla vel condimentum ipsum, vitae pharetra velit.
              Maecenas scelerisque est ac urna convallis finibus. Pellentesque
              pulvinar diam sed orci convallis porttitor. Nullam orci nulla,
              semper sit amet venenatis at, feugiat quis tortor. Donec vulputate
              elit fermentum lectus efficitur, id auctor tortor luctus.
            </p>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Blog;
