import React, { useState } from 'react';

const BuyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br /><br />

          <label htmlFor="address">Address:</label><br />
          <textarea id="address" name="address" value={formData.address} onChange={handleChange} required></textarea><br /><br />

          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br /><br />

          <label htmlFor="phone">Phone:</label><br />
          <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" value={formData.phone} onChange={handleChange} required /><br /><br />

          <input className='pay-button' type="submit" value="Pay" />
        </form>
    </div>
  );
};

export default BuyForm;
