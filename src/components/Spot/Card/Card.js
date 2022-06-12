import React from 'react'
import { useHistory } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';

const Card = ({ resort }) => {
    const desc = resort.desc.slice(0, 50)
    const history = useHistory();
    
    const handleClick = (id) => {
        history.push(`/details/${id}`)
    }
    return (
            <div className="col-md-4 my-3 px-5">
                 <Zoom clear>
                <div className="card rounded">
                    <img style={{height:'300px'}} className="img-fluid" src={resort.img} alt="Card image cap"/>
                    <div className="card-body bg-dark text-white">
                        <h5 className="card-title">{resort.name}</h5>
                        <p className="card-text">{desc}...</p>
                        <button className="btn btn-primary" onClick={()=>handleClick(resort._id)}>View Details</button>
                    </div>
                </div>
                </Zoom>  
            </div>
    )
}

export default Card
