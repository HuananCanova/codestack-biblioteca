<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Livro extends Model
{
    protected $fillable = ['titulo', 'autor', 'classificacao', 'resenha', 'data_adicao'];
    public $timestamps = false;
    use HasFactory;
}
