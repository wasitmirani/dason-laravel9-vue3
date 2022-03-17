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

Route::view('login', 'auth.login')->name('login');
Route::get('/error-404', function () {
    return view('backend.error-404');
})->name('error-404');

Route::view('/{any?}', 'backend.index')->where('any', '.*')->middleware(['auth']);

require __DIR__.'/auth.php';
