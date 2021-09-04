import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import CheckoutProduct from '../components/CheckoutProduct';
import { addToCart, removeFromCart } from '../actions/cartActions';

const Cart = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="max-w-screen-2xl m-auto p-8 md:flex justify-center space-x-5">
        {/* left */}
        <div className="flex flex-col space-y-10 bg-white m-5 pb-5 flex-grow">
          <h2 className="text-2xl border-b pb-4 uppercase tracking-widest">
            {cartItems.length === 0 ? (
              <div>
                Your shopping bag is empty
                <Link to="/">
                  <button className="bg-gray-400 text-white text-sm tracking-widest cursor-pointer py-2 px-4 ml-5">
                    Go Back
                  </button>
                </Link>
              </div>
            ) : (
              'Your shopping bag'
            )}
          </h2>

          {/* left: cart items */}
          {cartItems.map((item) => (
            <CheckoutProduct
              product={item}
              cartItems={cartItems}
              key={item._id}
              remove={() => removeFromCartHandler(item._id)}
            />
          ))}
        </div>

        {/* right */}
        <div className="m-5 flex-grow">
          <h2 className="text-2xl pb-4 uppercase tracking-widest">
            subtotal:{' '}
            {cartItems.reduce((acc, cur) => {
              return acc + cur.qty;
            }, 0)}{' '}
            items
          </h2>
          <p className="tracking-wider text-lg">
            $
            {cartItems
              .reduce((acc, cur) => {
                return acc + cur.qty * cur.price;
              }, 0)
              .toFixed(2)}
          </p>
          <button className="uppercase bg-black text-white py-3 px-9 mt-5 tracking-widest">
            Proceed to checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
