import React from 'react'

const ReviewCard = ({review}) => {
    return (
         <div className="col-md-4">
                <div className=" mb-5 ">
                    <img style={{ height: '100px', width: '100px', borderRadius: '50%' }} src={review.img} alt="" />
                    <h6 className="mt-3 mb-2 text-success">{review.name}</h6>
                    <p>{review.review}</p>
                </div>
            </div>
    )
}

export default ReviewCard
