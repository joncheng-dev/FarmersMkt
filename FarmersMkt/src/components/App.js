import React from "react";
import "./App.css";
import MarketScheduleList from "./MarketScheduleList";
import ProduceList from "./ProduceList";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <ProduceList />
        </div>
        <div className="col">
          <MarketScheduleList />
        </div>
      </div>
    </div>
  );
}

export default App;
