import "../styles/styles.css";
import React from "react";

export const Filter = (props) => {
  const { tickets, setFiltered, filter, setFilter } = props;
  const isAllFiltersChecked =
    filter.no && filter.one && filter.two && filter.three;

  React.useEffect(() => {
    const myTickets = [...tickets];
    if (!tickets) return;
    const filteredTickets = myTickets.filter((option) => {
      const firstSegmentLength = option?.segments[0]?.stops?.length;
      const secondSegmentLength = option?.segments[1]?.stops?.length;

      if (
        filter.no &&
        (firstSegmentLength === 0 || secondSegmentLength === 0)
      ) {
        return true;
      }
      if (
        filter.one &&
        (firstSegmentLength === 1 || secondSegmentLength === 1)
      ) {
        return true;
      }
      if (
        filter.two &&
        (firstSegmentLength === 2 || secondSegmentLength === 2)
      ) {
        return true;
      }
      if (
        filter.three &&
        (firstSegmentLength === 3 || secondSegmentLength === 3)
      ) {
        return true;
      }
      return false;
    });

    setFiltered(filteredTickets);
  }, [filter]);

  const handleAllFilter = () => {
    if (!filter.all) {
      setFilter({
        all: true,
        no: true,
        one: true,
        two: true,
        three: true
      });
    } else if (filter.all) {
      setFilter({
        all: false,
        no: false,
        one: false,
        two: false,
        three: false
      });
    }
  };

  return (
    <div className="filterbox">
      <div className="filter">
        <div className="filterName">количество пересадок</div>
        <div className="parambox">
          <FilterCheckbox
            label="Все"
            checked={isAllFiltersChecked}
            onChange={handleAllFilter}
          />
          <FilterCheckbox
            label="Без пересадок"
            checked={filter.no}
            onChange={() => setFilter({ ...filter, no: !filter.no })}
          />
          <FilterCheckbox
            label="1 пересадок"
            checked={filter.one}
            onChange={() => setFilter({ ...filter, one: !filter.one })}
          />
          <FilterCheckbox
            label="2 пересадки"
            checked={filter.two}
            onChange={() => setFilter({ ...filter, two: !filter.two })}
          />
          <FilterCheckbox
            label="3 пересадки"
            checked={filter.three}
            onChange={() => setFilter({ ...filter, three: !filter.three })}
          />
        </div>
      </div>
    </div>
  );
};

const FilterCheckbox = ({ filter, onChange, label, checked }) => {
  return (
    <label className="container">
      <div className="input-label">{label}</div>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="checkmark"></span>
    </label>
  );
};