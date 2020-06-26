<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{any?}', function () {
    return view('index');
})->where('any','^(?!api).*$');

Route::get('/api/users','Api\UserController@index');
Route::get('/api/users/edit/{id}','Api\UserController@edit');

Route::post('/api/users/store','Api\UserController@store');
Route::delete('/api/users/delete/{id}','Api\UserController@destroy');
Route::put('/api/users/update/{id}','Api\UserController@update');