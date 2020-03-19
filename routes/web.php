<?php

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

//Route::get('/','BlogController@index');
//Route::get('/blog', 'BlogController@getData');
//Route::post('/store', 'BlogController@store');

Route::get('/', 'Scafolding@index');
//Route::view('/{path?}', 'index');