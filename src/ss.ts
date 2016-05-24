import * as program from 'commander';
import LunarCalendar from './date/LunarCalendar';

program.version('1.0.0')
program.command('date <year/month/day/hour>')
    .description('example: ss date 1980/05/18/23! 结尾加!表示农历')
    .action(function (cmd, options) {
        var res = null;
        //console.log(options)
        if (cmd.indexOf('!') > 0) {
            cmd = cmd.substring(0, cmd.length - 1)
            console.log('农历: ' + cmd);
            var list = cmd.split('/');
            var solar = LunarCalendar.lunarToSolar(list[0],list[1],list[2]);
            console.log(solar)
            res = LunarCalendar.solarToLunar(solar.year,solar.month,solar.day);
        } else {
            console.log('阳历: ' + cmd);
            var list = cmd.split('/');
            res = LunarCalendar.solarToLunar(list[0], list[1], list[2]);
        }

        console.log(res);
    })

program.parse(process.argv);