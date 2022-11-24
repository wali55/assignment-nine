import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import img from '../../images/best-laptop.jpg'
import ReviewItem from '../ReviewItem/ReviewItem';

const Home = () => {
    const [review, setReview] = useReview();
    return (
        <div>
            <div className="grid md:grid-cols-2 ml-14 mr-14">
            <div className="mr-6 mt-10">
                <h1 className="text-6xl"><span className="text-orange-400 leading-normal">The best laptop deals</span> in November 2022</h1>
                <h2 className="text-2xl my-8">Save with the best laptop deals from budget to premium</h2>
                <p className="text-lg">November laptop deals offer exceptionally stellar discounts on today's best notebooks. If you want to treat yourself or someone special to a new personal computer, now is the best time of the year to buy a laptop. </p>
                <button className="text-lg my-8 bg-orange-400 text-white p-3 rounded hover:bg-orange-700">Learn More</button>
            </div>
            <div>
                <img className="rounded" src={img} alt="" />
            </div>
            </div>
            <div className="my-24">
                <h1 className="text-3xl text-center">See What Our <span className="text-orange-400">Customers</span> Say</h1>
                <div className="grid md:grid-cols-3 m-20 gap-8">
                    {
                        review.map((item) => <ReviewItem
                        key={item.id}
                        item={item}
                        ></ReviewItem>)
                    }
                </div>
                <div className="items-center flex justify-center">
                    <Link to="/reviews">
                        <button className="text-lg bg-orange-400 text-white p-3 rounded hover:bg-orange-700">Show All the Reviews</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;