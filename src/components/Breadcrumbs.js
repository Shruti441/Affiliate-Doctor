// src/components/Breadcrumbs.js
import React from "react";
import { useLocation, Link } from "react-router-dom";

// 1️⃣ Add name mapping here
const nameMap = {
    wallet: "Wallet",
    overview: "Overview",
    transactions: "Transactions",
    affiliate: "Affiliate",
    dashboard: "Dashboard",
    "referral-tool": "Referral Tool",
    "earning-history": "Earning History",
    patients: "Patients",
    chat: "Chat",
    consultation: "Consultation",
    "doctor-schedule": "Doctor Schedule",
    appointments: "Appointments",
};

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <div style={{ fontSize: "14px", marginBottom: "20px", color: "#666" }}>
            <Link to="/" style={{ color: "#999", textDecoration: "none" }}>
                Home
            </Link>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;

                // Decode URL-encoded parts
                const decodedValue = decodeURIComponent(value);

                // Use nameMap with decoded value, fallback to capitalized decoded value
                const label = nameMap[decodedValue.toLowerCase()] || decodedValue.charAt(0).toUpperCase() + decodedValue.slice(1);

                return (
                    <span key={to}>
                        {" > "}
                        {isLast ? (
                            <span style={{ color: "#333" }}>{label}</span>
                        ) : (
                            <Link to={to} style={{ color: "#999", textDecoration: "none" }}>
                                {label}
                            </Link>
                        )}
                    </span>
                );
            })}

        </div>
    );
};

export default Breadcrumbs;