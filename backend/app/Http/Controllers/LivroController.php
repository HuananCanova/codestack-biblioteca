<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Livro;

class LivroController extends Controller
{
    public function store(Request $request){
        $livro = new Livro();
        $livro->titulo = $request->input('titulo');
        $livro->autor = $request->input('autor');
        $livro->classificacao = $request->input('classificacao');
        $livro->resenha = $request->input('resenha');
        $livro->data_adicao = now();

        $livro->save();

        return response()->json($livro, 201);
    }

    public function index(){
        $livros = Livro::all();
        return response()->json($livros, 200);
    }

    public function show($id){
        $livro = Livro::find($id);
        if(!$livro){
            return response()->json(['erro' => 'Livro não encontrado'], 404);
        }
        return response()->json($livro, 200);
    }
}
