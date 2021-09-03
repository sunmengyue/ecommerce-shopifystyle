import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import CheckoutProduct from '../components/CheckoutProduct';
import { addToCart } from '../actions/cartActions';

const Cart = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? location.search.split('=')[1] * 1 : 1;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return (
    <>
      <Header />
      <Navbar />
      <div className="max-w-screen-2xl m-auto p-8 md:flex justify-center space-x-5">
        {/* left */}
        <div className="flex flex-col space-y-10 bg-white m-5 pb-5 flex-grow">
          <h2 className="text-2xl border-b pb-4 uppercase tracking-widest">
            {cartItems.length === 0 ? (
              <Message>
                Your shopping bag is empty<Link to="/">Go back</Link>
              </Message>
            ) : (
              'Your shopping bag'
            )}
          </h2>
          {cartItems.map((item) => (
            <CheckoutProduct product={item} key={item._id} qty={qty} />
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
          <p className="tracking-wider text-lg">$579.97</p>
          <button className="uppercase bg-black text-white py-3 px-9 mt-5 tracking">
            Proceed to checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
