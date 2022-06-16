<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Survey;

class SurveyController extends Controller
{
    public function addSurvey(Request $request){
        $survey = new Survey;
        $survey->name = $request->name;
        $survey->save();

        return response()->json([
            "status" => "Success",
        ],200);
    }

    public function deleteSurveyById(Request $request){
        $survey = Survey::find($request->id);
        $survey->delete();

        return response()->json([
            "status" => "Success",
        ],200);
    }
}
