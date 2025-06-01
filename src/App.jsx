import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import OurServicesPage from "./pages/OurServicesPage";
import ContactUsPage from "./pages/ContactUsPage";
import OurProgramsPage from "./pages/OurProgramsPage/OurProgramsPage";
import ManagementTeamPage from "./pages/ManagementTeam/ManagementTeam";
import OurCommitmentPage from "./pages/OurCommitmentPage/OurCommitmentPage";
import OurApproachPage from "./pages/OurApproachPage/OurApproachPage";

/* POLICIES PAGE */
import PublicCodeOfConductPage from "./pages/PublicCodeOfConductPage/PublicCodeOfConductPage";
import PlayerConsentFormPage from "./pages/PlayerConsentFormPage/PlayerConsentFormPage";
import PlayerPrivacyPolicyPage from "./pages/PlayerPrivacyPolicyPage/PlayerPrivacyPolicy";

import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="primaryHeader">
        <nav className="primaryNavigation">
          <Link to="/" className="primaryLogoContainer">
            <div className="primaryLogo"></div>
          </Link>
          <ul className="primaryNavList" role="list">
            <li className="navItem">
              <Link className="navLink" to="/AboutUsPage">
                About
              </Link>
            </li>
            <li className="navItem">
              <Link className="navLink" to="/OurServicesPage">
                Services
              </Link>
            </li>
            <li className="navItem">
              <Link className="navLink" to="/OurApproachPage">
                Approach
              </Link>
            </li>
            <li className="navItem">
              <Link className="navLink" to="/OurProgramsPage">
                Programs
              </Link>
            </li>
            <li className="navItem">
              <Link className="navLink" to="/OurCommitmentPage">
                Commitment
              </Link>
            </li>
            {/* <li className="navItem">
              <Link className="navLink" to="/ManagementTeamPage">
                Mgmt Team
              </Link>
            </li> */}
            <li className="navItem">
              <Link className="navLink" to="/ContactUsPage">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="mainSection">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutUsPage" element={<AboutUsPage />} />
          <Route path="/OurServicesPage" element={<OurServicesPage />} />
          <Route path="/ContactUsPage" element={<ContactUsPage />} />
          <Route path="/OurProgramsPage" element={<OurProgramsPage />} />
          <Route path="/ManagementTeamPage" element={<ManagementTeamPage />} />
          <Route path="/OurCommitmentPage" element={<OurCommitmentPage />} />
          <Route path="/OurApproachPage" element={<OurApproachPage />} />

          {/* Policies Pages */}

          <Route path="/PublicCodeOfConductPage" element={<PublicCodeOfConductPage />} />
          <Route path="/PlayerConsentFormPage" element={<PlayerConsentFormPage />} />
          <Route path="/PlayerPrivacyPolicyPage" element={<PlayerPrivacyPolicyPage />} />

          {/* <Route path="*" element={<NotFound/>} /> */}
        </Routes>
      </main>
      <footer className="footer">
        <nav className="footerNavigation">
          <div className="footerLogo">Logo</div>
          <ul className="footerNavList" role="list">
            <li className="footerNavItem">
              <Link className="footerNavLink" to="/">
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link className="footerNavLink" to="/AboutUsPage">
                About
              </Link>
            </li>
            <li className="navItem">
              <Link className="footerNavLink" to="/OurServicesPage">
                Services
              </Link>
            </li>
            <li className="navItem">
              <Link className="footerNavLink" to="/ContactUsPage">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <ul role="list" className="policies">
          <li>
            <Link to="/PlayerPrivacyPolicyPage" >Player Privacy Policy</Link>
          </li>
          <li>
            <Link to="/PlayerConsentFormPage" >Player Consent Form</Link>
          </li>
          <li>
            <Link to="PublicCodeOfConductPage" >Public Code of Conduct</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
