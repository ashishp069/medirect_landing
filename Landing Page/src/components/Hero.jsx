import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCmsList } from "../api/cmsApi";
// import "../styles/bootstrap.min.css";


import "../styles/owl.carousel.min.css";
import "../styles/owl.theme.default.min.css";
import "../styles/animate.min.css";
import "../App.css";
import "../styles/responsive.css";


import doctorImg from "../assets/images/sec1-right.png";
import avatar1 from "../assets/images/WebsiteLogo.svg";
import avatar2 from "../assets/images/sec1-right.png";
import footer from "../assets/images/footer-logo.svg";

export default function Hero() {
  const navigate = useNavigate();
  const [cmsData, setCmsData] = useState(null);

  useEffect(() => {
    const fetchCms = async () => {
      try {
        const res = await getCmsList();
        console.log("API:", res);
        setCmsData(res.response);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCms();
  }, []);


  const heroSection = cmsData?.section_1?.[0];
  const aboutSection = cmsData?.section_2?.[0];

  return (
    <>
      {/* HERO SECTION 1 */}
      <section className="container-fluid section-1">
        <div className="row">
          <div className="col-md-6">
            <div className="sec1-left">
              <div className="d-flex align-items-center happy-doctor wow animated fadeInUp">
                <div className="image-sec">
                  <img src={avatar1} alt="" />
                  <img src={avatar1} alt="" />
                  <img src={avatar1} alt="" />
                </div>
                <p>
                  {heroSection?.sub_title || "500+ Happy doctors"}
                  <span className="circle">
                    <span></span>
                  </span>
                </p>
              </div>
              <h1 className="wow animated fadeInUp">{heroSection?.title}</h1>
              <p className="sec1-left-p wow animated fadeInUp">
                {heroSection?.description}
              </p>
              <div className="d-flex align-items-center btn-sec1 wow animated fadeInUp">
                <button className="border-btn">Know more</button>
                <button
                  className="background-btn"
                  onClick={() => navigate("/signup")}
                >
                  Create account
                </button>
              </div>
              <i className="wow animated fadeInUp">No commitments, Cancel anytime</i>
            </div>
          </div>
          <div className="col-md-6 sec1-right wow animated fadeInUp">
            <img
              src={heroSection?.image || doctorImg}
              className="w-100"
              alt="doctor"
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION 2 */}
      <section className="container-fluid section-2" id="about">
        <div className="row">
          <div className="col-md-4">
            <h6 className="wow animated fadeInUp">{aboutSection?.sub_title || "About Doctor"}</h6>
          </div>
          <div className="col-md-8 about-right">
            <h4 className="wow animated fadeInUp">{aboutSection?.title}</h4>
            <p className="wow animated fadeInUp">{aboutSection?.description}</p>
            <button className="background-btn wow animated fadeInUp">Know More</button>
          </div>
        </div>
      </section>

      {/* MARQUEE SECTION */}
      <section className="marquee-section wow animated fadeInUp">
        <marquee className="marquee-1" style={{ position: "relative", zIndex: 9 }}>
          <span>Personalised Website </span>
          <img src="assets/images/star.svg" alt="" />
          <span>Simplified Dashboard</span>
          <img src="assets/images/star.svg" alt="" />
          <span>Online Clinic</span>
        </marquee>
        <marquee className="marquee-1 marquee-2">
          <span>Online Clinic</span>
          <img src="assets/images/star.svg" alt="" />
          <span>Personalised Website </span>
          <img src="assets/images/star.svg" alt="" />
          <span>Simplified Dashboard</span>
        </marquee>
      </section>

      {/* SOLUTION SECTION */}
      <section className="container-fluid" id="oursolution">
        <div className="solution-sec">
          <div className="col-md-6">
            <h6 className="wow animated fadeInUp">
              {cmsData?.section_3?.[0]?.sub_title || "Doctor Solution"}
            </h6>
            <h4 className="wow animated fadeInUp">
              {cmsData?.section_3?.[0]?.title ||
                "Unlock your productivity potential with our intuitive and powerful virtual clinic management app. Manage reservations, collaborate with your team and track progress effortlessly"}
            </h4>
          </div>
        </div>
      </section>

      {/* VIRTUAL CLINICS (FEATURES) SECTION 3 */}
      <section className="container-fluid section-3">
        <div className="row virtual-row">
          {[0, 1, 2].map((item, index) => {
            const data = cmsData?.section_4?.[index];
            return (
              <div className="col-md-4" key={index}>
                <div className={`virtual-sec ${index > 0 ? `virtual-${index + 1}` : ""} wow animated fadeInUp`}>
                  <img src={data?.image || `assets/images/virutual-${index + 1}.svg`} alt="" />
                  <h4>{data?.title}</h4>
                  <p>{data?.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE (INSTANT SETUP) SECTION 4 */}
      <section className="container-fluid section-4" id="whychoose">
        <div className="col-md-6 mx-auto why-1">
          <h4 className="wow animated fadeInUp">{cmsData?.section_5?.[0]?.title}</h4>
          <p className="wow animated fadeInUp">{cmsData?.section_5?.[0]?.description}</p>
        </div>

        {/* Dynamic Mapping for alternating Grid layout */}
        {cmsData?.section_5?.[0]?.sub_sections
          ?.reduce((result, value, index, array) => {
            if (index % 2 === 0) result.push(array.slice(index, index + 2));
            return result;
          }, [])
          .map((pair, rowIndex) => (
            <div className="row instant-row" key={rowIndex}>
              {pair[0] && (
                <>
                  {rowIndex % 2 !== 0 && <div className="col-md-1"></div>}
                  <div className="col-md-5">
                    <div className="why-img">
                      <img src={`assets/images/why-${rowIndex * 2 + 1}.png`} className="w-100 wow animated fadeInUp" alt="" />
                      <div className="why-cont">
                        <h4 className="wow animated fadeInUp">{pair[0].title}</h4>
                        <p className="wow animated fadeInUp">{pair[0].description}</p>
                      </div>
                    </div>
                  </div>
                  {rowIndex % 2 === 0 && <div className="col-md-1"></div>}
                </>
              )}
              {pair[1] && (
                <div className="col-md-5 why-col">
                  <div className="why-img">
                    <img src={`assets/images/why-${rowIndex * 2 + 2}.png`} className="w-100 wow animated fadeInUp" alt="" />
                    <div className="why-cont">
                      <h4 className="wow animated fadeInUp">{pair[1].title}</h4>
                      <p className="wow animated fadeInUp">{pair[1].description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        <button className="background-btn wow animated fadeInUp" onClick={() => navigate("/signup")}>
          Let’s get started
        </button>
      </section>

      {/* HOW IT WORKS SECTION 6 */}
      <section className="container-fluid section-6" id="howitwork">
        <div className="row justify-content-between">
          <div className="col-md-4">
            <h6 className="how-work wow animated fadeInUp">How Doctor works</h6>
          </div>
          <div className="col-md-7 about-right wow animated fadeInUp">
            <h4>{cmsData?.section_6?.[0]?.description}</h4>
          </div>
        </div>
        <div className="create-account">
          <div className="row justify-content-between">
            {cmsData?.section_6?.[0]?.sub_sections?.map((item, index) => (
              <React.Fragment key={item.id || index}>
                <div className={`col-md-5 col-5 ${index === 0 ? "active" : ""} wow animated fadeInUp`}>
                  <h4>{String(index + 1).padStart(2, "0")}. {item.title}</h4>
                </div>
                <div className={`col-md-5 col-7 ${index === 0 ? "active" : ""} wow animated fadeInUp`}>
                  <p>
                    <span></span>
                    {item.description}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* EMPOWERING DOCTORS (BENEFITS) SECTION */}
      <section className="container-fluid empowering" id="benefits">
        <div className="col-md-6 mx-auto emp-1">
          <h1 className="wow animated fadeInUp">
            Empowering Doctors, <span className="d-block">Solving Challenges</span>
          </h1>
          <p className="wow animated fadeInUp">{cmsData?.section_7?.[0]?.description}</p>
        </div>
        <div className="row emp-row">
          <div className="col-md-6">
            <div className="emp-left">
              <h4 className="wow animated fadeInUp">{cmsData?.section_8?.[0]?.title || "Doctors face these challanges"}</h4>
              <ul>
                {cmsData?.section_8?.[0]?.sub_sections?.map((item, i) => (
                  <li className="wow animated fadeInUp" key={i}>
                    <img src="assets/images/emp-left.svg" alt="" />
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="emp-left emp-right">
              <h4 className="wow animated fadeInUp">{cmsData?.section_9?.[0]?.title || "Benefits of a private virtual clinic"}</h4>
              <ul>
                {cmsData?.section_9?.[0]?.sub_sections?.map((item, i) => (
                  <li className="wow animated fadeInUp" key={i}>
                    <img src="assets/images/emp-right.svg" alt="" />
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE GRID SECTION */}
      <section className="container-fluid whychoose">
        <div className="col-md-6 mx-auto emp-1">
          <h1 className="wow animated fadeInUp">{cmsData?.section_10?.[0]?.title || "Why Choose Doctor?"}</h1>
          <p className="wow animated fadeInUp">{cmsData?.section_10?.[0]?.description}</p>
        </div>
        <div className="row why-row">
          {cmsData?.section_10?.[0]?.sub_sections?.map((item, index) => (
            <div className="col-md-4 col-6" key={item.id || index}>
              <div className="why-sec-row">
                <img src={`assets/images/choose-${index + 1}.svg`} className="wow animated fadeInUp" alt="" />
                <h4 className="wow animated fadeInUp">{item.title}</h4>
                <p className="wow animated fadeInUp">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="border-btn d-block mx-auto" onClick={() => navigate("/signup")}>
          Let’s Get started
        </button>
      </section>

      {/* FAQ SECTION */}
      <section className="col-md-7 mx-auto faq">
        <h6>{cmsData?.section_11?.[0]?.title || "Frequently asked questions"}</h6>
        <h3>{cmsData?.section_11?.[0]?.description || "You have questions, We got answers"}</h3>
        <div className="accordion" id="accordionExample">
          {cmsData?.section_11?.[0]?.sub_sections?.map((item, index) => (
            <FaqItem key={item.id || index} item={item} />
          ))}
        </div>
      </section>

      {/* FINAL CTA (LAUNCH) */}
      <section className="container-fluid launch">
        <div className="col-md-6 mx-auto text-center">
          <h2 className="wow animated fadeInUp">{cmsData?.section_12?.[0]?.title || "Ready to launch your online clinic?"}</h2>
          <p className="wow animated fadeInUp">{cmsData?.section_12?.[0]?.description || "Create an account, Add your details, Go online"}</p>
          <button className="w-75 background-btn d-block mx-auto wow animated fadeInUp" onClick={() => navigate("/signup")}>
            Let’s get started
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="container-fluid footer">
        <div className="row">
          <div className="col-md-6">
            <a href="#" className="footer-logo wow animated fadeInUp">
              <img src={footer} alt="logo" />
            </a>
            <div className="foot-menu wow animated fadeInUp">
              <a href="#about">About</a>
              <a href="#whychoose">Why choose us</a>
              <a href="#benefits">Benefits</a>
              <a href="#howitwork">How it works</a>
              <a href="#oursolution">Our solutions</a>
            </div>
          </div>
          <div className="col-md-6">
            <h4 className="wow animated fadeInUp">Discover How Doctor Empowers Doctors</h4>
            <div className="footer-input wow animated fadeInUp">
              <input type="text" placeholder="Enter your email" className="form-control" />
              <button>Get Notified</button>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center footer-last wow animated fadeInUp">
          <p>Copyright © 2025 Doctor Pvt. Ltd. | All Rights Reserved</p>
          <p>
            <a href="#">Privacy Policies</a> | <a href="#">Terms & Conditions</a> | <a href="#">Terms of use</a>
          </p>
        </div>
      </footer>
    </>
  );
}

// Custom FAQ Component utilizing Bootstrap's accordion logic mapped to React State
function FaqItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion-item wow animated fadeInUp">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${!open ? "collapsed" : ""}`}
          type="button"
          onClick={() => setOpen(!open)}
        >
          {item.title}
        </button>
      </h2>
      <div className={`accordion-collapse collapse ${open ? "show" : ""}`}>
        <div className="accordion-body">{item.description}</div>
      </div>
    </div>
  );
}