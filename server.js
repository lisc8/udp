const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('close',()=>{
    console.log('socket已关闭');
});

server.on('error',(err)=>{
    console.log(err);
});

server.on('listening',()=>{
    const address = server.address();
    console.log(`服务器监听 ${address.address}:${address.port}`);
});

server.on('message',(msg,rinfo)=>{
    console.log(msg.toString())
    console.log(`receive message from ${rinfo.address}:${rinfo.port}`);
    server.send('exit',rinfo.port,rinfo.address)
});

server.bind('8060');