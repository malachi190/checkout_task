<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    public function order()
    {
        $validate = Validator::make(request()->all(), [
            "name" => "required|string",
            'email' => 'required|string|lowercase|email|max:255|unique:users',
            "phone" => "required",
            "shipping_address" => "required",
            "payment_method" => "required",
            "product_name" => "required",
            "price" => "required",
            "quantity" => "required"
        ]);


        if ($validate->fails()) {
            return $validate->errors();
        }

        $order = Order::create([
            "name" => request("name"),
            "email" => request("email"),
            "phone" => request("phone"),
            "payment_method" => request("payment_method"),
            "product_name" => request("product_name"),
            "price" => request("price"),
            "shipping_address" => request("shipping_address"),
            "quantity"=> request("quantity"),
        ]);

        if(!$order){
            throw new \ErrorException("An Error Occured");
        }

        return response()->json([
            "status"=> "success",
            "message" => "Order Recieved"
        ]);
    }
}
