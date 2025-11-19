import React from 'react';
import Header from './components/header.jsx';
import SellForm from './components/SellForm.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Sell Your Scrap</h1>
        <SellForm />
      </div>
    </div>
  );
}

export default App;