import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckOutSteps from '../components/CheckOutSteps';

const PlaceOrder = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="max-w-7xl m-auto mt-10 space-y-7 tracking-widest p-5">
      <div className="flex justify-center">
        <CheckOutSteps step1 step2 step3 step4 />
      </div>
      <div className="w-full m-auto ">
        <div className="md:flex md:justify-between md:space-x-10">
          {/* Shipping Info */}
          <div className="flex-grow flex flex-col mb-8">
            <div className="border-b">
              <h2 className="h2 py-5">Shipping</h2>
              <p className="py-5">
                Address: {cart.shippingAddress.address},{' '}
                {cart.shippingAddress.city}, {cart.shippingAddress.postalCode},{' '}
                {cart.shippingAddress.country}
              </p>
            </div>
            <div className="border-b">
              <h2 className="h2 py-5">Payment Method</h2>
              <p className="py-5">Method: {cart.paymentMethod}</p>
            </div>
            <div className="border-b">
              <h2 className="h2 py-5">Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <div className="primary_msg">Your cart is Empty</div>
              ) : (
                cart.cartItems.map((item, idx) => (
                  <div
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b py-2"
                    key={idx}
                  >
                    <div className="flex justify-between items-center sm:w-1/2">
                      <div className="p-5 bg-white">
                        <img
                          src={item.image}
                          alt={item.title}
                          height={80}
                          width={80}
                        />
                      </div>
                      <p>{item.title}</p>
                    </div>
                    <p className="pt-2">
                      {item.qty} x ${item.price} = ${item.qty * item.price}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
          {/* Order Info */}
          <div className="border flex flex-col h-96">
            <h2 className="h2 p-5 border-b">Order Summary</h2>
            <div className="order_summary_item">
              <p className="">Items</p>
              <p>$189.97</p>
            </div>
            <div className="order_summary_item">
              <p className="">Shipping</p>
              <p>$0</p>
            </div>
            <div className="order_summary_item">
              <p className="">Tax</p>
              <p>$28.5</p>
            </div>
            <div className="order_summary_item">
              <p className="">Total</p>
              <p>$189.97</p>
            </div>
            <button className="bg-black text-white px-9 py-3 uppercase tracking-widest align-center hover:bg-gray-800">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
