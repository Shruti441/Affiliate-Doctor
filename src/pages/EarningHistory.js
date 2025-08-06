import React, { useState } from "react";

const earningData = [
  {
    id: 1,
    name: "Amrutam Nari Sondarya Malt",
   avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    newTag: true,
    date: "19 Oct, 2024",
    time: "04 : 10 PM",
    coupon: "AMU2344",
    commission: "15%",
    earning: "INR 120",
    status: "Paid",
  },
  {
    id: 2,
    name: "Smith Bruklin",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    newTag: false,
    date: "19 Oct, 2024",
    time: "05 : 10 PM",
    coupon: "AMU2344",
    commission: "15%",
    earning: "INR 112",
    status: "Paid",
  },
  {
    id: 3,
    name: "Andrea Lalemat",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    newTag: false,
    date: "18 Oct, 2024",
    time: "06 : 10 PM",
    coupon: "AMU2344",
    commission: "25%",
    earning: "INR 82",
    status: "Pending",
  },
];

const EarningHistory = () => {
  const [search, setSearch] = useState("");

  const filteredEarnings = earningData.filter((entry) =>
    entry.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h3 style={styles.title}>Earning History</h3>

          <div style={styles.controlsWrapper}>
            <div style={styles.searchWrapper}>
              <i className="fa-solid fa-magnifying-glass" style={{ color: "#88A08D" }}></i>
              <input
                type="search"
                placeholder="Search here"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={styles.searchInput}
              />
            </div>
            <button style={styles.iconBtn}><i className="fa-solid fa-arrows-rotate"></i></button>
            <button style={styles.iconBtn}><i className="fa-solid fa-up-down"></i></button>
            <button style={styles.iconBtn}><i className="fa-solid fa-filter"></i></button>
          </div>
        </div>

        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeadRow}>
              
              <th>S. No.</th>
              <th>Product Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Coupon/Link</th>
              <th>Commission</th>
              <th>Earning</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredEarnings.map((entry, i) => (
              <tr key={entry.id} style={styles.tableBodyRow}>
                <td><input type="checkbox" /> {i + 1}.</td>
                
                <td style={styles.nameCell}>
                  <img src={entry.avatar} alt={entry.name} style={styles.avatar} />
                  <span>{entry.name}</span>
                  {entry.newTag && <span style={styles.newTag}>New</span>}
                </td>
                <td>{entry.date}</td>
                <td>{entry.time}</td>
                <td>{entry.coupon}</td>
                <td>{entry.commission}</td>
                <td>{entry.earning}</td>
                <td style={{ color: entry.status === "Paid" ? "green" : "red" }}>
                  {entry.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={styles.footer}>
          <span style={styles.rowsPerPage}>Rows per page: 8</span>
          <div style={styles.pagination}>
            <span>1-8 of 80</span>
            <button style={styles.paginationBtn}>&lt;</button>
            <button style={styles.paginationBtn}>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "24px",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },
  title: {
    fontSize: "16px",
    fontWeight: "600",
    margin: 0,
  },
  controlsWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flexWrap: "nowrap",
  },
  searchWrapper: {
    background: "#f6f6fa",
    borderRadius: "20px",
    padding: "6px 12px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  searchInput: {
    border: "none",
    outline: "none",
    background: "transparent",
    fontSize: "14px",
  },
  iconBtn: {
    background: "#f6f6fa",
    border: "none",
    borderRadius: "10px",
    padding: "8px",
    cursor: "pointer",
    fontSize: "14px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "14px",
  },
  tableHeadRow: {
    textAlign: "left",
    color: "#555",
    borderBottom: "1px solid #eee",
  },
  tableBodyRow: {
    borderBottom: "1px solid #eee",
    height: "48px",
  },
  nameCell: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  avatar: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  newTag: {
    background: "#ffd700",
    fontSize: "10px",
    padding: "2px 6px",
    borderRadius: "4px",
    color: "#555",
    marginLeft: "6px",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "16px",
    fontSize: "12px",
    color: "#666",
  },
  rowsPerPage: {},
  pagination: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  paginationBtn: {
    border: "1px solid #ccc",
    padding: "4px 8px",
    borderRadius: "4px",
    background: "#fff",
    cursor: "pointer",
  },
};

export default EarningHistory;
