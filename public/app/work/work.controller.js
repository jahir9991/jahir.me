/**
 * Created by jahir on 29-Nov-16.
 */
(function () {
  'use strict';

  angular
    .module('index')
    .controller('WorkController', ['$http', WorkController]);


  /** @ngInject */
  function WorkController($http) {

    test();

    var vm = this;

    vm.pageClass = 'page-about';
    $http.get('/data/test.json')
      .then(function (res) {


      });


  }
})();
