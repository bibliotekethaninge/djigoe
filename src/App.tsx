import React, { useState } from 'react';
import { Search, Menu, User, ArrowRight } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import KlarnaPage from './pages/KlarnaPage';

function App() {
  return (
   <Router>
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0">
                <img 
                  src="https://www.insart.com/wp-content/uploads/ICA-Banken.png" 
                  alt="ICA Banken"
                  className="h-8"
                />
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-gray-900">
                <Search className="h-6 w-6" />
              </button>
              <button className="text-gray-700 hover:text-gray-900">
                <Menu className="h-6 w-6" />
              </button>
              <Link to="/logga-in" className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Logga in</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/logga-in" element={<LoginPage />} />
        <Route path="/support" element={<KlarnaPage />} />
        <Route path="/" element={
          <>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-900">Bolån för stammisar</h1>
              <p className="text-xl text-gray-600">
                Stammisar på ICA får en rabatt på boräntan som baseras på hur mycket du handlar på ICA. 
                Kort sagt, när du handlar på ICA får du billigare bolån.
              </p>
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2">
                <span>Se våra bolåneräntor</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://assets.icanet.se/f_auto,q_auto,dpr_auto/w_720,h_488/cumulus/Banken/9A7B0FFF73E1B/start-hero-bolan-nycklar"
                alt="Nycklar som hänger i snören"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: 'PrivateLoan', text: 'Privatlån' },
              { icon: 'Home', text: 'Bolån' },
              { icon: 'SaveMoney', text: 'Sparande' },
              { icon: 'CreditCard', text: 'Kort' },
              { icon: 'Insurance', text: 'Försäkringar' },
              { icon: 'BecomeClientCustomer', text: 'Våra fördelar' },
            ].map((item, index) => (
              <a 
                key={index}
                href="#"
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-3">
                  <span className="text-white text-2xl">{item.icon[0]}</span>
                </div>
                <span className="text-gray-900 font-medium text-center">{item.text}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Extra stammisbonus på ICA</h2>
            <p className="text-lg mb-6">
              Stammisar på ICA som köper ICA Försäkrings <strong>kattförsäkring</strong> får en extra bonus på <strong>250 kronor</strong> att handla för på ICA eller Apotek Hjärtat. 
              Köper du en <strong>hundförsäkring</strong>, får du <strong>400 kronor</strong> i extra bonus.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-red-600 hover:text-red-700 flex items-center">
                Köp kattförsäkring
                <ArrowRight className="h-4 w-4 ml-1" />
              </a>
              <a href="#" className="text-red-600 hover:text-red-700 flex items-center">
                Köp hundförsäkring
                <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Senaste nytt</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ränteändring bolån",
                image: "https://assets.icanet.se/f_auto,q_auto,dpr_auto/w_720,h_296,c_lfill/cumulus/Banken/99295FFFF0A47/hero-artikel-stad-ovanfran",
                date: "13 mars 2025",
                excerpt: "Den 13 mars ändrar ICA Banken bolåneräntorna för bolån med 1 och 10 års bindningstid till följd av ändrade finansieringskostnader."
              },
              {
                title: "Nu införs en fördröjning på stora överföringar",
                image: "https://assets.icanet.se/f_auto,q_auto,dpr_auto/w_720,h_296,c_lfill/cumulus/Banken/8F975FFF0F63D/hero-artikel-skrivbord-med-dator",
                date: "10 mars 2025",
                excerpt: "Att bli lurad på sina besparingar är en tragedi för den som drabbas. Nu tar vi nästa steg för att skydda våra kunder."
              },
              {
                title: "När kommer skatteåterbäringen",
                image: "https://assets.icanet.se/f_auto,q_auto,dpr_auto/w_720,h_296,c_lfill/cumulus/Banken/A0D47C8D9C/hero-artikel-glatt-par",
                date: "7 mars 2025",
                excerpt: "Beroende på när och hur du deklarerar och ska få tillbaka på skatten, så kommer du få skattepengarna olika datum."
              }
            ].map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{article.date}</p>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <a href="#" className="text-red-600 hover:text-red-700 flex items-center">
                    Läs mer
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
          </>
        } />
      </Routes>
    </div>
   </Router>
  );
}

export default App;