'use strict'
const User = use('App/Model/User')
class UserController {

  * index(request, response) {
    const users = yield User.all();
    console.log('users');
    response.ok(users);
  }

  * create(request, response) {

    const user = new User()
    user.username = 'virk'
    user.email = 'virk@adonisjs.com'

    yield user.save()

  }

  * store(request, response) {
    //
  }

  * show(request, response) {

    const user = yield User.find(request.param('id'));

    response.ok(user);
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = UserController
