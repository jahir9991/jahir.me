/**
 * Created by jahir on 29-Nov-16.
 */
(function () {
  'use strict';

  angular
    .module('index')
    .controller('ChatController', ChatController);


  /** @ngInject */
  function ChatController(ChatModel, mySocket) {
    // mySocket.connect();
    ChatModel.getsms.success(function (data) {
      console.log(data);
    })


    var vm = this;

    vm.user = [];
    vm.messages = [];

    vm.name = '';
    vm.msg = '';

    vm.submitName = function (name) {
      console.log(name);
      if (name != null && name != '') {
        mySocket.emit('add-user', {username: name});
      }
      else {

      }


    }
    mySocket.emit('request-users', {});
    mySocket.on('users', function (data) {
      vm.users = data.users;

    });

    vm.send = function (msg) {
      if (msg != null && msg != '') {
        mySocket.emit('message', {message: msg});
        vm.input = '';
      }

    }
    mySocket.on('message', function (data) {
      vm.messages.push(data);
    });

    mySocket.on('add-user', function (data) {
      vm.users.push(data.username);
      vm.messages.push({username: data.username, message: 'has entered the channel'});

    });
    mySocket.on('remove-user', function (data) {
      vm.users.splice(vm.users.indexOf(data.username), 1);
      vm.messages.push({username: data.username, message: 'has left the  channel'});
    });
    mySocket.on('bad-username', function (data) {
      prompt(data.message);
    });


  }
})();
