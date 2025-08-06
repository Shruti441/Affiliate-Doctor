import React, { useState } from "react";

const statsData = [

    { label: "Total Coupons clicks", value: 255, suffix: "/month", iconClass: "fa-solid fa-calendar" },
    { label: "Total Orders", value: 55, suffix: "/month", iconClass: "fa-solid fa-cart-shopping" },
    { label: "Total Revenue", value: 5540, suffix: "/month", iconClass: "fa-solid fa-dollar-sign" },
    { label: "Total Link/Coupon", value: 5, suffix: "/month", iconClass: "fa-solid fa-link" },
];

const referralData = [
    {
        id: 1,
        name: "Andrea Lalema",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        newTag: true,
        date: "19 Oct, 2024",
        time: "04:10 PM",
        coupon: "AMU2344",
        commission: "15%",
        clicks: 2,
        orders: 2,
        revenue: 345,
    },
    {
        id: 2,
        name: "Smith Bruklin",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        newTag: false,
        date: "19 Oct, 2024",
        time: "05:10 PM",
        coupon: "AMU2344",
        commission: "15%",
        clicks: 4,
        orders: 4,
        revenue: 564,
    },
    {
        id: 3,
        name: "William Stephin",
        avatar: "https://randomuser.me/api/portraits/men/12.jpg",
        newTag: false,
        date: "18 Oct, 2024",
        time: "06:10 PM",
        coupon: "AMU2344",
        commission: "25%",
        clicks: 1,
        orders: 1,
        revenue: 200,
    },
];

const Dashboard = () => {
    const [search, setSearch] = useState("");
    const [activeTab, setActiveTab] = useState("month");

    const tabs = [
        { key: "today", label: "Today So Far" },
        { key: "week", label: "Week So Far" },
        { key: "month", label: "Month So Far" },
        { key: "custom", label: "Custom" },
    ];

    const filteredReferrals = referralData.filter((ref) =>
        ref.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div style={{ padding: 24, fontFamily: "Arial, sans-serif", color: "#222" }}>
            {/* Tabs */}
            <div style={{ display: "flex", gap: 20, marginBottom: 24 }}>
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        style={{
                            padding: "10px 16px",
                            borderRadius: 20,
                            background: activeTab === tab.key ? "#e0e5da" : "#f5f5f5",
                            border: "none",
                            fontWeight: activeTab === tab.key ? "bold" : "normal",
                            color: "#333",
                            cursor: "pointer",
                            borderBottom: activeTab === tab.key ? "2px solid #4b6043" : "2px solid transparent",
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Stats cards */}
            <div style={{ display: "flex", gap: 20, marginBottom: 24 }}>
                {statsData.map(({ label, value, suffix, iconClass }) => (
                    <div
                        key={label}
                        style={{
                            background: "#f9f9f9",
                            padding: 20,
                            borderRadius: 12,
                            flex: 1,
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            boxShadow: "0 2px 6px rgb(0 0 0 / 0.1)",
                        }}
                    >
                        <div
                            style={{
                                fontSize: 30,
                                background: "#e3e7dc",
                                borderRadius: "50%",
                                width: 48,
                                height: 48,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <i className={iconClass} aria-hidden="true" style={{ fontSize: 24, color: "#555" }}></i>
                        </div>
                        <div>
                            <div style={{ fontSize: 12, color: "#666" }}>{label}</div>
                            <div style={{ fontWeight: "bold", fontSize: 22, marginTop: 4 }}>
                                {value.toLocaleString()}{" "}
                                <span style={{ fontSize: 14, color: "#999" }}>{suffix}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Referral Overview */}
            <div
                style={{
                    background: "#fff",
                    borderRadius: 12,
                    padding: 20,
                    boxShadow: "0 2px 10px rgb(0 0 0 / 0.05)",
                }}
            >
                <div
                    style={{
                        marginBottom: 20,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    {/* Title + Search */}
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        <h3 style={{ margin: 0, fontSize: 18, fontWeight: "bold" }}>Referral Overview</h3>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                backgroundColor: "#f6f6f9",
                                borderRadius: 30,
                                padding: "6px 12px",
                                gap: 8,
                                width: 220,
                            }}
                        >
                            <i className="fa fa-search" style={{ color: "#8c9a9e", fontSize: 14 }}></i>
                            <input
                                type="search"
                                placeholder="Search here"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                style={{
                                    border: "none",
                                    outline: "none",
                                    background: "transparent",
                                    fontSize: 14,
                                    color: "#333",
                                    width: "100%",
                                }}
                            />
                        </div>
                        <button
                            style={{
                                background: "#f6f6f9",
                                border: "none",
                                padding: 8,
                                borderRadius: "50%",
                                cursor: "pointer",
                            }}
                        >
                            <i className="fa-solid fa-arrows-rotate" style={{ color: "#5a6a68" }}></i>
                        </button>
                    </div>

                    {/* Action Icons */}
                    <div style={{ display: "flex", gap: 10 }}>
                        
                        <button
                            style={{
                                background: "#f6f6f9",
                                border: "none",
                                padding: 8,
                                borderRadius: "50%",
                                cursor: "pointer",
                            }}
                        >
                            <i className="fa-solid fa-up-down" style={{ color: "#5a6a68" }}></i>
                        </button>
                        <button
                            style={{
                                background: "#f6f6f9",
                                border: "none",
                                padding: 8,
                                borderRadius: "50%",
                                cursor: "pointer",
                            }}
                        >
                            <i className="fa-solid fa-gear" style={{ color: "#5a6a68" }}></i>
                        </button>
                    </div>
                </div>


                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                    <thead>
                        <tr style={{ borderBottom: "1px solid #eee", color: "#555", textAlign: "left" }}>
                            <th style={{ padding: "10px 8px" }}>S. No.</th>
                            <th style={{ padding: "10px 8px" }}>Product Name</th>
                            <th style={{ padding: "10px 8px" }}>Date</th>
                            <th style={{ padding: "10px 8px" }}>Time</th>
                            <th style={{ padding: "10px 8px" }}>Coupon/Link</th>
                            <th style={{ padding: "10px 8px" }}>Commission</th>
                            <th style={{ padding: "10px 8px" }}>Clicks</th>
                            <th style={{ padding: "10px 8px" }}>Orders</th>
                            <th style={{ padding: "10px 8px" }}>Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredReferrals.map((ref, i) => (
                            <tr key={ref.id} style={{ borderBottom: "1px solid #eee" }}>
                                <td style={{ padding: "10px 8px", verticalAlign: "middle" }}>
                                    <input type="checkbox" /> {i + 1}
                                </td>
                                <td style={{ padding: "10px 8px", display: "flex", alignItems: "center", gap: 8 }}>
                                    <img
                                        src={ref.avatar}
                                        alt={ref.name}
                                        style={{ width: 30, height: 30, borderRadius: "50%" }}
                                    />
                                    <span>{ref.name}</span>
                                    {ref.newTag && (
                                        <span
                                            style={{
                                                marginLeft: 8,
                                                background: "#ffd700",
                                                borderRadius: 4,
                                                fontSize: 10,
                                                padding: "2px 6px",
                                                color: "#555",
                                            }}
                                        >
                                            New
                                        </span>
                                    )}
                                </td>
                                <td style={{ padding: "10px 8px" }}>{ref.date}</td>
                                <td style={{ padding: "10px 8px" }}>{ref.time}</td>
                                <td style={{ padding: "10px 8px" }}>{ref.coupon}</td>
                                <td style={{ padding: "10px 8px" }}>{ref.commission}</td>
                                <td style={{ padding: "10px 8px" }}>{ref.clicks}</td>
                                <td style={{ padding: "10px 8px" }}>{ref.orders}</td>
                                <td style={{ padding: "10px 8px" }}>{ref.revenue}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div style={{ marginTop: 12, color: "#777", fontSize: 12 }}>
                    Rows per page: 8
                    <span style={{ float: "right", cursor: "pointer" }}>
                        {"<"} {" >"}
                    </span>
                    <span style={{ float: "right", marginRight: 8, cursor: "pointer" }}>
                        1-8 of 80
                    </span>
                </div>
            </div>
        </div>
    );

};

export default Dashboard;
