import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

//icons
import { IoClose } from 'react-icons/io5';

//components
import Qty from '../components/Qty';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
    const { removeFromCart } = useContext(CartContext);
    return (
        <div className="flex gap-x-8 p-8  border-b border-accent">
            <Link to={`product/${item.id}`} className="w-[70px] h-[70px]">
                <img src={`http://localhost:1337${item.attributes.image.data.attributes.url}`} alt="" />
            </Link>

            <div className="flex-1">
                {/* title and remove icons */}
                <div className="flex gap-x-4 mb-3 ">
                    <Link to={`product/${item.id}`}>{item.attributes.title}</Link>
                    <div
                        onClick={() => removeFromCart(item.id)}
                        className="cursor-pointer text-[24px] hover:text-accent transition-all"
                    >
                        <IoClose />
                    </div>
                </div>

                <div className="flex items-center gap-x-12">
                    {/* quantily */}
                    <div className="flex gap-x-4 mb-2">
                        <Qty item={item} />
                    </div>
                    <div className="text-xl text-accent">${item.attributes.price * item.amount}</div>
                </div>
                {/* price */}
                <div className="text-accent">$ {item.attributes.price}</div>
            </div>
        </div>
    );
};

export default CartItem;
