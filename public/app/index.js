(function () {
  'use strict';

  angular
    .module('index', ['ui.router', 'ngAnimate', 'btford.socket-io'])
    .value('loaded', false);

})();


(function () {
  'use strict';

  angular
    .module('index')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .state('about', {
        url: '/about',
        templateUrl: '/app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .state('work', {
        url: '/work',
        templateUrl: '/app/work/work.html',
        controller: 'WorkController',
        controllerAs: 'work'
      }).state('article', {
      url: '/article',
      templateUrl: '/app/article/article.html',
      controller: 'ArticleController',
      controllerAs: 'article'
    }).state('contact', {
      url: '/contact',
      templateUrl: '/app/contact/contact.html',
      controller: 'ContactController',
      controllerAs: 'contact'
    });

    $urlRouterProvider.otherwise('/home');
  }

})();

(function () {
  'use strict';

  angular
    .module('index')
    .controller('MainController', MainController)
    .factory('mySocket', function (socketFactory) {
      return socketFactory();
    });


  /** @ngInject */
  function MainController() {
    var vm = this;
    console.log("main controller");
  }

})();
