import React from "react";
import { TeppanyakiNavigation } from "./components/TeppanyakiNavigation";
import { HeroSection } from "./components/HeroSection";
import { TeppanyakiFooter } from "./components/TeppanyakiFooter";
import { ReservationSection } from "./components/ReservationSection";


const Reservation: React.FC = () => {
  return (
    <>
      <TeppanyakiNavigation />
      <HeroSection />
      <ReservationSection />
            <TeppanyakiFooter />
    </>
  );
};

export default Reservation;

