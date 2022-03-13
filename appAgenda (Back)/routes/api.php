<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
}); */

//Rotas da API para o CRUD de contatos
Route::get('contacts', 'App\Http\Controllers\ApiController@getAllContacts');
Route::post('contacts', 'App\Http\Controllers\ApiController@createContact');
Route::get('contacts/{id}', 'App\Http\Controllers\ApiController@getContact');
Route::put('contacts/{id}', 'App\Http\Controllers\ApiController@updateContact');
Route::delete('contacts/{id}','App\Http\Controllers\ApiController@deleteContact');
