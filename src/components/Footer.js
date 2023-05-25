/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

//icons
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="pt-16 bg-primary">
            <div className="container mx-auto">
                <div className="text-center">
                    <h2 className="h2 uppercase mb-6 font-semibold">Subcribe to our newletter</h2>
                    <p className="text-white/70 mb-16">
                        Be the first to get the latest new about trends, promotions and much more!
                    </p>
                </div>

                {/* form */}
                <form className="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 mb-14">
                    <input type="text" placeholder="Your email" className="input" />
                    <button className="btn btn-accent min-v-[150px]">Join</button>
                </form>
                {/* link */}
                <div className="text-base text-white/60 flex gap-x-6 capitalize max-w-max mx-auto mb-9">
                    <a href="#" className="hover:text-white transi">
                        Returns policy
                    </a>
                    <a href="#" className="hover:text-white transi">
                        Track your order
                    </a>
                    <a href="#" className="hover:text-white transi">
                        Shipping & delivery
                    </a>
                </div>

                {/* socials */}
                <div className="flex gap-x-6 max-w-max mx-auto text-lg mb-16">
                    <a href="#" className="hover:text-white transi">
                        <FaYoutube />
                    </a>
                    <a href="https://www.instagram.com/__minhtienn__/" className="hover:text-white transi">
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com/minhneit" className="hover:text-white transi">
                        <FaTwitter />
                    </a>
                    <a href="https://www.facebook.com/minhtien1402/" className="hover:text-white transi">
                        <FaFacebook />
                    </a>
                </div>

                {/* copyright */}
                <div className="py-10 border-t-white/10">
                    <div className="container mx-auto">
                        <div className="text-center text-sm">Copyright &copy; Photoland 2023. All right reserved</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
