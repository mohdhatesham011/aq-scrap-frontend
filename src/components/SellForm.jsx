import React, { useState } from 'react';

const API_BASE = "https://aq-scrap-api.azurewebsites.net";

export default function SellForm() {
  const [form, setForm] = useState({ name: '', phone: '', category: '', weight: '', address: '', image: null });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in form) data.append(key, form[key]);

    const res = await fetch(`${API_BASE}/api/scrap`, { method: 'POST', body: data });
    alert(res.ok ? 'Submitted successfully!' : 'Submission failed.');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg">
      <input name="name" placeholder="Your Name" onChange={handleChange} required className="w-full mb-3 p-2 border rounded" />
      <input name="phone" placeholder="Phone" onChange={handleChange} required className="w-full mb-3 p-2 border rounded" />
      <select name="category" onChange={handleChange} required className="w-full mb-3 p-2 border rounded">
        <option value="">Select Scrap Type</option>
        <option value="Iron">Iron</option>
        <option value="Copper">Copper</option>
        <option value="Plastic">Plastic</option>
        <option value="E-waste">E-waste</option>
      </select>
      <input name="weight" placeholder="Approx Weight (kg)" onChange={handleChange} className="w-full mb-3 p-2 border rounded" />
      <textarea name="address" placeholder="Pickup Address" onChange={handleChange} required className="w-full mb-3 p-2 border rounded"></textarea>
      <input type="file" name="image" accept="image/*" onChange={handleChange} className="w-full mb-3" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Submit</button>
    </form>
  );
}