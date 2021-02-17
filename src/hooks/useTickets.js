import { useEffect, useState } from "react";
import { sortFromMinToMaxPrice } from "../utils";

export const useTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const { searchId } = await fetch(
        "https://front-test.beta.aviasales.ru/search"
      ).then((res) => res.json());

      const { tickets } = await fetch(
        `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
      ).then((res) => res.json());

      setTickets(tickets.sort(sortFromMinToMaxPrice));
      setFiltered(tickets);
    };

    fetchTickets();
  }, []);

  return { tickets, filtered, setFiltered };
};