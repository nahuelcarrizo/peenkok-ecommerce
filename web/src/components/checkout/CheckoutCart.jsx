import React, { useState } from 'react';
import { useIsomorphicLayoutEffect } from '../../hooks/isomorphicEffect';
import { DeliveryTime, ShippingMethod, Total, TotalPrice, CartContainer, Summary, Inner, Products, Item, ItemView, ItemQty, ItemPrice, ItemName, ItemInfo, ImageContent, Image } from './Checkout.styles';
import { useStateContext } from '../../context/StateContext';


const CheckoutCart = () => {
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove, showCart } = useStateContext();


    return (
        <CartContainer>
            <Summary>
                <Inner>
                    <Products>
                        {cartItems.map((item) => (
                            <Item>
                                <ItemView className="product" key={item._id}>
                                    <ImageContent>
                                        <Image image={item.images[0]} />
                                    </ImageContent>
                                    <ItemInfo >
                                        <ItemName>{item.name}</ItemName>
                                        <ItemQty>Qty: {item.quantity}</ItemQty>
                                        <ItemPrice>
                                            <span>
                                                $ {item.price}
                                            </span>
                                        </ItemPrice>
                                    </ItemInfo>
                                </ItemView>
                            </Item>
                        ))}
                    </Products>
                </Inner>
                <DeliveryTime >
                    <span>Delivery Time </span>
                    <span>2-3 days</span>
                </DeliveryTime>
                <TotalPrice >
                    <ShippingMethod>
                        <h3 style={{paddingBottom: '.8rem'}}>Shipping:</h3>
                        <h3 >FREE</h3>
                    </ShippingMethod>
                    <Total>
                        <h3 >TOTAL:</h3>
                        <h3  >$ {totalPrice}</h3>
                    </Total>
                </TotalPrice>
            </Summary>
        </CartContainer >
    );
}

export default CheckoutCart;