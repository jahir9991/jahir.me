/**
 * Created by jahir on 29-Nov-16.
 */
(function () {
  'use strict';

  angular
    .module('index')
    .controller('HomeController', ['loaded', HomeController]);


  /** @ngInject */
  function HomeController(loaded) {
    var vm = this;
    loaded = false;
    vm.pageClass = 'page-home';


  }
})();
