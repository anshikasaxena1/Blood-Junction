import React from 'react';
import Header from "./Header";
import Footer from './Footer';
import Main from './MainContent';

const Landing = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-customWhite">
      {/* Header */}
      <header className="w-full">
        <Header />
      </header>
      
      {/* Main Content */}
      <main className="flex-grow px-4 sm:px-8 lg:px-16">
        <Main />
      </main>
      
      {/* Footer */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Landing;
