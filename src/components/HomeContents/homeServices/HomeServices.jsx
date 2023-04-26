import React from "react";
import { NavLink } from "react-router-dom";
import { Services } from "../../Constant/constant";
import "./homeServices.scss";
const HomeServices = () => {


  return (
    <>
      <div className="home-services">
        <div className="home-services-content">
          <h1>OUR DNA</h1>
          <p>
            Technowis is a software development firm that has been serving the
            industry for the last 5 years. It has grown from a team of 3
            employers to 50+ employees with its own in-house software developers
            who are experienced in a wide variety of tech stacks & frameworks.
            Moreover, our immense experience with various industries like
            healthcare, education, and even cryptocurrency makes us agnostic.
          </p>
          <h1>OUR SERVICES</h1>
          <p>
            We provide our clients with bespoke software solutions to keep their
            business up-to-date with the elevating market demands.
          </p>
        </div>
        <div className="services-button">
          {Services.map((item) => (
            <div
              // exact
              to={item.path}
              key={item.key}
              className="link"
              activeClassName="active"
            >
              <div className="icon-name">{item.name}</div>
              <div className="icon">{item.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeServices;
