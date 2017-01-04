'use strict';

function AlexaSkill(appId) {
  this._appId = appId;
}
// TODO jm-rives find out what SSML is
AlexaSkill.speechOutputType = {
  PLAIN_TEXT: 'PlainText',
  SSML: 'SSML'
};

AlexaSkill.prototype.requestHandlers = {
  LaunchReques: function(event, context, response) {
    this.eventHandlers.onLaunch.call(this, event.request, event.session);
  },

  IntentRequest: function(event, context, response){
    this.eventHandlers.onIntent.call(this, event.request, event.session);
  },

  SessionEndedRequest: function(event, context) {
    this.eventHandlers.onSessionEnded(event.request, event.session);
    context.succeed();
  }
};

// Overide event handlers as needed

AlexaSkill.prototype.eventHandlers = {
  // called on session start
  // subclasses can overide to open resources
  onSessionStarted: function(sessionStartedREquest, session){},
  // called when user invokes skill without specifying what they want
  // subclass overides and gives user feedback
  onLaunch: function(launchRequest, session, response) {
    throw 'onLaunch should be overriden by subclass';
  },

  onIntent: function(intentRequest, session, response) {
    // TODO jm-rives find out whats up with this syntax
    var intent = intentRequest.intent, 
      intentName = intentRequest.intent.name,
      intentHandler = this.intentHandlers[intentName];
    if (intentHandler) {
      console.log('dispatch intent =' + intentName);
      intentHandler.call(this, intent, seesion, response);
    } else {
      throw 'Unsupported intent = ' + intentName;
    }

  },

};

AlexaSkill.prototype.intentHandlers = {};

AlexaSkill.prototype.execute = function(event, context) {
  
}







