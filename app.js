var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/', function(req, res){
    res.sendFile(__dirname+'/templates/index.html');
});
io.on('connection', (socket) => {
    console.log("jalabulajangu");
    socket.on('disconnect', () => {
        console.log("poda de");
    });
});
http.listen(3000, () => {
    console.log("listening on*:3000");
});
