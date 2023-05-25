import React, { useContext } from 'react';

import { useState } from 'react';

//image
import Logo from '../img/logo.png';

//icons
import { SlBag } from 'react-icons/sl';
import { FiMenu } from 'react-icons/fi';

//import Link
import { Link } from 'react-router-dom';

//components
import SearchForm from '../components/SearchForm';
import CategoryNavMobile from '../components/CategoryNavMobile';
import Cart from '../components/Cart';
import { CartContext } from '../context/CartContext';

const Header = () => {
    const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
    const [catNavMobile, setCatnavMobile] = useState(false);
    return (
        <header className="bg-primary fixed w-full top-0 z-40 lg:relative xl:mb-[30px]">
            <div className="container mx-auto">
                <div className="flex flex-row gap-4 py-4 xl:py-10 lg:items-center justify-between mb-4 xl:mb-0">
                    {/* menu */}
                    <div onClick={() => setCatnavMobile(true)} className="text-3xl xl:hidden cursor-pointer">
                        <FiMenu />
                    </div>

                    {/* Category nav mobile */}
                    <div
                        className={`${catNavMobile ? 'left-0 ' : '-left-full'}
                    fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200
                    `}
                    >
                        <CategoryNavMobile setCatnavMobile={setCatnavMobile} />
                    </div>
                    <Link to={'/'}>
                        <img src={Logo} alt="" />
                    </Link>

                    {/*Search only desktop */}
                    <div className="hidden w-full xl:flex xl:max-w-[734px]">
                        <SearchForm />
                    </div>

                    {/* Cart & phone */}
                    <div className="flex items-center gap-x-[10px]">
                        <div className="hidden xl:flex uppercase">Need help? 123 456 789</div>
                        <div onClick={() => setIsOpen(!isOpen)} className="relative cursor-pointer">
                            <SlBag className="text-2xl" />
                            {/* amount */}
                            <div className="bg-accent text-primary absolute top-3 -right-1 text-[13px] rounded-full w-[18px] h-[18px] flex justify-center items-center font-bold tracking-[-0.1em]">
                                {itemsAmount}
                            </div>
                        </div>
                        {/* cart */}
                        <div
                            className={`
                            ${isOpen ? 'right-0' : '-right-full'}
                          bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300`}
                        >
                            <Cart />
                        </div>
                    </div>
                </div>

                {/* Search only mobile */}
                <div className="xl:hidden">
                    <SearchForm />
                </div>
            </div>
        </header>
    );
};

export default Header;
