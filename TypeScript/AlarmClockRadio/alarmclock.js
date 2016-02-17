/// <reference path="Clock.ts" />
var Radio = (function () {
    function Radio() {
    }
    Radio.prototype.setStation = function (frequency) {
        this.frequency = frequency;
    };
    return Radio;
})();

var AlarmClockRadio = (function () {
    function AlarmClockRadio() {
        this.radio = new Radio();
        this.clock = new Clock.AlarmClock("clock");
    }
    return AlarmClockRadio;
})();
