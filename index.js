'use strict';

var APP_ID = undefined;
var SPEECH_OUTPUT = "Butz";
var AlexaSkill = require('./AlexaSkill');
var HelloAlexa = function() {
  AlexaSkill.call(this, APP_ID);
};

HelloAlexa.prototype = Object.create(AlexaSkill.prototype);

var helloResponseFunction = function(intent, session, response) {
  response.tell(SPEECH_OUTPUT);
};

HelloAlexa.prototype.eventHandlers.onLaunch = helloResponseFunction;

HelloAlexa.prototype.intentHandlers = {
  var HelloAlexa = new HelloAlexa();
  HelloAlexa.execute(event, context);
};

