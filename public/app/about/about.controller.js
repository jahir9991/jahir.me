/**
 * Created by jahir on 30-Nov-16.
 */

(function () {
  'use strict';

  angular
    .module('index')
    .controller('AboutController', AboutController);


  /** @ngInject */
  function AboutController() {


    var vm = this;
    vm.intro = {
      who: "Hello, I’m Jahir Alam",
      what: "freelance full stack Web-Developer,and Programmer based in dhaka,Bangladesh. ",
      study: "Complete Bsc. in Software Engineering  from American University-Bangladesh ",
      love: " My goal is to collaborate with like-minded individuals who are out to be change they want to see in the world. If you've got a project or hopeful idea you'd like to discuss, don't hestitate to get in touch! "
    };

  }
})();

