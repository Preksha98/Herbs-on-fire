import React from "react";
import { Navigation } from "./TeppanyakiNavigation";
import { HeroSection } from "./HeroSection";
import { Footer } from "./TeppanyakiFooter";
import { ReservationSection } from "./ReservationSection";

const Reservation: React.FC = () => {
  return (
    <>
      <Navigation />
      <div className="p-8">
        <h1 className="text-3xl font-bold">Make a Reservation</h1>
        <ReservationSection />
              <Footer />
      </div>
    </>
  );
};

export default Reservation;
