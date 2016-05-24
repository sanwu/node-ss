/// <reference path="../typings/tsd.d.ts" />

import LunarCalendar from './date/LunarCalendar'

var solarDate = new Date(2014, 1, 1); //公历2014年2月1日

var lunar = LunarCalendar.solarToLunar(solarDate.getFullYear(),solarDate.getMonth()+1,solarDate.getDate());
console.log(lunar)