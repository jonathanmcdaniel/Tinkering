var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Clock;
(function (_Clock) {
    var Clock = (function () {
        function Clock(name) {
            this.name = name;
            this.currentTime = new Date().getTime();
        }
        Clock.prototype.getTime = function () {
            return this.currentTime;
        };
        return Clock;
    })();
    _Clock.Clock = Clock;

    var Alarm = (function () {
        function Alarm(name, alarmTime, snoozeCountLimit) {
            this.snoozeCount = 0;
            this.name = name;
            this.alarmTime = alarmTime;
            this.snoozeCountLimit = snoozeCountLimit;
        }
        Alarm.prototype.snooze = function () {
            // stop alarm
        };
        return Alarm;
    })();

    var AlarmClock = (function (_super) {
        __extends(AlarmClock, _super);
        function AlarmClock() {
            _super.apply(this, arguments);
        }
        AlarmClock.prototype.setAlarm1 = function (time, name) {
            this.alarm1 = new Alarm(name, time, 3);
        };
        AlarmClock.prototype.setAlarm2 = function (time, name) {
            this.alarm2 = new Alarm(name, time, 3);
        };
        AlarmClock.prototype.cancelAlarm1 = function (alarmName) {
            this.alarm1 = null;
        };
        AlarmClock.prototype.cancelAlarm2 = function (alarmName) {
            this.alarm2 = null;
        };
        AlarmClock.prototype.snoozeAlarm1 = function () {
            if (this.alarm1.snoozeCount < this.alarm1.snoozeCountLimit) {
                this.alarm1.snoozeCount = this.alarm1.snoozeCount + 1;
                this.alarm1.snooze();
            }
        };
        AlarmClock.prototype.snoozeAlarm2 = function () {
            if (this.alarm2.snoozeCount < this.alarm2.snoozeCountLimit) {
                this.alarm2.snoozeCount = this.alarm2.snoozeCount + 1;
                this.alarm2.snooze();
            }
        };
        return AlarmClock;
    })(Clock);
    _Clock.AlarmClock = AlarmClock;
})(Clock || (Clock = {}));
