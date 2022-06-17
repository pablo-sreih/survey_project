<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Answer;

class AnswerController extends Controller
{
    public function addAnswer(Request $request){
        $answer = new Answer;
        $answer->question_id = $request->question_id;
        $answer->answer = $request->answer;
        $answer->save();

        return response()->json([
            "status" => "Success",
        ],200);
    }
}
