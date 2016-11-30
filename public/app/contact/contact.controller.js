/**
 * Created by jahir on 29-Nov-16.
 */
(function () {
  'use strict';

  angular
    .module('index')
    .controller('ContactController', ContactController);


  /** @ngInject */
  function ContactController() {
    var vm = this;
    vm.pageClass = 'page-contact';

  }
})();
