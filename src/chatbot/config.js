import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/Options/Options";
import EventsBot from "../components/Choices/EventsBot";

const config = {
  botName: "BioBot",
  initialMessages: [
    createChatBotMessage(
      `Hi I'm BioBot. I’m here to help you discover our website.`
    ),
    createChatBotMessage(
      `Here is a quick overview over our website. Ask me about the different options to dive deeper.`,
      { widget: "options" }
    ),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "events",
      widgetFunc: (props) => <EventsBot {...props} />,
      props: {
        wheretogo: [
          {
            name: "Events",
            link: "http://embs-insat.ieee.tn/activities/",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "trainings",
      widgetFunc: (props) => <EventsBot {...props} />,
      props: {
        wheretogo: [
          {
            name: "Trainings We Provide",
            link: "http://embs-insat.ieee.tn/activities/",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "visits",
      widgetFunc: (props) => <EventsBot {...props} />,
      props: {
        wheretogo: [
          {
            name: "Industrial Visits",
            link: "http://embs-insat.ieee.tn/activities/",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "charity",
      widgetFunc: (props) => <EventsBot {...props} />,
      props: {
        wheretogo: [
          {
            name: "Charity Work",
            link: "http://embs-insat.ieee.tn/newsletter/",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "collaborations",
      widgetFunc: (props) => <EventsBot {...props} />,
      props: {
        wheretogo: [
          {
            name: "Collaborations",
            link: "http://embs-insat.ieee.tn/newsletter/",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "sponsors",
      widgetFunc: (props) => <EventsBot {...props} />,
      props: {
        wheretogo: [
          {
            name: "Sponsors",
            link: "http://embs-insat.ieee.tn/",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;
