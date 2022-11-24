import React from 'react';
import CustomLink from '../../utilities/CustomLink';

const Header = () => {
    return (
        <nav className="flex my-10 text-xl ml-24">
            <CustomLink className="mr-12"  to="/home">Home</CustomLink>
            <CustomLink className="mr-12" to="/reviews">Reviews</CustomLink>
            <CustomLink className="mr-12" to="/dashboard">Dashboard</CustomLink>
            <CustomLink className="mr-12" to="/blogs">Blogs</CustomLink>
            <CustomLink className="mr-12" to="/about">About</CustomLink>
        </nav>
    );
};

export default Header;