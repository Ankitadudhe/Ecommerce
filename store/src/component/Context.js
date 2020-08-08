import React, { Component } from 'react';
import { storeProducts,detailsProducts} from '../component/Data'
import Details from './Details';
const ProductContext=React.createContext();

class ProductProvider extends Component{
    state={
        products:[],
        detail:detailsProducts,
        cart:[],
        modalOpen:true,
        modalProduct:detailsProducts,
    }

    componentDidMount(){
        this.setProduct();
    }
setProduct=()=>{
    let tempproducts=[];
    storeProducts.forEach(item =>{
        const singleItem={...item};
        tempproducts=[...tempproducts,singleItem];

    })
    this.setState(()=>{
        return{products:tempproducts}
    })
}
getItem=(id)=>{
    const product=this.state.products.find(item=>item.id===id);
    return product;
}
    handleDetail=(id)=>{
        const product=this.getItem(id);
        this.setState(()=>{
            return{detailsProducts:product}
        })
        
    }
    addToCart= id=>{
let tempproducts=[...this.state.products] ;
const index =tempproducts.indexOf(this.getItem(id)) ;
const product=tempproducts[index];
product.inCart=true;
product.count=1;
const price=product.price;
product.total=price;
this.setState(()=>{
    return{product:tempproducts,cart:[...this.state.cart,
    product]};
},
()=>{
    console.log(this.state);
    
})
    }
   openmodal=id =>{
       const product =this.getItem(id);
       this.setState(()=>{
           return{modalProduct:product,modalOpen:true}
       })
   }
   closeModal=()=>{
this.setState(()=>{
    return{modalOpen:false}
})
   }
    render(){
        return(
            <ProductContext.Provider value={{
                //  ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                openmodal:this.openmodal,
                closeModal:this.closeModal
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;
export {ProductProvider,ProductConsumer};