'use strict';
var Table = require('cli-table');

module.exports = function routeListing (stack, root) {
    var table = new Table({ head: ['Verb', 'Path'] });

    var routes = stack;

    for (var key in routes) {

        if (routes.hasOwnProperty(key)) {
            var val = routes[key];
            //console.log(val);
            if(val.route) {
                val = val.route;
                var _o = {};
                _o[val.stack[0].method]  = [root + val.path];    
                table.push(_o);
            }
            if(val.name && val.name === 'router') {
                //console.log(val);
                var prefix = val.regexp.toString()
                    .replace('/^\\', '')
                    .replace('\\', '')
                    .replace('\\/', '')
                    .replace('?(?=\\/|$)/i', '')
                    .replace('?(?=|$)/i/','')
                    .replace('/?(?=/|$)/i', '')
                    .replace('?(?=|$)/i/', '');
                routeListing(val.handle.stack, prefix);
            }       
        }
    }

    console.log(table.toString());
}