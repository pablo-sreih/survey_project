<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PossibleAnswer;

class PossibleAnswerController extends Controller
{
    public function addPossibleAnswer(Request $request){
        $possible_answer = New PossibleAnswer;
        $possible_answer->possible_answer = $request->possible_answer;
        $possible_answer->question_id = $request->question_id;
        $possible_answer->save();

        return response()->json([
            "status" => "Success",
            "possible_answer" => $possible_answer
        ],200);
    }

    public function getAllPossibleAnswersByQuestionId(Request $request){
        $question_id = $request->question_id;
        $possible_answers = PossibleAnswer::where('question_id', $question_id)->get();

        return response()->json([
            "status" => "Success",
            "possible_answers" => $possible_answers
        ],200);
    }
}
