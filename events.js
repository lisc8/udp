var {EventEmitter} = require('events');


var app = new EventEmitter();

app.on('ev',function(){
    console.log('监听端口1022')
});

app.bind(1022);