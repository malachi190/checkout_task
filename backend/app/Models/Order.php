<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'phone',
        'email',
        'shipping_address',
        'payment_method',
        'product_name',
        'price',
        'quantity'
    ];
}
