<?php
/**
 * Created by PhpStorm.
 * User: Nampth
 * Date: 9/22/2020
 * Time: 3:56 PM
 */


use App\Http\Controllers\Common\AuthController;

Route::group(['namespace' => 'Auth', 'prefix' => 'auth', 'as' => 'auth.'], function () {
    Route::post('/login-social', [AuthController::class, 'loginSocial'])->name('login-social');
});
