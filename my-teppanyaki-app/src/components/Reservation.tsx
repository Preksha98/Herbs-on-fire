import React from "react";
import { TeppanyakiNavigation } from "./TeppanyakiNavigation";
import { HeroSection } from "./HeroSection";
import { TeppanyakiFooter } from "./TeppanyakiFooter";
import { ReservationSection } from "./ReservationSection";

const Reservation: React.FC = () => {
  return (
    <>
      <TeppanyakiNavigation />
      <div className="p-8">
        <h1 className="text-3xl font-bold">Make a Reservation</h1>
        <ReservationSection />
              <TeppanyakiFooter />
      </div>
    </>
  );
};

export default Reservation;
