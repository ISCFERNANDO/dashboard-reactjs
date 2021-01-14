import "./globals.css";
import Header from "./components/header";
import TopCardsList from "./components/top-cards-list";
import OverviewList from "./components/overview-list";
import React from "react";

function App() {
  return (
    <>
      <Header />
      <TopCardsList />
      <OverviewList />
    </>
  );
}

export default App;
