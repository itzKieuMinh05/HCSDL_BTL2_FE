import logo from './assets/logo.webp';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function Navbar(){
    return(
        <nav className='navbar'>
            {/*Left-logo*/}
            <div className='navbar-left'>
                <img src={logo} alt="ITviec logo" className='logo'/>
            </div>
            {/* Center Việc làm */}
            <div className='navbar-center'>
            <a href="#">Việc làm IT</a><i className="fa-solid fa-caret-down"></i>
            <a href="#">Top công ty IT</a><i className="fa-solid fa-caret-down"></i>
            <a href="#">Blog</a><i className="fa-solid fa-caret-down"></i>
            </div>
            {/* Right Login */}
            <div className='navbar-right'>
                <a href="#">Nhà tuyển dung</a>
                <a href="#">Đăng Nhập/ Đăng Ký</a>
            </div>
        </nav>
    );
};

function Flex1(){
    return(
        <div className='Hero-section'>
            <div className='Search-section'>
                <h1 className='Hero-title'>J97 Việc làm IT cho Developer "Chất"</h1>
                <div className='search-bar'>
                    <button className='city'>
                    <i className="fa-solid fa-caret-down"></i> Tìm kiếm thành phố <i className="fa-solid fa-location-dot"></i>
                    </button>
                <input type="text"
                        placeholder='Nhập từ khóa theo kỹ năng, chức vụ, công ty...'
                />
                <button className='search-button'>
                    <i className="fa-solid fa-magnifying-glass"></i> Tìm kiếm
                </button>
                </div>
            </div>

            <div className='Suggestion'>
                <span>Gợi ý cho bạn</span>
                <button>Java</button>
                <button>ReactJS</button>
                <button>.NET</button>
                <button>Tester</button>
                <button>PHP</button>
                <button>Business Analyst</button>
                <button>NodeJS</button>
                <button>Manager</button>
            </div>
        </div>
    );
}

function Use(){
    return(
        <>
            <Navbar/>
            <div className="navbar-divider"/>
            <Flex1/>
        </>
    );
}

export default Use;