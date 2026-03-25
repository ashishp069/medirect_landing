import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCmsList } from "../api/cmsApi";
import { getTranslation } from "../arabic";

import "../styles/owl.carousel.min.css";
import "../styles/owl.theme.default.min.css";
import "../styles/animate.min.css";

import footer from "../assets/images/footer-logo.svg";


export default function Hero({language,cmsData}) {
  const navigate = useNavigate();
  const t = getTranslation(language);

  const stripHtml = (html) => {
    if (!html) return "";

    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };


  const heroSection = cmsData?.section_1?.[0];
  const aboutSection = cmsData?.section_2?.[0];
  const title = cmsData?.section_7?.[0]?.title?.split(",");

  // --------------------- Section-1 -------------------------
  const images = [cmsData?.section_1?.[0]?.image, cmsData?.section_1?.[0]?.image2,].filter(Boolean);
  // ---------------------------------------------------------------

  return (
    <>
      {/* HERO SECTION 1 */}
      <section className="container-fluid section-1">
        <div className="row">
          <div className="col-md-6">
            <div className="sec1-left">
              <div className="d-flex align-items-center happy-doctor wow animated fadeInUp">
                <div className="image-sec">
                  {images.map((img, index) => (
                    <img key={index} src={img} alt={`section1-${index}`} />
                  ))}
                </div>
                <p>
                  {stripHtml(heroSection?.sub_title)}
                  <span className="circle">
                    <span></span>
                  </span>
                </p>
              </div>
              <h1 className="wow animated fadeInUp">{stripHtml(heroSection?.title)}</h1>
              <p className="sec1-left-p wow animated fadeInUp">
                {stripHtml(heroSection?.description)}
              </p>
              <div className="d-flex align-items-center btn-sec1 wow animated fadeInUp">
                <button className="border-btn">{t.hero.knowMore}</button>
                <button
                  className="background-btn"
                  onClick={() => navigate("/signup")}
                >
                  {t.hero.createAccount}
                </button>
              </div>
              <i className="wow animated fadeInUp">{t.hero.noCommitment}</i>
            </div>
          </div>
          <div className="col-md-6 sec1-right wow animated fadeInUp">
            <img
              src={heroSection?.image}
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
            <h6 className="wow animated fadeInUp">{stripHtml(aboutSection?.sub_title)}</h6>
          </div>
          <div className="col-md-8 about-right">
            <h4 className="wow animated fadeInUp">{stripHtml(aboutSection?.title)}</h4>
            <p className="wow animated fadeInUp">{stripHtml(aboutSection?.description)}</p>
            <button className="background-btn wow animated fadeInUp">{t.about.knowMore}</button>
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
      {/* <section className="container-fluid" id="oursolution">
        <div className="solution-sec">
          <div className="col-md-6">
            <h6 className="wow animated fadeInUp">
              {stripHtml(cmsData?.section_3?.[0]?.title) || ""}
            </h6>
            <h4 className="wow animated fadeInUp">
              {stripHtml(cmsData?.section_3?.[0]?.description) ||
                ""}
            </h4>
          </div>
        </div>
      </section> */}

      {/* VIRTUAL CLINICS (FEATURES) SECTION 3 */}
      <section className="container-fluid section-3 px-3">
        <div className="row">
          <div className="col-12">
            <div className="solution-sec"
              style={{ backgroundImage: `url(${cmsData?.section_3?.[0]?.image})` }}>
              <h6 className="col-md-6 wow animated fadeInUp">
                {stripHtml(cmsData?.section_3?.[0]?.title || "")}
              </h6>
              <div className="col-xl-6 col-lg-8 col-md-10">
                <h4 className="wow animated fadeInUp">
                  {stripHtml(cmsData?.section_3?.[0]?.description || "")}
                </h4>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE (INSTANT SETUP) SECTION 4 */}
      <section className="container-fluid section-4" id="whychoose">
        <div className="col-lg-6 col-md-10 mx-auto why-1">
          <h4 className="wow animated fadeInUp">{stripHtml(cmsData?.section_5?.[0]?.title)}</h4>
          <p className="wow animated fadeInUp">{stripHtml(cmsData?.section_5?.[0]?.description)}</p>
        </div>

        {/* Dynamic Mapping for alternating Grid layout SECTION 5 */}
        {cmsData?.section_5?.[0]?.sub_sections?.reduce((result, value, index, array) => {
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
                      <img src={pair[0]?.image} className="w-100 wow animated fadeInUp" alt="" />
                      <div className="why-cont">
                        <h4 className="wow animated fadeInUp">{stripHtml(pair[0].title)}</h4>
                        <p className="wow animated fadeInUp">{stripHtml(pair[0].description)}</p>
                      </div>
                    </div>
                  </div>
                  {rowIndex % 2 === 0 && <div className="col-md-1"></div>}
                </>
              )}
              {pair[1] && (
                <div className="col-md-5 why-col">
                  <div className="why-img">
                    <img src={pair[1]?.image} className="w-100 wow animated fadeInUp" alt="" />
                    <div className="why-cont">
                      <h4 className="wow animated fadeInUp">{stripHtml(pair[1].title)}</h4>
                      <p className="wow animated fadeInUp">{stripHtml(pair[1].description)}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        <button className="background-btn wow animated fadeInUp" onClick={() => navigate("/signup")}>
          {t.buttons.getStarted}
        </button>
      </section>

      {/* HOW IT WORKS SECTION 6 */}
      <section className="container-fluid section-6" id="howitwork">
        <div className="row justify-content-between">
          <div className="col-md-4">
            <h6 className="how-work wow animated fadeInUp">{stripHtml(cmsData?.section_6?.[0]?.title)}</h6>
          </div>
          <div className="col-md-7 about-right wow animated fadeInUp">
            <h4>{stripHtml(cmsData?.section_6?.[0]?.description)}</h4>
          </div>
        </div>
        <div className="create-account">
          <div className="row justify-content-between">
            {cmsData?.section_6?.[0]?.sub_sections?.map((item, index) => (
              <React.Fragment key={item.id || index}>
                <div className={`col-lg-5 col-md-6 col-5 ${index === 0 ? "active" : ""} wow animated fadeInUp`}>
                  <h4>
                    {String(index + 1).padStart(2, "0")}. {stripHtml(item.title)}
                  </h4>
                </div>
                <div className={`col-lg-5 col-md-6 col-7 ${index === 0 ? "active" : ""} wow animated fadeInUp`}>
                  <p>
                    <span></span>
                    {stripHtml(item.description)}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* EMPOWERING DOCTORS (BENEFITS) SECTION */}
      <section className="container-fluid empowering" id="benefits">
        <div className="col-lg-6 col-md-10 mx-auto emp-1">
          <h1 className="wow animated fadeInUp">
            {stripHtml(title?.[0])},
            <span className="d-block">{stripHtml(title?.[1])}</span>
          </h1>
          <p className="wow animated fadeInUp">{stripHtml(cmsData?.section_7?.[0]?.description)}</p>
        </div>
        <div className="row emp-row">
          <div className="col-md-6">
            <div className="emp-left">
              <h4 className="wow animated fadeInUp">{stripHtml(cmsData?.section_8?.[0]?.title) || ""}</h4>
              <ul>
                {cmsData?.section_8?.[0]?.sub_sections?.map((item, i) => (
                  <li className="wow animated fadeInUp" key={i}>
                    <img src={item.image} alt={"icon"} />
                    {stripHtml(item.title)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="emp-left emp-right">
              <h4 className="wow animated fadeInUp">{stripHtml(cmsData?.section_9?.[0]?.title) || ""}</h4>
              <ul>
                {cmsData?.section_9?.[0]?.sub_sections?.map((item, i) => (
                  <li className="wow animated fadeInUp" key={i}>
                    <img src={item.image} alt={"icon"} />
                    {stripHtml(item.title)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE GRID SECTION */}
      <section className="container-fluid whychoose">
        <div className="col-lg-6 col-md-10 mx-auto emp-1">
          <h1 className="wow animated fadeInUp">{stripHtml(cmsData?.section_10?.[0]?.title) || "Why Choose Medirect?"}</h1>
          <p className="wow animated fadeInUp">{stripHtml(cmsData?.section_10?.[0]?.description)}</p>
        </div>
        <div className="row why-row">
          {cmsData?.section_10?.[0]?.sub_sections?.map((item, index) => (
            <div className="col-md-4 col-6" key={item.id || index}>
              <div className="why-sec-row">
                <img
                  src={item.image}
                  className="wow animated fadeInUp"
                  alt={stripHtml(item.title) || "icon"}
                />                <h4 className="wow animated fadeInUp">{stripHtml(item.title)}</h4>
                <p className="wow animated fadeInUp">{stripHtml(item.description)}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="border-btn d-block mx-auto" onClick={() => navigate("/signup")}>
          {t.buttons.getStarted}
        </button>
      </section>

      {/* FAQ SECTION */}
      <section className="col-lg-7 col-md-10 mx-auto faq">
        <h6>{stripHtml(cmsData?.section_11?.[0]?.title) || ""}</h6>
        <h3>{stripHtml(cmsData?.section_11?.[0]?.description) || ""}</h3>
        <div className="accordion" id="accordionExample">
          {cmsData?.section_11?.[0]?.sub_sections?.map((item, index) => (
            <FaqItem key={item.id || index} item={item} />
          ))}
        </div>
      </section>

      {/* FINAL CTA (LAUNCH) */}
      <section className="container-fluid launch">
        <div className="col-lg-6 col-md-10 mx-auto text-center">
          <h2 className="wow animated fadeInUp">{stripHtml(cmsData?.section_12?.[0]?.title) || ""}</h2>
          <p className="wow animated fadeInUp">{stripHtml(cmsData?.section_12?.[0]?.description) || ""}</p>
          <button className="w-75 background-btn d-block mx-auto wow animated fadeInUp" onClick={() => navigate("/signup")}>
            {t.buttons.getStarted}
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
              <a href="#about">{t.navbar.about}</a>
              <a href="#whychoose">{t.navbar.whyChoose}</a>
              <a href="#benefits">{t.navbar.benefits}</a>
              <a href="#howitwork">{t.navbar.howItWorks}</a>
              <a href="#oursolution">{t.navbar.solutions}</a>
            </div>
          </div>
          <div className="col-md-6">
            <h4 className="wow animated fadeInUp">{t.footer.discover}</h4>
            <div className="footer-input wow animated fadeInUp">
              <input type="text" placeholder={t.footer.emailPlaceholder} className="form-control" />
              <button>{t.footer.getNotified}</button>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center footer-last wow animated fadeInUp">
          <p>{t.footer.copyright}</p>
          <p>
            <a href="#">{t.footer.privacy}</a> | <a href="#">{t.footer.terms}</a> | <a href="#">{t.footer.termsUse}</a>
          </p>
        </div>
      </footer>
    </>
  );
}

// Custom FAQ Component utilizing Bootstrap's accordion logic mapped to React State
function FaqItem({ item }) {
  const [open, setOpen] = useState(false);

  const stripHtml = (html) => {
    if (!html) return "";
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <div className="accordion-item wow animated fadeInUp">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${!open ? "collapsed" : ""}`}
          type="button"
          onClick={() => setOpen(!open)}
        >
          {stripHtml(item.title)}
        </button>
      </h2>
      <div className={`accordion-collapse collapse ${open ? "show" : ""}`}>
        <div className="accordion-body">
          {stripHtml(item.description)}
        </div>
      </div>
    </div>
  );
}