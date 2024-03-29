import {
  AddToCartButton,
  Buttons,
  Container,
  Content,
  DescriptionContainer,
  Fieldset,
  Form,
  GuideContainer,
  Header1,
  Header3,
  Input,
  Label,
  PlanSelector,
  Price,
  ProdDetails,
  PurchaseFrame,
  PurchaseOptions,
  QuantityVariants,
  Span,
  Title,
  WishButton,
  ErrorMessage
} from './ProdInfo.styles'
import React, { useRef, useState, useMemo } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { IconContext } from 'react-icons'
import Marquee from 'react-fast-marquee'
import { PiHeartStraightLight } from 'react-icons/pi'
import RadioButton from '../../utils/interactive/input/RadioButton'
import SizeGuide from './SizeGuide'
import UseAnimations from 'react-useanimations'
import { gsap } from 'gsap/dist/gsap'
import { useStateContext } from '../../../context/StateContext'

interface ProductItem {
  price: any
  customFields: any
  name: string
  // Add other properties as needed
}
interface ProdInfoProps {
  product: ProductItem
}

const ProdDescription: React.FC<{
  titles: string[]
}> = ({ titles }) => {

  const timeline = useRef(null)

  const LoremIpsum = () => {
    return (
      <div style={{ padding: '1.8vh 0' }}>
        <p style={{ fontSize: '1.2vw', fontFamily: 'Sans Serif' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate
          dui non magna accumsan, nec vulputate purus luctus.
        </p>
      </div>
    )
  }

  const contentRefs: React.RefObject<HTMLDivElement>[] = titles.map(() =>
    useRef(null),
  )

  // Función para abrir o cerrar el contenido
  const toggleContent = (index: number) => {
    const contentRef = contentRefs[index].current

    if (contentRef) {
      const isOpen = contentRef.clientHeight > 0

      // Cerrar todos los contenidos abiertos
      contentRefs.forEach((ref, i) => {
        if (i !== index && ref.current) {
          gsap.to(ref.current, { height: 0, autoAlpha: 0, duration: 0.4 })
        }
      })
      timeline.current = gsap.timeline()
      // Animación GSAP para abrir o cerrar el contenido
      gsap.set('.content', {
        autoAlpha: 0,
      })
      timeline.current
        .to(contentRef, {
          height: isOpen ? 0 : 'auto',
          duration: 0.5,
          ease: ' power1.easeOut',
        })
        .to(
          contentRef,
          {
            autoAlpha: isOpen ? 0 : 1,
            duration: 0.1,
            ease: 'power1.easeOut',
          },
          '<50%',
        )
    }
  }

  return (
    <DescriptionContainer>
      {titles.map((title, index) => (
        <Title key={title}>
          <Header3 className="header" onClick={() => toggleContent(index)}>
            {title.toUpperCase()}
          </Header3>

          <Content
            ref={contentRefs[index]}
            className="content"
            style={{
              overflow: 'hidden',
              height: 0,
            }}
          >
            <LoremIpsum />
          </Content>
        </Title>
      ))}
    </DescriptionContainer>
  )
}

const ProdInfo: React.FC<ProdInfoProps> = ({ product }) => {
  const [item, setItem] = useState<ProductItem>(product)
  const [sizeVisible, setSizeVisible] = useState(false)
  const [playMarquee, setPlayMarquee] = useState(false)
  const [selectedSize, setSelectedSize] = useState(null)
  const { onAdd, setShowCart, qty } = useStateContext();
  const { control, handleSubmit, formState: { errors } } = useForm();

  const validationRules = {
    size: {
      required: 'Size is required',
    },
    // Agrega reglas de validación adicionales para otros campos si es necesario
  };

  const addToBag = (data) => {
  
    onAdd(item, 1);
    setShowCart(true);
  }

  const availableSizes = item?.customFields
    ?.filter(field => field.fieldName === 'Size')
    .map(field => field.textValue)

  const Variant = () => {
    const handleSizeChange = e => {
      setSelectedSize(e.target.value)
    }
    return (
      <Controller
        name="size"
        control={control}
        rules={validationRules.size}
        render={({ field }) => (
          <>
            {availableSizes?.map((size, index) => (
              <div key={index}>
                <Input
                  checked={field.value === size}
                  type="radio"
                  {...field}
                  id={index}
                  value={size}
                  name="index"
                // onChange={handleSizeChange}
                />
                <Label htmlFor={index} className="radio-label">
                  {size.toUpperCase()}
                </Label>

              </div>))}
          </>
        )
        }
      />
    )
  }

  const toggleMarquee = (e) => {
    e.stopPropagation()
    setPlayMarquee(prev => !prev)
  }
  const toggleSizeGuide = () => {
    setSizeVisible(prev => !prev)
  }

  return (
    <Container>
      <Header1>{item && item.name}</Header1>
      <Price>€ {item.price}</Price>
      <Form onSubmit={handleSubmit(addToBag)}>
        <QuantityVariants>
          <Variant />
        </QuantityVariants>
        <PurchaseFrame>
          PURCHASE OPTIONS
          <PurchaseOptions>
            <RadioButton
              planChoice={'planChoice1'}
              text={'One-time purchase'}
            />
            <RadioButton
              planChoice={'planChoice2'}
              text={'Suscribe - 10% off'}
            />
          </PurchaseOptions>
        </PurchaseFrame>
        
        <Buttons style={{cursor: 'pointer'}}>
        <ErrorMessage>{errors.size && <>{errors.size.message}</>}
          </ErrorMessage>
          <AddToCartButton
            onMouseEnter={(e) => toggleMarquee(e)}
            onMouseLeave={(e) => toggleMarquee(e)}
            type='submit'
          >
            <Span
              style={{
                visibility: !playMarquee ? 'visible' : 'hidden',
                position: 'absolute',
              }}
            >
              ADD TO BAG
            </Span>
            <Marquee
              autoFill
              speed={80}
              /* play={playMarquee} */
              style={{
                width: '100%',
                height: '100%',
                visibility: playMarquee ? 'visible' : 'hidden',
              }}
            >
              <Span > ADD TO BAG </Span>
            </Marquee>
          </AddToCartButton>

          <IconContext.Provider value={{ size: '1.9vw' }}>
            <PiHeartStraightLight />
          </IconContext.Provider>
        </Buttons>
      </Form>
      <GuideContainer onClick={() => toggleSizeGuide()}>
        SIZE GUIDE
      </GuideContainer>
      <ProdDescription titles={['Description', 'Shipping', 'Return']} />
      {sizeVisible && <SizeGuide onClickChange={toggleSizeGuide} />}
    </Container>
  )
}

export default ProdInfo
