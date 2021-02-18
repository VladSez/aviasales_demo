import "../styles/styles.css";
import React, { useState } from "react";

export const Tickets = ({ filtered }) => {
  const [count, setCount] = useState({
    prev: 0,
    next: 5
  });

  return (
    <div>
      {filtered.length !== 0 ? (
        <div>
          {filtered.slice(count.prev, count.next).map((el, index) => {
            return (
              <div className="ticketBox">
                <div className="ticket">
                  <TicketHeader el={el} index={index}/>
                  <div className="ticketInfo">
                    {el.segments.map((segment) => {
                      return <Segment segment={segment} />;
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <NoFilter />
      )}
    </div>
  );
};

const NoFilter = () => <div className="NoTickets">Выберите фильтры</div>;

const Segment = ({ segment }) => {
  return (
    <div className="content">
      <div className="route">
        <div className="routeBox">
          <div className="content-title">
            <div>{`${segment.origin} - ${segment.destination}`}</div>
          </div>
          <div className="info">
          {new Date(segment.date).getHours() +
          ":" +
          new Date(segment.date).getMinutes() + 
          " - " +             
          new Date(new Date(segment.date).setHours(new Date(segment.date).getHours() + Math.floor(segment.duration / 60) ) ).getHours() +
          ":" +
          new Date(new Date(segment.date).setMinutes(new Date(segment.date).getMinutes() + segment.duration)).getMinutes()
          }
          </div>
        </div>
      </div>
      <div className="time">
        <div className="timeBox">
          <div className="content-title">
            <div>в пути</div>
          </div>
          <div className="info">
            {`${(segment.duration / 60) | 0}ч ${segment.duration % 60}мин`}
          </div>
        </div>
      </div>
      <div className="stops">
        <div className="stopsBox">
          {segment.stops.length === 0 ? (
            <div>
              <div className="content-title">
                <div>нет пересадок</div>
              </div>
              <div className="info">-</div>
            </div>
          ) : segment.stops.length === 1 ? (
            <div className="content-title">
              {" "}
              <div>{`${segment.stops.length} пересадка`}</div>
            </div>
          ) : (
            <div className="content-title">
              {" "}
              <div>{`${segment.stops.length} пересадки`}</div>
            </div>
          )}
          <div className="info">{segment.stops.join(", ")}</div>
        </div>
      </div>
    </div>
  );
};

const TicketHeader = ({ el, index }) => {
  return(
<div className="ticketHeader">
                    <div className="price" key={index}>
                      {`${el.price.toLocaleString()} P`}
                    </div>
                    <div className="companyLogoBox">
                      <img
                        src={`https://pics.avs.io/99/36/${el.carrier}.png`}
                        alt="companyLogo"
                        className="companyLogo"
                      />
                    </div>
                  </div>
  );
};
