import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Events",
      handler: props.actionProvider.handleEventsCLick,
      id: 1,
    },
    {
      text: "Trainings",
      handler: props.actionProvider.handleTrainingsCLick,
      id: 2,
    },
    {
      text: "Industrial Visits",
      handler: props.actionProvider.handleVisitsCLick,
      id: 3,
    },
    {
      text: "Charity Work",
      handler: props.actionProvider.handleCharityCLick,
      id: 4,
    },
    {
      text: "Collaborations",
      handler: props.actionProvider.handleCollaborationsCLick,
      id: 5,
    },
    {
      text: "Sponsors",
      handler: props.actionProvider.handleSponsorsCLick,
      id: 6,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
