import React, { Component } from 'react';
import styled from 'styled-components'
import {ProductConsumer} from '../component/Context'
import {ButtonContainer} from '../component/Button'
import {Link} from 'react-router-dom'
export default class Modal extends Component {
    render(){
    return (
       <ProductConsumer>
           {(value)=>{
               const {modalOpen,closeModal}=value;
            //    const{img,title,price}=value.modalProduct;
if(!modalOpen){
               return null;
}
else{
    return(
    <ModalContainer>
<div className="container">
    <div className="row">
        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"></div>
   <h5>item added to cart</h5>
   {/* <img src={} className="img-fluid" 
   alt="product"></img>
   <h5>{}</h5> */}
    </div>
</div>
    </ModalContainer>
    );
}
           }}
       </ProductConsumer>
    );
}
}
const ModalContainer=styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom;
background:rgba(0,0,0,0.3);
display:flex;
align-item:center;
justify-content:center;
#modal{
    background:var(--mainWhite);
}
`;
