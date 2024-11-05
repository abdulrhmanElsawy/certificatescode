"use client"
import './css/Navbar.css';
import Logo from './images/logo.png';
import {Link} from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';
import $ from 'jquery';

function Navbar() {

    useEffect(() => {
        // Ensure jQuery selections are valid
        const $openNav = $("#open-nav");
        const $closeNav = $("#close-nav");
        const $navElements = $(".nav-elements");

        // Native Window object, used for direct window operations
        const windowWidth = window.innerWidth;

        if ($openNav.length > 0) {
            $openNav.on("click", function() {
                $navElements.slideDown(400).css({ display: "flex" });
            });
        }

        if ($closeNav.length > 0) {
            $closeNav.on("click", function() {
                $navElements.slideUp(400);
            });
        }

        if (windowWidth < 950) {
            $navElements.find("ul li:not(.special)").on("click", function() {
                $navElements.slideUp(400);
            });
        }

        $navElements.find("ul li a").on("click", function() {
            $(this).next().toggleClass("active");
        });

        $navElements.find("ul li .inner-eles a").on("click", function() {
            $(".nav-elements ul li .inner-eles").removeClass("active");
            if (windowWidth < 950) {
                $navElements.slideUp(400);
            }
        });

        // Remove the loading element if it exists
        const loadingElement = document.getElementById("loading");
        if (loadingElement) {
            loadingElement.remove();
        }
    }, []);

    return (
        <>
            <nav>
                <div className='container'>
                    <div className='nav-content'>
                        <div className='logo'>
                            <Link to="/">
                                <img src={Logo} alt='logo' />
                            </Link>
                        </div>

                            <button id="open-nav"> <i className="las la-bars"></i> </button>
                                <div className='nav-elements'>
                            <button id="close-nav"> <i className="las la-times"></i> </button>
                            <ul>
                                <li>
                                    <Link to="/"> الرئيسية  </Link>
                                </li>

                                <li>
                                    <Link to="/blogs"> المقالات </Link>
                                </li>

                                <li>
                                    <Link to="/courses"> الكورسات </Link>
                                </li>

                                <li>
                                    <Link to="/certificates"> الشهادات </Link>
                                </li>

                                <li>
                                    <Link to="/ads"> الإعلانات  </Link>
                                </li>


                                <li>
                                    <Link to="/certificates" className='btn-link'>  الشهادات  <img src={Logo} alt='logo' />  </Link>
                                </li>
                            </ul>
                        </div>

                        <div className='options'>
                            <Link to="/login"> <UserCircleIcon className='icon' /> </Link>
                            <Link to="/en"> En </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
