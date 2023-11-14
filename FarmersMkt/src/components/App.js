import React from "react";
import "./App.css";
import MarketScheduleList from "./MarketScheduleList";
import ProduceList from "./ProduceList";

function App() {
  return (
    <React.Fragment>
      {/* <Header /> */}
      <MarketScheduleList />
      <ProduceList />
    </React.Fragment>
  );
}

export default App;
