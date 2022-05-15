var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/', function(req, res){
    res.sendFile(__dirname+'./index.html');
});
users=[];
io.on('connection', (socket) => {
    console.log("connected..");
    socket.on('setUsername', (data) =>{
        console.log(data);
        users.push(data);
        socket.emit('userSet', {username:data});    
    });
    socket.on('msg', (data) =>{
        io.sockets.emit('newmsg', data);
    })
});

http.listen(3000, () => {
    console.log("listening on 3000");
});
