import React, { useState } from 'react';

const ReferralTool = () => {
  const [product, setProduct] = useState('');
  const [couponCode] = useState('DRLIAM2374');

  const handleProductChange = (e) => {
    setProduct(e.target.value);
  };

  const handleGetClick = () => {
    // You can add logic to fetch referral link based on product if needed
    alert(`Referral link for ${product} fetched!`);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode);
    alert('Coupon code copied!');
  };

  return (
    <div style={styles.container}>
      <h2>Referral Tool</h2>

      <div style={styles.section}>
        <label style={styles.label}>Enter the name of Product <span style={{ color: 'red' }}>*</span></label>
        <div style={styles.inputGroup}>
          <select
            style={styles.select}
            value={product}
            onChange={handleProductChange}
          >
            <option value="">-- Select Product --</option>
            <option value="Herbal Tonic">Herbal Tonic</option>
            <option value="Pain Relief Balm">Pain Relief Balm</option>
          </select>
          <button style={styles.getBtn} onClick={handleGetClick}>Get</button>
        </div>
      </div>

      <div style={styles.section}>
        <label style={styles.label}>Cart Discount</label>
        <div style={styles.inputGroup}>
          <input type="text" value={couponCode} readOnly style={styles.input} />
          <button style={styles.copyBtn} onClick={handleCopy}>Copy</button>
        </div>
        <small style={styles.note}>
          Note: Share this Link/Coupon with your patient. For every purchase someone makes using your Link/Coupon, you get credit.
        </small>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.05)',
    maxWidth: '600px',
    margin: '0 auto'
  },
  section: {
    marginBottom: '2rem',
  },
  label: {
    fontWeight: 'bold',
    display: 'block',
    marginBottom: '0.5rem'
  },
  inputGroup: {
    display: 'flex',
    gap: '1rem'
  },
  select: {
    flex: 1,
    padding: '0.5rem',
    fontSize: '16px',
  },
  getBtn: {
    padding: '0.5rem 1rem',
    backgroundColor: '#395B37',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  input: {
    flex: 1,
    padding: '0.5rem',
    fontSize: '16px',
  },
  copyBtn: {
    padding: '0.5rem 1rem',
    backgroundColor: '#395B37',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  note: {
    fontSize: '12px',
    color: '#666',
    marginTop: '0.5rem',
    display: 'block'
  }
};

export default ReferralTool;
