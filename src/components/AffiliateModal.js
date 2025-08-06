
import React from "react";
import "./AffiliateModal.css";

export default function AffiliateModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img
          src="https://img.icons8.com/3d-fluency/94/handshake.png"
          alt="Affiliate Earnings"
        />
        <h2>Introducing Affiliate Earnings</h2>
        <p>
          Start earning by recommending Amrutam products in your patient
          routine. Get commissions for every successful referral through your
          unique link or coupon.
        </p>
        <button onClick={onClose}>Get Started</button>
      </div>
    </div>
  );
}