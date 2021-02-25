import React from 'react'
import {Link} from 'react-router-dom'
import data from '../data';
function ProductScreen (props){
    console.log(props.match.params.id)
    const product =data.product.find(x=> x._id ==props.match.params.id) ;

    return<div>
        <div className="back-to-result">
            <Link to="/">Back to Home Page</Link>
        </div>
        <div className="details">
        <div className="details-img">
            <img src={product.image} alt="product" ></img>
        </div>
        <div className="detail-info">
            <ul>
                <li>
                    <h4>{product.name}</h4>
                </li>
                <li>
                    {product.rating}stars({product.numReview} Reviews)
                </li>
                <li>
                   Price: <b>{product.price}</b>

                </li>
                <li>
                    Description:
                    <div>
                        {product.description}
                    </div>
                </li>
            </ul>
        </div>
        <div className="detail-action">
            <ul>
                <li>
                    price :{product.price}
                </li>
                <li>
                    Status :{product.status}
                </li>
                <li>
                    Qty :<select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </li>
                <li>
                    <button className="btn">
                        Add to Cart                        
                    </button>
                </li>
            </ul>

        </div>


        </div>
        
    </div>
}
export default ProductScreen;