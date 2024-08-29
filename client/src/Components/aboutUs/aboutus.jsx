import React from "react";
import AboutUsImg from "../../assets/pictures/about us.png";
import Picture1 from "../../assets/pictures/saji.png";
import Picture2 from "../../assets/pictures/che.png";
import Picture3 from "../../assets/pictures/kane.png";
import NaduniWeerasinghe from "../../assets/pictures/navi.png";
import TeamLogo from "../../assets/pictures/MW.png";
import "./aboutus.css";

function aboutus() {
  return (
    <>
      <div
        className="backImgA"
        style={{ backgroundImage: `url(${AboutUsImg})` }}
      >
        
        <div className="containerAb">
          <div className="white-containerAb">
            {" "}
            {/* Place white-container here */}
            <div className="white-container-borderA">
              {" "}
              {/* Place white-container here */}

          <div className="about-section">
          <p className='title'>ABOUT US</p>
          <div className="divider"></div>


        </div>
              <div className="introAb">
                <p>
                KDU’s online lecture scheduling system also include details on how the system offers real-time updates, user-friendly interfaces, and customizable features to meet the specific needs of students and faculty. It can emphasize how the system enhances communication, organization, and accessibility for all users involved in the scheduling process. This system improves efficiency and effectiveness.  This is the best solution for solving the current problems of manual lecture scheduling system in KDU.
                </p>
              </div>
              {/* </div>
              <div className="row">
                <div className="card">
                  <div className="card-name">
                    <h2>Sajitha Walallawita</h2>
                  </div>
                  <img
                    src={Picture1}
                    alt="Sajitha"
                    style={{ width: "100%", maxWidth: "200px" }}
                  />
                  <div className="container">
                    <p className="role">Web developer</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-name">
                    <h2>Kanesha Thalagahapitiya</h2>
                  </div>
                  <img
                    src={Picture3}
                    alt="Kanesha"
                    style={{ width: "100%", maxWidth: "200px" }}
                  />
                  <div className="container">
                    <p className="role">UI/UX designer/Web developer</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-name">
                    <h2>Chethana Sankalpa</h2>
                  </div>
                  <img
                    src={Picture2}
                    alt="Chethana"
                    style={{ width: "100%", maxWidth: "200px" }}
                  />
                  <div className="container">
                    <p className="role">Web Developer</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-name">
                    <h2>Naduni Navanjana </h2>
                  </div>
                  <img
                    src={NaduniWeerasinghe}
                    alt="Naduni"
                    style={{ width: "100%", maxWidth: "200px" }}
                  />
                  <div className="container">
                    <p className="role">Web developer</p>
                  </div>
                </div>
              </div>
              <div className="details_container">
                <div className="team_logo">
                  <img src={TeamLogo} alt="Team Logo" />
                </div>
                <div className="divider_y"></div>
                <div className="contactDetails">
                  <div className="email">
                    <i
                      style={{ fontSize: "18px", paddingBottom: "15px" }}
                      class="fa-solid fa-envelope"
                    ></i>{" "}
                    <br />
                    <i
                      style={{ fontSize: "18px" }}
                      class="fa-solid fa-phone"
                    ></i>
                  </div>
                  <div className="phone">
                    <p>metaworkforce@gmail.com</p>
                    <p>
                      +123456789{" "}
                      <span>
                        <b>|</b>
                      </span>{" "}
                      +93443242342
                    </p>
                  </div>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default aboutus;
