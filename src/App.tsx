/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';
import { InsightsPage } from './pages/InsightsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { MessageSquare, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from './data/companyData';

// Scroll to top helper on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
    setSelectedService(undefined);
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F7F8F8] text-[#172638] font-sans antialiased selection:bg-[#087C78]/20 selection:text-[#102B49]">
        {/* Sticky Corporate Navigation */}
        <Navbar onOpenConsultation={() => handleOpenConsultation()} />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenConsultation={() => handleOpenConsultation()} />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenConsultation={() => handleOpenConsultation()} />}
            />
            <Route
              path="/services"
              element={
                <ServicesPage
                  onOpenConsultationWithService={(serviceName) =>
                    handleOpenConsultation(serviceName)
                  }
                />
              }
            />
            <Route
              path="/industries"
              element={
                <IndustriesPage
                  onOpenConsultationWithService={(serviceName) =>
                    handleOpenConsultation(serviceName)
                  }
                />
              }
            />
            <Route
              path="/team"
              element={<TeamPage onOpenConsultation={() => handleOpenConsultation()} />}
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/insights"
              element={<InsightsPage onOpenConsultation={() => handleOpenConsultation()} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Consultation Inquiry Modal */}
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={handleCloseConsultation}
          serviceInterest={selectedService}
        />

        {/* Floating Quick Action Button for Direct WhatsApp Communication */}
        <aside
          aria-label="Direct Quick Contact"
          className="fixed bottom-6 right-6 z-30 flex items-center gap-2"
        >
          <a
            href={`https://wa.me/918962861774?text=${encodeURIComponent(
              'Hello Analymate Solutions, I would like to enquire about your consulting services.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2.5 bg-[#087C78] hover:bg-[#087C78]/90 text-white text-xs font-semibold rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Chat directly on WhatsApp with Analymate Solutions"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="hidden sm:inline">Chat with Advisory</span>
          </a>
        </aside>
      </div>
    </HashRouter>
  );
}
