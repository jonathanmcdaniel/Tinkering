/// <reference path="Clock.ts" />

class Radio {
	frequency: number;
	setStation (frequency:number){
		this.frequency = frequency;
	}
}

class AlarmClockRadio {
	radio: Radio;
	clock: Clock.AlarmClock;

	constructor(){
		this.radio = new Radio();
		this.clock = new Clock.AlarmClock("clock");
	}
}