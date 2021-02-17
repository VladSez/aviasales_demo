import "../styles/styles.css";
import React from "react";
import {
  CHEAPEST,
  FASTEST,
  SORTS,
  sortByDuration,
  sortFromMinToMaxPrice
} from "../utils";

export const Tabs = (props) => {
  const { setFiltered } = props;
  const [sortButton, setSortButton] = React.useState("cheapest");
  const [sortBy, setSortBy] = React.useState(SORTS[CHEAPEST]);

  React.useEffect(() => {
    if (sortBy === CHEAPEST) {
      setFiltered((tickets) => [...tickets].sort(sortFromMinToMaxPrice));
    } else if (sortBy === FASTEST) {
      setFiltered((tickets) => [...tickets].sort(sortByDuration));
    }
  }, [sortBy]);

  const handleCheapest = () => {
    setSortBy(CHEAPEST);
    setSortButton("cheapest");
  };
  const handleFastest = () => {
    setSortBy(FASTEST);
    setSortButton("fastest");
  };
  return (
    <div className="tabs">
      {" "}
      <button
        className={`tabsbutLeft ${
          sortButton === "cheapest" ? "isActiveTabsbutLeft" : null
        }`}
        onClick={handleCheapest}
      >
        Самый дешевый{" "}
      </button>
      <button
        className={`tabsbutRight ${
          sortButton === "fastest" ? "isActiveTabsbutRight" : null
        }`}
        onClick={handleFastest}
      >
        Самый быстрый{" "}
      </button>
    </div>
  );
};