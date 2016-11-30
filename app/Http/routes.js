'use strict';

/*
 |--------------------------------------------------------------------------
 | Router
 |--------------------------------------------------------------------------
 |
 | AdonisJs Router helps you in defining urls and their actions. It supports
 | all major HTTP conventions to keep your routes file descriptive and
 | clean.
 |
 | @example
 | Route.get('/user', 'UserController.index')
 | Route.post('/user', 'UserController.store')
 | Route.resource('user', 'UserController')
 */

const Route = use('Route')


Route.get('/error', 'HomeController.error')
Route.get('/', 'HomeController.index')
Route.get('/users', 'UserController.index')
Route.get('/user/:id', 'UserController.show')
Route.post('/addusers', 'UserController.create')




