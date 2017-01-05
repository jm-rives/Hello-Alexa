// index.js
// TODO jm-rives where do you paste this Lambda AWS vs Amazon ASK
'use strict';

// invoke with hello e.g "Alexa, ask hello to say something"

//  APP_ID came from https://developer.amazon.com/edw/home.html#/skill/amzn1.ask.skill.39466ef7-93a5-4b3e-9ab4-f9b55bbfb7bb/en_US/info
var APP_ID = 'amzn1.ask.skill.39466ef7-93a5-4b3e-9ab4-f9b55bbfb7bb';

var AlexaSkill = require('./AlexaSkill');

var SPEECH_OUTPUT = "Butz!...Butz! Butz! Butz!";

var HelloAlexa = function() {
  AlexaSkill.call(this, APP_ID);
};

HelloAlexa.prototype = Object.create(AlexaSkill.prototype);

var helloResponseFunction = function(intent, session, response) {
  response.tell(SPEECH_OUTPUT);
};

HelloAlexa.prototype.eventHandlers.onLaunch = helloResponseFunction;

HelloAlexa.prototype.intentHandlers = {
  'HelloAlexaIntent' : helloResponseFunction
};

exports.handler = function(event, context) {
  var helloAlexa = new HelloAlexa();
  helloAlexa.execute(event, context);
};








