<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SurveyController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\PossibleAnswerController;
use App\Http\Controllers\AnswerController;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');

});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => "admin"], function () {
    Route::post('/add-survey', [SurveyController::class, 'addSurvey'])->name('add-survey');
    Route::post('/delete-survey', [SurveyController::class, 'deleteSurveyById'])->name('delete-survey');
    Route::post('/add-question', [QuestionController::class, 'addQuestion'])->name('add-question');
    Route::post('/add-pos-answer', [PossibleAnswerController::class, 'addPossibleAnswer']);
    Route::post('/get-answers-by-question-id', [AnswerController::class, 'getAnswersByQuestionId']);
});

Route::get('/get-surveys', [SurveyController::class, 'getSurveys'])->name('get-surveys');
Route::post('/get-questions', [QuestionController::class, 'getQuestionsBySurveyId'])->name('get-all-questions-by-survey-id');
Route::post('/get-all-possible-answers', [PossibleAnswerController::class, 'getAllPossibleAnswersByQuestionId']);

Route::group(['prefix' => "user"], function() {
    Route::post('/add-answer', [AnswerController::class, 'addAnswer'])->name('add-answer');
});