class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello.");
    this.addMessageToState(message);
  };

  handleEventsCLick = () => {
    const message = this.createChatBotMessage(
      "Awesome. click here to check some more information",
      { widget: "events" }
    );
    this.addMessageToState(message);
  };

  handleTrainingsCLick = () => {
    const message = this.createChatBotMessage(
      "Awesome. click here to check some more information",
      { widget: "trainings" }
    );
    this.addMessageToState(message);
  };

  handleVisitsCLick = () => {
    const message = this.createChatBotMessage(
      "Awesome. click here to check some more information",
      { widget: "visits" }
    );
    this.addMessageToState(message);
  };

  handleCharityCLick = () => {
    const message = this.createChatBotMessage(
      "Awesome. click here to check some more information",
      { widget: "charity" }
    );
    this.addMessageToState(message);
  };

  handleCollaborationsCLick = () => {
    const message = this.createChatBotMessage(
      "Awesome. click here to check some more information",
      { widget: "collaborations" }
    );
    this.addMessageToState(message);
  };

  handleSponsorsCLick = () => {
    const message = this.createChatBotMessage(
      "Awesome. click here to check some more information",
      { widget: "sponsors" }
    );
    this.addMessageToState(message);
  };

  handleDefault = () => {
    const message = this.createChatBotMessage("Sorry I can't understand you", {
      widget: "default",
    });
    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
