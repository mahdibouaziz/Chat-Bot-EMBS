import React from "react";
import "./EventsBot.css";

const EventsBot = ({ wheretogo }) => {
  return (
    <>
      <div>
        <a
          className="linkContainer"
          href={wheretogo[0].link}
          rel="noreferrer"
          target="_blank"
        >
          {wheretogo[0].name}
        </a>
      </div>
    </>
  );
};
export default EventsBot;
