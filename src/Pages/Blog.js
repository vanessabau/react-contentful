import React, { Component } from "react";
import client from "./Client";
import { Link } from "react-router-dom";
import BlackLoader from "../Images/black-loader.gif";

class Blog extends Component {
  constructor() {
    super();
    this.state = { blogpage: [] };
  }

  componentDidMount() {
    client
      .getEntries({
        content_type: "blogs",
        order: "sys.createdAt",
      })
      .then((entries) => {
        console.log(entries.items);
        this.setState({ blogpage: entries.items });
      });
  }

  render() {
    return (
      <div>
        <section id="blog">
          <div className="container">
            <div className="text-center">
              <h2>Blogs</h2>
              <p className="lead">
                Morbi pharetra tincidunt nulla, quis ullamcorper libero
                tincidunt et.
              </p>
            </div>
            {this.state.blogpage.length === 0 ? (
              <div align="center" className="pt-5">
                <img src={BlackLoader} alt="loading gif" />
              </div>
            ) : (
              <div className="row">
                {this.state.blogpage.map((item, index) => {
                  return (
                    <div key={index} className="col-md-6 blog-content">
                      <img
                        className="img-blog img-fluid"
                        src={item.fields.blogThumbnail.fields.file.url}
                        alt="meeting"
                      />
                      <h3>
                        <Link to={`../Blogs/${item.fields.slug}`}>
                          {item.fields.blogTitle}
                        </Link>
                      </h3>
                      <p>{item.fields.blogDescription}</p>
                      <button className="btn btn-primary">
                        <Link to={`../Blogs/${item.fields.slug}`}>
                          <span style={{ color: "white" }}>Read more...</span>
                        </Link>
                      </button>
                    </div>
                  );
                })}
              </div>
            )}

            {/* End of Row */}
          </div>
        </section>
      </div>
    );
  }
}

export default Blog;
