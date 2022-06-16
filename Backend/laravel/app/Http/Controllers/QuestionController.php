<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Question;

class QuestionController extends Controller
{
    public function addQuestion(Request $request){
        $question = new Question;
        $question->survey_id = $request->survey_id;
        $question->name = $request->name;
        $question->type = $request->type;
        $question->save();

        return response()->json([
            "status" => "Success",
            "question" => $question
        ],200);
    }
}
