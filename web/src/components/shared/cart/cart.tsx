import React, { useRef } from 'react'
import { Container, Content, Title, CloseButton, ItemsContainer, HeaderBag, CheckOut, CartFader, Image, ItemView, StyledLink, ItemInfo, ItemName, ItemPrice, ItemButtons, ItemQty, ItemCustomfield, TrashButton, PayButton, SubTotalNum, Button, SubTotal } from './cart.styles'
import { gsap } from 'gsap/dist/gsap'
import { useIsomorphicLayoutEffect } from '../../../hooks/isomorphicEffect'
import { useStateContext } from '../../../context/StateContext'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { BiTrash } from 'react-icons/bi'
import { IconContext } from 'react-icons'


const Cart: React.FC = () => {
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove, showCart } = useStateContext();
  const timeline = useRef<gsap.core.Timeline | null>(null)
  const container = useRef<HTMLDivElement | null>(null)
  const fader = useRef<HTMLDivElement | null>(null)
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      timeline.current = gsap.timeline({ paused: true })

      timeline.current
        .from(container.current, {
          duration: 0.55,
          xPercent: 100,
          ease: 'power3.inOut',
        })
        .to(
          fader.current,
          {
            autoAlpha: 0.48,
            duration: 0.55,
            ease: 'power3.inOut',
          },
          '<',
        )
    })
    return () => ctx.revert()
  }, [])

  useIsomorphicLayoutEffect(() => {
    showCart ? timeline.current?.play() : timeline.current?.reverse()
  }, [showCart])

  useIsomorphicLayoutEffect(() => {
    const cartEl = container.current
    const handleScroll = (event) => {
      event.stopPropagation()
      cartEl.scrollTop += event.deltaY;
    };

    cartEl.addEventListener('wheel', handleScroll);

    return () => {
      cartEl.removeEventListener('wheel', handleScroll);
    }
  }, [])

  // const handleCheckout = async () => {
  //   const stripe = await getStripe();

  //   const response = await fetch('/api/stripe', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(cartItems),
  //   });

  //   if(response.statusCode === 500) return;
    
  //   const data = await response.json();


  //   stripe.redirectToCheckout({ sessionId: data.id });
  // }



  return (
    <>
      <CartFader
        ref={fader}
        onClick={() => setShowCart((prev: any) => !prev)}
      />
      <Container ref={container}>
        <Content>
          <HeaderBag>
            <Title>YOUR BAG</Title>
            <CloseButton onClick={() => setShowCart((prev: any) => !prev)}>
              CLOSE
            </CloseButton>
          </HeaderBag>

          {cartItems.length < 1 &&
            <p style={{ marginTop: '4vh', fontFamily: 'Circular Std Medium' }}>
              Your bag is empty
            </p>
          }
          <ItemsContainer>
            {cartItems.length >= 1 && cartItems.map((item) => (
              <ItemView className="product" key={item._id}>
                <StyledLink href={`/products/${item.slug.current}`}>
                  <Image image={item.images[0]} />
                </StyledLink>
                <ItemInfo >
                  <ItemName>{item.name}</ItemName>
                  <ItemCustomfield><span style={{ fontFamily: 'Circular Std Book' }}>
                    {item.customFields[0].fieldName}:
                  </span >  {item.customFields[0].textValue}</ItemCustomfield>
                  <ItemPrice>${item.price}</ItemPrice>
                </ItemInfo>
                <ItemButtons>
                  <TrashButton
                    type="button"
                    onClick={() => onRemove(item)}
                  ><IconContext.Provider value={{ size: '1.2vw' }}>
                      <BiTrash />
                    </IconContext.Provider>

                  </TrashButton>
                  <ItemQty>
                    <button style={{ cursor: 'pointer' }} onClick={() => toggleCartItemQuantity(item._id, 'dec')}>
                      <AiOutlineMinus />
                    </button>
                    <span>
                      {item.quantity}
                    </span>
                    <button style={{ cursor: 'pointer' }} onClick={() => toggleCartItemQuantity(item._id, 'inc')}>
                      <AiOutlinePlus />
                    </button>
                  </ItemQty>
                </ItemButtons>
              </ItemView>
            ))}
          </ItemsContainer>
          {cartItems.length >= 1 && (
            <CheckOut >
              <SubTotal >
                <h3 style={{ paddingLeft: '0.3vw' }}>SUBTOTAL:</h3>
                <h3 style={{ paddingRight: '0.3vw' }} >$ {totalPrice}</h3>
              </SubTotal>
              <PayButton >
                <Button type="button" href={'/checkout'}>
                  PROCEED TO CHECKOUT
                </Button>
              </PayButton>
            </CheckOut>
          )}

        </Content>
      </Container>
    </>
  )
}

export default Cart
