import React from "react"

import HomeHeroImage from "../../assets/images/motc-fb-cover-2.jpg";

import "./HomePage.css";

const HomePage = () => {
  return (
    <section className="homePage">
      <div className="homeHeroSection">
        <img src={HomeHeroImage} alt="" />
        <h1 className="companyName">MOSI-OA-TUNYA CUBS FOOTBALL ACADEMY.</h1>
      </div>
      <div className="homeHeroAcademyProgFocus">
        <h1 className="homeHeroAcademyProgFocusHeadline">We Focus On</h1>
        <ul role="list" className="homeHeroAcademyProgFocusList">
          <li className="homeHeroAcademyProgFocusItem">Skill Development</li>
          <li className="homeHeroAcademyProgFocusItem">Teamwork & Sportsmanship</li>
          <li className="homeHeroAcademyProgFocusItem">Fun & Friendly Atmosphere</li>
          <li className="homeHeroAcademyProgFocusItem">Competitive Opportunities</li>
          <li className="homeHeroAcademyProgFocusItem">Path to Professionalism</li>
          <li className="homeHeroAcademyProgFocusItem">Football and Academic Balance</li>
        </ul>
      </div>
      <div className="homeHeroSection">
        <h1 className="homeHeadline">Mosi-Oa-Tunya Cubs Football Academy: Building The Apex Generation.</h1>
        <p className="homeSubHeadline">Play with Heart, Practice with Patience.</p>
      </div>

      <div className="homeIntroSection">
        <p className="homeWelcomeText">
          Welcome to Mosi-Oa-Tunya Cubs Football Academy, a dynamic youth football program in Lusaka, Zambia. Inspired by the strength and unity of the lion pride, we provide high-quality coaching, focusing on skill development, character building, and academic progress for children aged 5-13. We strive to create a positive and supportive environment where young players can thrive both on and off the field.
        </p>
        <p className="homeOverviewText">
          As Zambia's premier youth football academy, we are dedicated to holistic player development, community engagement, and innovative use of technology. Our passionate mentors empower young players to reach their full potential, fostering a lifelong love for the game and instilling valuable life skills. Join us for a transformative football journey!
        </p>
      </div>

      {/* <div className="homeCallToAction">
        <button className="ctaButton primaryCta">Explore Our Programs</button>
        <button className="ctaButton secondaryCta">Contact Us</button>
      </div> */}
    </section>
  );
};

export default HomePage;
