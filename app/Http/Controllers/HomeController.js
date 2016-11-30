'use strict'


class HomeController {

  * index(request, response) {
    yield response.sendView('welcome')
  }
  * error(request, response) {
      yield response.sendView('errors.index')
    }



}

module.exports = HomeController
