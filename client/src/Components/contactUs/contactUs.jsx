import React from "react";
import "./contactUs.css";
import Picture1 from "../../assets/pictures/saji.png";
import Picture2 from "../../assets/pictures/che.png";
import Picture3 from "../../assets/pictures/kane.png";
import NaduniWeerasinghe from "../../assets/pictures/navi.png";
import ContactUsImg from "../../assets/pictures/about us.jpg";
import TeamLogo from "../../assets/pictures/MW.png";

function ContactUs() {
  return (
    <>
      <div
        className="backImgAB"
        style={{ backgroundImage: `url(${ContactUsImg})` }}
      >
        <div className="containerA">
          <div className="white-containerA">
            {" "}
            {/* Place white-container here */}
            <div className="white-container-borderA">
              {" "}
              {/* Place white-container here */}

              <div className="about-section">
              <p className='title'>CONTACT US</p>
              <div className="divider"></div>
              </div>
              <div className="introA">
                <p>
                  An electronic platform that makes academic lecture
                  administration and organization easier is the online lecture
                  scheduling system. It makes it simple for educators and
                  administrators to plan, organize, and run classes. The
                  efficiency and efficacy of online learning environments are
                  improved by its features, which include access to lecture
                  materials, automated notifications, and integration with video
                  conferencing systems.
                </p>
              </div>
              <div className="rowA">
                <div className="cardA">
                  <div className="card-nameA">
                    <h2>Sajitha Walallawita</h2>
                  </div>
                  <img
                    src={Picture1}
                    alt="Sajitha"
                    style={{ width: "100%", maxWidth: "200px" }}
                  />
                  <div className="containerA">
                    <p className="roleA">Web developer</p>
                  </div>
                </div>
                <div className="cardA">
                  <div className="card-nameA">
                    <h2>Kanesha Thalagahapitiya</h2>
                  </div>
                  <img
                    src={Picture3}
                    alt="Kanesha"
                    style={{ width: "100%", maxWidth: "200px" }}
                  />
                  <div className="containerA">
                    <p className="roleA">UI/UX designer/Web developer.</p>
                  </div>
                </div>
                <div className="cardA">
                  <div className="card-nameA">
                    <h2>Chethana Sankalpa</h2>
                  </div>
                  <img
                    src={Picture2}
                    alt="Chethana"
                    style={{ width: "100%", maxWidth: "200px" }}
                  />
                  <div className="containerA">
                    <p className="roleA">Web developer.</p>
                  </div>
                </div>
                <div className="cardA">
                  <div className="card-nameA">
                    <h2>Naduni Nawanjana</h2>
                  </div>
                  <img
                    src={NaduniWeerasinghe}
                    alt="Naduni"
                    style={{ width: "100%", maxWidth: "200px" }}
                  />
                  <div className="containerA">
                    <p className="roleA">Web developer.</p>
                  </div>
                </div>
              </div>
              <div className="details_containerA">
                <div className="team_logoA">
                  <img src={TeamLogo} alt="Team LogoA" />
                </div>
                <div className="divider_yA"></div>
                <div className="contactDetailsA">
                  <div className="emailA">
                    <i
                      style={{ fontSize: "18px", paddingBottom: "15px" }}
                      class="fa-solid fa-envelopeA"
                    ></i>{" "}
                    <br />
                    <i
                      style={{ fontSize: "18px" }}
                      class="fa-solid fa-phoneA"
                    ></i>
                  </div>
                  <div className="phoneA">
                    <p>metaworkforce@12.yahoo.lk</p>
                    <p>
                      +94703250664{" "}
                      <span>
                        <b>|</b>
                      </span>{" "}
                      +94701870898
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
