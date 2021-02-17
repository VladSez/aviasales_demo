export const CHEAPEST = "CHEAPEST";
export const FASTEST = "FASTEST";

export const SORTS = {
  FASTEST: FASTEST,
  CHEAPEST: CHEAPEST
};

export const sortFromMinToMaxPrice = (a, b) => a.price - b.price;
export const sortByDuration = (a, b) =>
  a.segments[0].duration -
  b.segments[0].duration +
  a.segments[1].duration -
  b.segments[1].duration;