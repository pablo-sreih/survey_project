<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Survey;

class SurveyController extends Controller
{
    public function addSurvey(Request $request){
        $survey = Survey::create([
            "name" => $request->name
        ]);
        return response()->json([
            "status" => "success",
            "survey" => $survey
        ],200);
    }

    public function deleteSurveyById(Request $request){
        $survey = Survey::find($request->id);
        $survey->delete();

        return response()->json([
            "status" => "Success",
        ],200);
    }

    public function getSurveys(){
        $survey = Survey::all();

        return response()->json([
            "status" => "Success",
            "surveys" => $survey
        ],200);
    }
}
