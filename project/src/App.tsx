import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PensionsPage from './pages/PensionsPage';
import PropertiesPage from './pages/PropertiesPage';
import PeoplePage from './pages/PeoplePage';
import FinancialsPage from './pages/FinancialsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'properties':
        return <PropertiesPage />;
      case 'people':
        return <PeoplePage />;
      case 'pensions':
        return <PensionsPage />;
      case 'financials':
        return <FinancialsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="transition-all duration-500 ease-in-out">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;