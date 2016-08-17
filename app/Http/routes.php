<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

/**
 * @type \Dingo\Api\Routing\Router
 */
$api = app('Dingo\Api\Routing\Router');

/**
 * API Routes
 * Prefix ("/api/") for all routes is defined in .env
 *
 * @param \Dingo\Api\Routing\Router $api
 */
$api->version('v1', ['middleware' => 'cors'], function ($api) {

    /**
     * @var \Dingo\Api\Routing\Router $api
     */
    $api->post('auth', 'App\Http\Controllers\AuthController@login');
    $api->get('auth', 'App\Http\Controllers\AuthController@verify');
    $api->delete('auth', 'App\Http\Controllers\AuthController@destroy');


    // Authentication routes
    // The following command will create these routes.
    //   - GET    /api/users
    //   - POST   /api/users
    //   - PATCH  /api/users/{id}
    //   - DELETE /api/users/{id}
    // $api->resource('users', 'App\Http\Controllers\UsersController');
});

$app->get('{slug:.*}', 'AngularController@serve');