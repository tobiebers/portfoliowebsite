import React from "react";
import Navigation from "./Navigation";
import Footer from "@/components/Footer"; // Navigation importieren

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <main className>{children}</main>
        <Footer/>

    </div>
  );
}
