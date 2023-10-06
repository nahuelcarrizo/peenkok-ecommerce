import React ,{  useRef } from 'react'
import { Container, Content, Title, CloseButton, ItemsContainer, HeaderBag, CartFader, Image } from './cart.styles'
import { gsap } from 'gsap/dist/gsap'
import { useIsomorphicLayoutEffect } from '../../../hooks/isomorphicEffect'
import { useStateContext } from '../../../context/StateContext'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

const Cart: React.FC = () => {
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove, showCart } = useStateContext();
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
          <ItemsContainer>
            {cartItems.length < 1 && 
            <p style={{ marginTop: '4vh', fontFamily: 'Circular Std Medium' }}>
            Your bag is empty
            </p>
            }
            {cartItems >= 1 && cartItems.map((item) => (
              <div className="product" key={item._id}>
                Hola
              <Image
              asset={item?.image.asset[0]}
              image={item.image}
              width={760}
              height={860}
              alt={'image'}
              />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>${item.price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                  <p className="quantity-desc">
                    <span className="minus" onClick={() => toggleCartItemQuanitity(item._id, 'dec') }>
                    <AiOutlineMinus />
                    </span>
                    <span className="num" >{item.quantity}</span>
                    <span className="plus" onClick={() => toggleCartItemQuanitity(item._id, 'inc') }><AiOutlinePlus /></span>
                  </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
              </div>
            ))}   
          </ItemsContainer>
        </Content>
      </Container>
    </>
  )
}

export default Cart
