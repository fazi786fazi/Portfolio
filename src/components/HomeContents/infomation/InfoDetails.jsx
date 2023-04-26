import React from "react";
import { MdFlutterDash } from "react-icons/md";
import { Info } from "../../Constant/constant";
import "./InfoDetails.scss";

const InfoDetails = () => {
  return (
    <div className="info-details">
      <div className="info-wrapper">
        <div className="left-wrapper">
          <h1>WHY CHOOSE US?</h1>
          <p className="info-text">
            Technowis leads you to an advanced floor of alluring designs and
            clear-conscious development. Being industry agnostics, we monitor
            and control all niche specific businesses. Our dedicated team
            ensures custom technical solutions that fit our customers’ needs.
          </p>
          <div className="cards">
            <div className="cards-img">
              <MdFlutterDash size={"60px"} className="logo" />
            </div>
            <div className="cards-info">
              <h3>Scalability</h3>
              <p>Flexible designs to meet your project needs.</p>
            </div>
          </div>
        </div>
        <div className="right-wrapper">
          {Info.map((items) => (
            <div className="cards">
              <div className="cards-img">
                <div className="logo">{items.icon}</div>
              </div>
              <div className="cards-info">
                <h3>{items.title}</h3>
                <p>{items.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoDetails;
