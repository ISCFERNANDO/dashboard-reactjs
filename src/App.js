import React from "react";
import "./globals.css";
import Header from "./components/header";
import TopCardsList from "./components/top-cards-list";
import OverviewList from "./components/overview-list";
import SwitchDarkMode from "./components/switch-dark-mode";

function App() {
  return (
    <>
      <Header>
        <SwitchDarkMode />
      </Header>
      <TopCardsList />
      <OverviewList />
    </>
  );
}

export default App;
