class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello")) {
      this.actionProvider.greet();
    } else if (lowercase.includes("events")) {
      this.actionProvider.handleEventsCLick();
    } else if (lowercase.includes("trainings")) {
      this.actionProvider.handleTrainingsCLick();
    } else if (
      lowercase.includes("industrial") ||
      lowercase.includes("visits")
    ) {
      this.actionProvider.handleVisitsCLick();
    } else if (lowercase.includes("charity") || lowercase.includes("work")) {
      this.actionProvider.handleCharityCLick();
    } else if (lowercase.includes("collaborations")) {
      this.actionProvider.handleCollaborationsCLick();
    } else if (lowercase.includes("Sponsors")) {
      this.actionProvider.handleSponsorsCLick();
    } else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;
