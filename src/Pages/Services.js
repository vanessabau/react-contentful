import React from "react";
import Service1 from "../Images/services/services1.png";
import Service2 from "../Images/services/services2.png";
import Service3 from "../Images/services/services3.png";
import Service4 from "../Images/services/services4.png";
import Service5 from "../Images/services/services5.png";
import Service6 from "../Images/services/services6.png";

const Services = () => (
  <div>
    <section id="services" className="p-4">
      <div className="container">
        <div className="text-center">
          <h2>Our Services</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            in vestibulum ligula.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="media service-wrap">
              <div>
                <img className="pr-3" src={Service1} alt="" />
              </div>
              <div className="media-body">
                <h3 className="media-heading">Digital Marketing</h3>
                <p>
                  Aenean interdum sit amet sem vitae faucibus. Morbi pharetra
                  risus a sem lacinia bibendum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="media service-wrap">
              <div>
                <img className="pr-3" src={Service2} alt="" />
              </div>
              <div className="media-body">
                <h3 className="media-heading">Digital Marketing</h3>
                <p>
                  Aenean interdum sit amet sem vitae faucibus. Morbi pharetra
                  risus a sem lacinia bibendum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="media service-wrap">
              <div>
                <img className="pr-3" src={Service3} alt="" />
              </div>
              <div className="media-body">
                <h3 className="media-heading">Digital Marketing</h3>
                <p>
                  Aenean interdum sit amet sem vitae faucibus. Morbi pharetra
                  risus a sem lacinia bibendum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="media service-wrap">
              <div>
                <img className="pr-3" src={Service4} alt="" />
              </div>
              <div className="media-body">
                <h3 className="media-heading">Digital Marketing</h3>
                <p>
                  Aenean interdum sit amet sem vitae faucibus. Morbi pharetra
                  risus a sem lacinia bibendum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="media service-wrap">
              <div>
                <img className="pr-3" src={Service5} alt="" />
              </div>
              <div className="media-body">
                <h3 className="media-heading">Digital Marketing</h3>
                <p>
                  Aenean interdum sit amet sem vitae faucibus. Morbi pharetra
                  risus a sem lacinia bibendum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="media service-wrap">
              <div>
                <img className="pr-3" src={Service6} alt="" />
              </div>
              <div className="media-body">
                <h3 className="media-heading">Digital Marketing</h3>
                <p>
                  Aenean interdum sit amet sem vitae faucibus. Morbi pharetra
                  risus a sem lacinia bibendum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Services;
