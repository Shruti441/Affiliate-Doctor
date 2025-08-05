import React from "react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.left}>
        <div style={styles.brand}>AMRUTAM</div>
        <button onClick={toggleSidebar} style={styles.menuBtn} aria-label="Toggle sidebar">
          &#9776;
        </button>
      </div>

      <div style={styles.searchWrapper}>
        <span style={styles.searchIcon}> <i className="fas fa-search"></i></span>
        <input
          type="search"
          placeholder="Search here"
          style={styles.searchInput}
          aria-label="Search"
        />
      </div>

      <div style={styles.right}>
        <div style={styles.iconWrapper}>
          <span style={styles.notificationIcon}> <i className="fas fa-bell"></i></span>
          <span style={styles.badge}>2</span>
        </div>
        <div style={styles.iconWrapper}>
          <span style={styles.messageIcon}> <i className="fas fa-comments"></i></span>
          <span style={styles.badge}>3</span>
        </div>

        <div style={styles.profile}>
          <div>
            <div style={styles.profileName}>Dr.Liam Michael</div>
            <div style={styles.profileRole}>Doctor</div>
          </div>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            style={styles.avatar}
          />
        </div>
         <div style={styles.settingsIcon} title="Settings">
            <i className="fas fa-cog"></i>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    height: "60px",
    backgroundColor: "#f8f9f9",
    borderBottom: "1px solid #ddd",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  brand: {
    fontWeight: "700",
    fontSize: "1.3rem",
    color: "#6ba578ff",
    
  },
  menuBtn: {
    fontSize: "24px",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#6ba578ff",
  },
  searchWrapper: {
    flex: 1,
    maxWidth: "400px",
    position: "relative",
    margin: "0 20px",
  },
  searchIcon: {
    position: "absolute",
    top: "50%",
    left: "10px",
    transform: "translateY(-50%)",
    color: "#888",
    fontSize: "18px",
    pointerEvents: "none",
  },
  searchInput: {
    width: "100%",
    padding: "8px 12px 8px 36px",
    borderRadius: "20px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  iconWrapper: {
    position: "relative",
    fontSize: "20px",
    cursor: "pointer",
    color: "#444",
  },
  notificationIcon: {},
  messageIcon: {},
  badge: {
    position: "absolute",
    top: "-6px",
    right: "-8px",
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
    fontSize: "10px",
    padding: "2px 5px",
    fontWeight: "700",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    color: "#2d3a45",
  },
  profileName: {
    fontWeight: "600",
    fontSize: "14px",
  },
  profileRole: {
    fontSize: "12px",
    color: "#888",
  },
  settingsIcon: {
  fontSize: "20px",
  marginLeft: "10px",
  cursor: "pointer",
  color: "#444",
},

  avatar: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    objectFit: "cover",
  },
};

export default Navbar;
