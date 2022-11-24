import React from 'react';
import useReview from '../../hooks/useReview';
import ReviewItem from '../ReviewItem/ReviewItem';

const Reviews = () => {
    const [review, setReview] = useReview();
    return (
        <div>
            <h1 className="text-4xl text-center my-14">Our <span className="text-orange-400">Customers</span> Review</h1>
            <div className="grid md:grid-cols-3 m-20 gap-8">
                    {
                        review.map((item) => <ReviewItem
                        key={item.id}
                        item={item}
                        ></ReviewItem>)
                    }
                </div>
        </div>
    );
};

export default Reviews;