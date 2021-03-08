import React from 'react'
import {connect} from 'react-redux'

import {CollectionItemContainer,ImageContainer,ButtonContainer,CollectionFooterContainer,NameContiner,PriceContainer} from './collection-item.styles'


import {addItem} from '../../redux/cart/cart.actions'

const CollectionItem =({item,addItem})=>{
    const {name,price,imageUrl}=item
    return(
        <CollectionItemContainer>
        <ImageContainer
        style={{
            backgroundImage:`url(${imageUrl})`
        }}
        />
        <CollectionFooterContainer>
        <NameContiner>{name}</NameContiner>
        <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <ButtonContainer inverted onClick={()=>addItem(item)}>ADD to cart</ButtonContainer>
    </CollectionItemContainer>
    )
    
}

const mapDispatchToProps =(dispatch)=>({
    addItem:(item)=> dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem)