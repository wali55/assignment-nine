import React from 'react';

const ReviewItem = ({item}) => {
    return (
        <div className="border border-slate-300 rounded p-4">
            <p className="italic text-slate-500">{item.review}</p>
            <h3 className="mt-3 font-bold">{item.name}</h3>
            <p><span className="mr-1 text-orange-500">{item.rating}</span> Stars</p>
        </div>
    );
};

export default ReviewItem;