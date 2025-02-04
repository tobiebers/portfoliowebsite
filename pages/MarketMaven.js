import React from "react";
import MarketMavenDetail from "@/components/marketmaven/Detail";
import Navigation from "@/components/Navigation";
import Funktion1 from "@/components/marketmaven/Funktion1";
import DashboardDescription from "@/components/marketmaven/DashboardHomepage";
import TradingTerminalDescription from "@/components/marketmaven/TradingTerminalDescription";
import BacktesterDescription from "@/components/marketmaven/BacktesterDescription";
import PortfolioSection from "@/components/marketmaven/PortfolioSection";
import WinrateCalculatorDescription from "@/components/marketmaven/WinrateCalculatorDescription";

export default function MarketMavenPage() {
  return (
    <>
      <MarketMavenDetail />
        <Funktion1/>
        <DashboardDescription/>
      <TradingTerminalDescription/>
        <BacktesterDescription/>
        <PortfolioSection/>
        <WinrateCalculatorDescription/>
    </>
  );
}
