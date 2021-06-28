import React, {useEffect, useState} from 'react';
import ReviewCard from './ReviewCard';
const Reviews = () => {
    const [reviewData, setReviewData] = useState([]);
        useEffect(() => {
    
       fetch('https://secret-coast-76571.herokuapp.com/reviews')
          .then(res => res.json())
          .then(data => {
              console.log(data)
              setReviewData(data)

          })
    
    }, [])
    return (
        
         <div className="container mt-5 text-center">
            <h2 className="text-success">Happy Users</h2>
            
            <div className="row mt-4">
                {
                  reviewData.map(review => <ReviewCard review={review}></ReviewCard>)
                }
            </div>
        </div>
    )
}

export default Reviews
