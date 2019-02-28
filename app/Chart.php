<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chart extends Model
{
  protected $fillable = [
      'type', 'Name', 'Connection', 'created_at', 'updated_at'
  ];
}
