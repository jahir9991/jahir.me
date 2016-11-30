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
    terminal();

    var vm = this;
    vm.intro = "Hi, I'm Jahir Alam,     an aspiring web developer with an interest in Full-stack.     \
                     I'm majoring in Data-science by day and teaching myself web development and design by night.     \
                     I was born and raised many worlds away from the Silicon Valley, on a pebble called Sardinia, floating amid   \
                     the       \
                     Mediterranean Sea.      \
                     I love almost anything under the sun, apart from spiders and coconuts."

  }
})();

