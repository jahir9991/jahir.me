/**
 * Created by jahir on 29-Nov-16.
 */
(function () {
  'use strict';

  angular
    .module('index')
    .controller('WorkController', ['loaded', WorkController]);


  /** @ngInject */
  function WorkController(loaded) {
    test();
    var vm = this;
    loaded = true;
    vm.pageClass = 'page-about';

  }
})();
