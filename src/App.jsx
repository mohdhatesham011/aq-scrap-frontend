import React from 'react';
import SellForm from './components/SellForm';
import Header from './components/Header';

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