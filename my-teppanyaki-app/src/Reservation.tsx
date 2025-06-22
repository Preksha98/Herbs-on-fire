import React from "react";
import { Navigation } from "./components/TeppanyakiNavigation";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/TeppanyakiFooter";
import { ReservationSection } from "./components/ReservationSection";


const Reservation: React.FC = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <ReservationSection />
            <Footer />
    </>
  );
};

export default Reservation;

