import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const host = "http://127.0.0.1:8000";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

    try {
      axios.get(`${host}/sanctum/csrf-cookie`).then(() => {
        // console.log("res", res)
        axios.post(`${host}/api/order`, data).then((res) => {
          if (res.data.status === "success") {
            alert("Order Confirmed!");
          }
        });
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div>
        <h1>Order Chekout</h1>

        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              id=""
              {...register("name", { required: true })}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="">Phone</label>
            <input
              type="text"
              name="phone"
              id=""
              {...register("phone", { required: true })}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              id=""
              {...register("email", { required: true })}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="">Shipping Address</label>
            <input
              type="text"
              name="shipping_address"
              id=""
              {...register("shipping_address", { required: true })}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="">Payment Method</label>
            {/* <input type="text" name="payment_method" id="" /> */}
            <select
              name=""
              id=""
              {...register("payment_method", { required: true })}
            >
              <option value="card">Card</option>
              <option value="cash">Pay on delivery</option>
            </select>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="">Product Name</label>
            <input
              type="text"
              name="product_name"
              id=""
              {...register("product_name", { required: true })}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="">Price</label>
            <input
              type="text"
              name="price"
              id=""
              {...register("price", { required: true })}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="">Quantity</label>
            <input
              type="text"
              name="quantity"
              id=""
              {...register("quantity", { required: true })}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
