module Clock {
	interface ClockInterface {
		currentTime: any;
		name: string;
	}

	export class Clock implements ClockInterface {
		currentTime: any;
		name: string;
		getTime() {
			return this.currentTime;
		}
		constructor(name: string) {
			this.name = name;
			this.currentTime = new Date().getTime();
		}
	}

	class Alarm {
		alarmTime: string;
		snoozeCount: number = 0;
		snoozeCountLimit: number;
		name: string;
		constructor(name: string, alarmTime: string, snoozeCountLimit: number) {
			this.name = name;
			this.alarmTime = alarmTime;
			this.snoozeCountLimit = snoozeCountLimit;
		}
		snooze() {
			// stop alarm
		}
	}

	export class AlarmClock extends Clock {
		alarm1: Alarm;
		alarm2: Alarm;
		setAlarm1(time: string, name: string) {
			this.alarm1 = new Alarm(name, time, 3);
		}
		setAlarm2(time: string, name: string) {
			this.alarm2 = new Alarm(name, time, 3);
		}
		cancelAlarm1(alarmName: string) {
			this.alarm1 = null;
		}
		cancelAlarm2(alarmName: string) {
			this.alarm2 = null;
		}
		snoozeAlarm1() {
			if (this.alarm1.snoozeCount < this.alarm1.snoozeCountLimit) {
				this.alarm1.snoozeCount = this.alarm1.snoozeCount + 1;
				this.alarm1.snooze();
			}
		}
		snoozeAlarm2() {
			if (this.alarm2.snoozeCount < this.alarm2.snoozeCountLimit) {
				this.alarm2.snoozeCount = this.alarm2.snoozeCount + 1;
				this.alarm2.snooze();
			}
		}
	}
}
