import React, { useContext } from 'react';

//icons
import { IoArrowForward, IoCartOutline, IoClose } from 'react-icons/io5';
import { CartContext } from '../context/CartContext';

//component
import CartItem from './CartItem';

//stripe
import { loadStripe } from '@stripe/stripe-js';
import { request } from '../request';

const Cart = () => {
    const { setIsOpen, cart, total, clearCart } = useContext(CartContext);

    const stripePromise = loadStripe(
        'pk_test_51NAuAcEkPmgCCvBREysEMuSi0g8Pw6yUfs8rxrhuESgrWcGLWAM1KieORWVNr6c4lspKYEetkP9qCcsU8fP5WroV00psroJyKc',
    );
    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await request.post('/orders', {
                cart,
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="w-full h-full  px-4 text-white cursor-pointer">
            <div className="overflow-y-auto overflow-x-hidden h-[75vh]">
                <div
                    onClick={() => setIsOpen(false)}
                    className="text-4xl w-full h-[98px] flex justify-between border-b border-accent items-center"
                >
                    {/* close */}
                    <div className="font-sans uppercase text-xl font-semibold">Shop bag</div>
                    <div className="p-9">
                        <IoClose className="text-white hover:text-accent" />
                    </div>
                </div>

                <div className="flex flex-col px-2">
                    {cart.map((item) => {
                        return <CartItem key={item.id} item={item} />;
                    })}
                </div>
            </div>

            {/* subtotal & total */}
            {cart.length >= 1 && (
                <div className="px-6 py-10 flex flex-col">
                    {/* subtotal */}
                    <div className="flex justify-between text-lg">
                        <div>Subtotal</div>
                        <div>$ {total}</div>
                    </div>

                    {/* total */}
                    <div className="flex justify-between text-2xl">
                        <div>Total</div>
                        <div>$ {parseFloat(total)}</div>
                    </div>
                </div>
            )}

            <div>
                {cart.length >= 1 ? (
                    <div className="flex justify-between gap-x-4">
                        <button onClick={clearCart} className="btn btn-accent hover:bg-accent-hover text-primary">
                            Clear cart
                        </button>
                        <button
                            onClick={handlePayment}
                            className="btn btn-accent hover:bg-accent-hovertext primary flex-1 gap-x-2"
                        >
                            Checkout
                            <IoArrowForward className="text-lg" />
                        </button>
                    </div>
                ) : (
                    <div className="h-full absolute top-0 right-0 left-0 flex justify-center items-center -z-10 flex-col text-white/30">
                        <div className="text-2xl">Your cart is empty</div>
                        <div className="text-6xl">
                            <IoCartOutline />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
