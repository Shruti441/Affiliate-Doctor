import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";  // or wherever your Navbar.js is
import Breadcrumbs from '../components/Breadcrumbs';
import Dashboard from "../pages/Dashboard"; // Adjust path if Dashboard.js is in pages folder and Page.js is also in pages folder
import ReferralTool from "../pages/ReferralTool";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const Sidebar = ({
  isOpen,
  walletDropdownOpen,
  affiliateDropdownOpen,
  toggleWalletDropdown,
  toggleAffiliateDropdown
}) => {

  return (
    <div style={{ ...styles.sidebar, left: isOpen ? 0 : "-220px" }}>
      <h3>Main</h3>
      <nav>
        <ul style={styles.navList}>
          <li>
            <Link to="/Dashboard" style={styles.link} onClick={() => { }}>
              <div style={styles.iconWrapper}>
                <i className="fas fa-th-large" style={styles.icon}></i>
              </div>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/Patients" style={styles.link}>
              <div style={styles.iconWrapper}>
                <i className="fas fa-user-injured"></i>
              </div>
              Patients
            </Link>
          </li>
          <li>
            <Link to="/Doctor Schedule" style={styles.link}>
              <div style={styles.iconWrapper}>
                <i className="fas fa-calendar-alt"></i>
              </div>
              Doctor Schedule
            </Link>
          </li>
          <li>
            <Link to="/Appointments" style={styles.link}>
              <div style={styles.iconWrapper}>
                <i className="fas fa-calendar-check"></i>
              </div>
              Appointments
            </Link>
          </li>
          <li>
            <Link to="/chat" style={styles.link}>
              <div style={styles.iconWrapper}>
                <i className="fas fa-comment-alt"></i>
              </div>
              Chat
            </Link>
          </li>
          <li>
            <Link to="/Consultation" style={styles.link}>
              <div style={styles.iconWrapper}>
                <i className="fas fa-stethoscope"></i>
              </div>
              Consultaion
            </Link>
          </li>
          <li style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Link to="/wallet" style={{ ...styles.link, flex: 1, display: "flex", alignItems: "center" }}>
              <div style={styles.iconWrapper}>
                <i className="fas fa-wallet" style={styles.icon}></i>
              </div>
              Wallet
            </Link>
            <button
              onClick={toggleWalletDropdown}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                padding: 0,
              }}
              aria-label="Toggle Wallet submenu"
            >
              {walletDropdownOpen ? (
                <i className="fas fa-chevron-down"></i>
              ) : (
                <i className="fas fa-chevron-right"></i>
              )}
            </button>
          </li>
          {walletDropdownOpen && (
            <ul style={styles.dropdownList}>
              <li>
                <Link to="/Wallet/Overview" style={styles.link}>
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/Wallet/Transactions" style={styles.link}>
                  Transactions
                </Link>
              </li>
            </ul>
          )}

          <li style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Link to="Affiliate" style={{ ...styles.link, flex: 1, display: "flex", alignItems: "center" }}>
              <div style={styles.iconWrapper}>
                <i className="fas fa-user-friends" style={styles.icon}></i>
              </div>
              Affiliate
            </Link>
            <button
              onClick={toggleAffiliateDropdown}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                padding: 0,
              }}
              aria-label="Toggle Affiliate submenu"
            >
              {affiliateDropdownOpen ? (
                <i className="fas fa-chevron-down"></i>
              ) : (
                <i className="fas fa-chevron-right"></i>
              )}
            </button>
          </li>
          {affiliateDropdownOpen && (
            <ul style={styles.dropdownList}>
              <li>
                <Link to="/Affiliate/Dashboard" style={styles.link}>Dashboard</Link>
              </li>
              <li>
                <Link to="/Affiliate/Referral Tool" style={styles.link}>Referral Tool</Link>
              </li>
              <li>
                <Link to="/Affiliate/Earning History" style={styles.link}>Earning History</Link>
              </li>
            </ul>
          )}

        </ul>
      </nav>
    </div>
  );
};

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <p>This is the Home content.</p>
  </div>
);
const About = () => (
  <div>
    <h1>About Page</h1>
    <p>This is the About content.</p>
  </div>
);
const Option1 = () => (
  <div>
    <h1>Option 1</h1>
    <p>Details for Option 1.</p>
  </div>
);
const Option2 = () => (
  <div>
    <h1>Option 2</h1>
    <p>Details for Option 2.</p>
  </div>
);
const Option3 = () => (
  <div>
    <h1>Option 3</h1>
    <p>Details for Option 3.</p>
  </div>
);

const Page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [walletDropdownOpen, setWalletDropdownOpen] = useState(false);
  const [affiliateDropdownOpen, setAffiliateDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(true);  // New modal state, show by default





  // Hide sidebar on smaller screens by default
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen(open => !open);

  const toggleWalletDropdown = () => {
    setWalletDropdownOpen(open => !open);
    setAffiliateDropdownOpen(false); // close affiliate dropdown when wallet toggles
  };

  const toggleAffiliateDropdown = () => {
    setAffiliateDropdownOpen(open => !open);
    setWalletDropdownOpen(false); // close wallet dropdown when affiliate toggles
  };

  return (
    <>
      {showModal && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.modal}>
            <img
              src="/affiliate-illustration.png"
              alt="Affiliate Earnings"
              style={modalStyles.image}
            />
            <h2 style={modalStyles.title}>Introducing Affiliate Earnings</h2>
            <p style={modalStyles.text}>
              Start earning by recommending Amrutam products in your patient routines. Get commissions for every successful referral through your unique link or coupon.
            </p>
            <button
              onClick={() => setShowModal(false)}
              style={modalStyles.button}
            >
              Get Started
            </button>

          </div>
        </div>
      )}

      {!showModal && (
        <Router>
          <div style={styles.page}>
            <Navbar toggleSidebar={toggleSidebar} />
            <div style={styles.main}>
              <Sidebar
                isOpen={sidebarOpen}
                walletDropdownOpen={walletDropdownOpen}
                affiliateDropdownOpen={affiliateDropdownOpen}
                toggleWalletDropdown={toggleWalletDropdown}
                toggleAffiliateDropdown={toggleAffiliateDropdown}
              />
              <div style={styles.body}>
                <Breadcrumbs />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/patients" element={<About />} />
                  <Route path="/doctor-schedule" element={<About />} />
                  <Route path="/appointments" element={<About />} />
                  <Route path="/chat" element={<About />} />
                  <Route path="/consultation" element={<About />} />

                  {/* Nested Wallet routes */}
                  <Route path="/wallet/overview" element={<Option1 />} />
                  <Route path="/wallet/transactions" element={<Option2 />} />

                  {/* Nested Affiliate routes */}
                  <Route path="/affiliate/dashboard" element={<Dashboard />} />
                  <Route path="//Affiliate/Referral Tool" element={<ReferralTool />} />
                  <Route path="/affiliate/earning-history" element={<Option3 />} />
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      )}
    </>
  );
};


const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  navbar: {
    height: "60px",
    backgroundColor: "#333",
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  menuBtn: {
    fontSize: "24px",
    marginRight: "20px",
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    cursor: "pointer",
    display: "none",
  },
  main: {
    display: "flex",
    flex: 1,
    overflow: "hidden",
  },
  sidebar: {
    width: "220px",
    backgroundColor: "#f4f4f4",
    padding: "15px",
    borderRight: "1px solid #ccc",
    transition: "left 0.3s ease",
    position: "relative",
    left: 0,
    borderTopRightRadius: "54px",     // Top right curve
    borderBottomRightRadius: "54px",  // Bottom right curve
    boxShadow: "2px 0 8px rgba(0,0,0,0.1)",  // subtle shadow for depth
  },
  navList: {
    listStyle: "none",
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#333",
    display: "flex",
    alignItems: "center",
    padding: "8px 12px",
    borderRadius: "6px",
    fontSize: "16px",
    transition: "background-color 0.2s",
  },
  dropdownBtn: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#ddd",
    border: "none",
    textAlign: "left",
  },
  dropdownList: {
    listStyle: "none",
    paddingLeft: "15px",
    marginTop: "8px",
  },
  body: {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
  },
  navItem: {
    marginBottom: "10px"
  },
  iconWrapper: {
    width: "34px",
    height: "34px",
    borderRadius: "12px",
    backgroundColor: "#d0d0ddff", // light soft background
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10px",
  },
  icon: {
    fontSize: "16px",
  },

  // Media query styles will be added in CSS below
};

// Add media query CSS separately:
const styleSheet = `
  @media (max-width: 767px) {
    .menuBtn {
      display: inline-block !important;
    }
    .sidebar {
      position: fixed !important;
      top: 60px !important;
      left: 0 !important;
      height: calc(100% - 60px) !important;
      z-index: 1000 !important;
      box-shadow: 2px 0 5px rgba(0,0,0,0.3) !important;
      background-color: #f4f4f4 !important;
      transition: left 0.3s ease !important;
    }
    .main {
      margin-left: 0 !important;
    }
  }
`;

// Inject style for media query:
if (typeof document !== "undefined") {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = styleSheet;
  document.head.appendChild(styleTag);
}

// New modal styles
const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  modal: {
    width: "290px",
    backgroundColor: "white",
    borderRadius: "15px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.25)",
    padding: "30px",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  image: {
    width: "160px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "20px",
    marginBottom: "15px",
    color: "#2F4F4F",
  },
  text: {
    fontSize: "13px",
  },
  button: {
    backgroundColor: "#3B5738",
    color: "white",
    border: "none",
    padding: "12px 30px",
    borderRadius: "6px",
    fontSize: "15px",
    cursor: "pointer",
  },
};


export default Page;
