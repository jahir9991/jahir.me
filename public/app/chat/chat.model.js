/**
 * Created by jahir on 06-Dec-16.
 */
/**
 * Created by jahir on 29-Nov-16.
 */
(function () {
  'use strict';

  angular
    .module('index')
    .factory('ChatModel', ChatModel);

  /** @ngInject */
  function ChatModel($http) {
    return {
      getsms: $http.get('/getsms')
    }

  }
})();
