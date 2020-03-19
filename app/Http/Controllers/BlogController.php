<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Blog;
class BlogController extends Controller
{


public function index(){
    return view('welcome');
}

public function getData(){
    return Blog::all();
}

public function store(Request $request){


    $Blog= new Blog;

    $Blog->title = $request->title;
    $Blog->content= $request->content;
    $Blog->user_id= 1   ;
    $Blog->save();

    return Blog::orderBy('id','DESC')->get();

}


}
