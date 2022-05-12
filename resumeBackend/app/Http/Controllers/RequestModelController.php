<?php

namespace App\Http\Controllers;

use App\Models\RequestModel;
use Illuminate\Http\Request;

class RequestModelController extends Controller
{
    public function index(){
        return RequestModel::get();
    }

    public function store(Request $req){

        $request = new RequestModel();
        $request->user_title = $req->name;
        $request->user_email = $req->email;
        
        $file = $req->file("image");
        $imageName = $file->getClientOriginalName();
        $file->move(public_path("requested_images"),$imageName);
        $request->image = $imageName;
        
        $request->description = $req->description;
        $request->save();

        return ["response" => "success"];
    }
}
