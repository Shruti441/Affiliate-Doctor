import React, { useState } from 'react';

const products = [
  {
    name: 'Amrutam Nari Sondarya Malt',
    image: '/1.png',
    link: 'https://www.amrutam.global//nari-sondarya-malt?',
    coupon: 'AMU7382478',
  },
  {
    name: 'Amrutam Kumkumadi Oil',
    image: '/1.png',
    link: 'https://www.amrutam.global/kumkumadi-oil?',
    coupon: 'AMU8474629',
  },
];

const ReferralTool = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [couponCode] = useState('DRLIAM2374');

  const handleProductChange = (e) => {
    setSelectedProduct(products.find((p) => p.name === e.target.value));
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div style={styles.wrapper}>
      

      {/* Product Dropdown */}
      <div style={styles.card}>
        <label style={styles.label}>Enter the name of Product <span style={{ color: 'red' }}>*</span></label>
        <select style={styles.select} onChange={handleProductChange} defaultValue="">
          <option value="" disabled>Select or enter product</option>
          {products.map((prod) => (
            <option key={prod.name} value={prod.name}>{prod.name}</option>
          ))}
        </select>
      </div>

      {/* Product Info Card */}
      {selectedProduct && (
        <div style={styles.card}>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <img src={selectedProduct.image} alt="Product" style={styles.image} />
            <div style={{ flex: 1 }}>
              {/* Product Link */}
              <div style={styles.infoGroup}>
                <label style={styles.infoLabel}>Product Link</label>
                <div style={styles.inputGroup}>
                  <input type="text" value={selectedProduct.link} readOnly style={styles.input} />
                  <button style={styles.button} onClick={() => handleCopy(selectedProduct.link)}>Copy</button>
                </div>
              </div>

              {/* Coupon Code */}
              <div style={styles.infoGroup}>
                <label style={styles.infoLabel}>Product Coupon Code</label>
                <div style={styles.inputGroup}>
                  <input type="text" value={selectedProduct.coupon} readOnly style={styles.input} />
                  <button style={styles.button} onClick={() => handleCopy(selectedProduct.coupon)}>Copy</button>
                </div>
              </div>
            </div>
          </div>

          <p style={styles.note}>
            <strong>Note:</strong> Share this Link/Coupon with your patient. For every purchase someone makes using your Link/Coupon, you get credit.
          </p>
        </div>
      )}

      {/* Stats Section */}
      {selectedProduct && (
        <div style={styles.statsRow}>
          {[
            { label: 'Total Referral', value: 255, icon: 'fa-calendar' },
            { label: 'Total Orders', value: 55, icon: 'fa-cart-shopping' },
            { label: 'Total Revenue', value: 5540, icon: 'fa-dollar-sign' },
          ].map((stat) => (
            <div key={stat.label} style={styles.statCard}>
              <div style={styles.iconCircle}>
                <i className={`fa-solid ${stat.icon}`} style={{ color: '#395B37' }}></i>
              </div>
              <div style={{ marginTop: 8, fontWeight: 'bold', fontSize: 16 }}>{stat.label}</div>
              <div style={{ fontSize: 20, marginTop: 4 }}>{stat.value.toLocaleString()}</div>
            </div>
          ))}
        </div>
      )}

      {/* Cart Discount */}
      <div style={styles.card}>
        <label style={styles.label}>Cart Discount</label>
        <div style={styles.inputGroup}>
          <input type="text" value={couponCode} readOnly style={styles.input} />
          <button style={styles.button} onClick={() => handleCopy(couponCode)}>Copy</button>
        </div>
        <p style={styles.note}>
          <strong>Note:</strong> Share this Link/Coupon with your patient. For every purchase someone makes using your Link/Coupon, you get credit.
        </p>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  wrapper: {
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    fontFamily: 'sans-serif',
  },
  breadcrumb: {
    fontSize: 14,
    marginBottom: '1.5rem',
    color: '#555',
  },
  card: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.05)',
    marginBottom: '2rem',
  },
  label: {
    fontWeight: 'bold',
    display: 'block',
    marginBottom: '0.75rem',
    fontSize: 15,
  },
  select: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: 8,
    fontSize: 14,
    border: '1px solid #ccc',
  },
  image: {
    width: 120,
    borderRadius: 8,
  },
  inputGroup: {
    display: 'flex',
    gap: '1rem',
    marginTop: '0.5rem',
  },
  input: {
    flex: 1,
    padding: '0.75rem',
    borderRadius: 8,
    border: '1px solid #ccc',
    backgroundColor: '#f5f5f5',
  },
  button: {
    backgroundColor: '#395B37',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  infoGroup: {
    marginBottom: '1rem',
  },
  infoLabel: {
    fontWeight: 600,
    fontSize: 14,
    color: '#333',
  },
  note: {
    fontSize: 13,
    color: '#555',
    marginTop: '1rem',
  },
  statsRow: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
  },
  statCard: {
    flex: 1,
    background: '#fff',
    padding: '1rem',
    borderRadius: '12px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
    textAlign: 'center',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: '#e3e7dc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
  },
};

export default ReferralTool;
