import React, { Component } from "react";
import client from "../Pages/Client";
import loader from "../Images/loader.gif";

class Services extends Component {
  constructor() {
    super();
    this.state = { servicepage: [] };
  }

  componentDidMount() {
    client
      .getEntries({
        content_type: "services",
        order: "sys.createdAt",
      })
      .then((entries) => {
        this.setState({ servicepage: entries.items });
      });
  }

  render() {
    return (
      <div>
        <section id="services" className="p-4">
          <div className="container">
            <div className="text-center">
              <h2>Our Services</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur in vestibulum ligula.
              </p>
            </div>

            {this.state.servicepage.length === 0 ? (
              <div align="center">
                <img src={loader} alt="loader" />
              </div>
            ) : (
              <div className="row">
                {this.state.servicepage.map((item, index) => {
                  return (
                    <div className="col-md-4" key={item}>
                      <div className="media service-wrap">
                        <div>
                          <img
                            className="pr-3"
                            src={item.fields.serviceIcon.fields.file.url}
                            alt=""
                          />
                        </div>
                        <div className="media-body">
                          <h3 className="media-heading">
                            {item.fields.serviceTitle}
                          </h3>
                          <p>{item.fields.serviceDescription}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* End of container */}
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
