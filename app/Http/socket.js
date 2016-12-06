/**
 * Created by jahir on 06-Dec-16.
 */
'use strict'
global.io;

module.exports = function (server) {
  var users = [];

  global.io = use('socket.io')(server)

  io.on('connection', function (socket) {
    var username = '';
    console.log('connection created >>>');

    socket.on('request-users', function () {
      socket.emit('users', {users: users});
    });
    socket.on('message', function (data) {
      io.emit('message', {username: username, message: data.message});
    })
    socket.on('add-user', function (data) {
      if (users.indexOf(data.username) == -1) {
        io.emit('add-user', {username: data.username});
        username = data.username;
        users.push(data.username);
      } else {
        socket.emit('bad-username', {
          message: "already loged in"
        })

      }

    })


    socket.on('disconnect', function () {
      console.log(username + ' has disconnected');
      users.splice(users.indexOf(username), 1);
      io.emit('remove-user', {username: username});
    })

  })

}
