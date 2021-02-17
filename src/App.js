import './styles/styles.css';
import React, { useState } from "react";
import { Header } from "./components/Header.js";
import { Filter } from "./components/Filter.js";
import { Tabs } from "./components/Tabs.js";
import { Tickets } from "./components/Tickets.js";
import { useTickets } from "./hooks/useTickets";


function App() {
  const { tickets, filtered, setFiltered } = useTickets();

  const [filter, setFilter] = useState({
    all: true,
    no: true,
    one: true,
    two: true,
    three: true
  });

  return (
    <div className="main">
      <Header />
      <div className="appbox">
        <div className="mainApp">
          <Filter
            setFiltered={setFiltered}
            setFilter={setFilter}
            filter={filter}
            tickets={tickets}
          />
          <div className="ticketbox">
            <div className="ticketsList">
              <Tabs setFiltered={setFiltered} />
              <Tickets filtered={filtered} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
