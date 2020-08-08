import React, { Component } from 'react';
import {ProductConsumer} from './Context'
import {detailsProducts} from './Data'
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button'
import PropTypes from 'prop-types'

class Details extends Component {

    render() {
        // const { id, title, img, price, inCart } = this.props.product;

        return (
            <div>
<ProductConsumer>
    {value=>{
        console.log(value.detailsProducts);
        
    const{id,company,img,info,price,title,inCart} =
    detailsProducts
    ;
     return(
<div className="row">

  <div className ="col-10.mx-auto.text-center.text-slanted text-blue my-5">
     <h1>{title}</h1>
</div>
  {/* product text */}
<div className="row">
    <div className="col-10 mx-auto col-md-6 my-3
    text-capitalize">
        <h1>model:{title}</h1>
        <h4 className="text-title text-uppercase
        text-muted mt-3 mb-2">
            made by:<span className="text-uppercase">
                {company}
            </span>
        </h4>
        <h4 className="text-blue">
            <strong>
                price :<span>$</span>
                {price}
            </strong>
        </h4>
        <p className="text-capitalize font-weight-bold mt-3 mb-0">
            some info about product:
        </p>
        <p className="text-muted lead">{info}</p>
        {/* button*/}
        <div>
            <Link to="/">
                <ButtonContainer>
                    back to product
                </ButtonContainer>
            </Link>
            <ButtonContainer
            cart
            disabled={inCart?true:false}
            onClick={()=>{
                value.addToCart(id);
                value.openmodal(id);

            }}>
                {inCart ? "inCart":"add to cart"}
            </ButtonContainer>
        </div>
    </div>
</div> 
</div>  
     )
    }}
    
</ProductConsumer >
            </div>
        );
    }
}
Details.propTypes={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
};
export default Details;