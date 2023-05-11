import 'react-horizontal-scrolling-menu/dist/styles.css'

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import { Container } from '../../shared/sharedstyles'
import React from 'react'
import SectionHeader from './header'
import styled from 'styled-components'
import tw from 'twin.macro'

const ScrollContainer = styled(Container)`
  ${tw`
      inline-block
  relative
  `};
`

const ProdCardTitle = styled.div`
  ${tw`
      flex
      flex-col
      pt-3
      [font-family: 'Circular Std Black']
      [font-size: 1.2rem]
  `}
  letter-spacing: -.5px;
`
const Price = styled.span`
  font-family: 'Circular Std Book Italic';
`
interface ProdCardProps {
  hasHeroImages?: boolean
}

const ProdCard = styled.li<ProdCardProps>`
  ${tw`
      flex
      flex-col
      pl-4
      pt-4
      pb-4
      w-full
      h-full
  `};

  background: #fdfbf5;
  border: ${props => (props.hasHeroImages ? 'none' : '1px solid black')};
  padding-right: ${props => (props.hasHeroImages ? '0' : '1rem')};
  &:first-child {
    border-left: none;
  }
`

function Slider(props) {
  const { heroImages, latestIncomes, collection } = props
  const [items, setItems] = React.useState([])
  const [title, setTitle] = React.useState('')

  React.useEffect(() => {
    let imagesData
    let titleData

    if (heroImages) {
      imagesData = heroImages.map(image => ({
        id: image.asset._id,
        url: image.asset.url,
      }))
    } else if (latestIncomes) {
      imagesData = latestIncomes.latestIncomesMedia.map(image => ({
        id: image.asset._id,
        url: image.asset.url,
      }))
      titleData = latestIncomes.latestIncomesText
    } else if (collection) {
      const collectionMedia = collection.collection1Media
        ? collection.collection1Media
        : collection.collection2Media
        ? collection.collection2Media
        : []

      const collectionText = collection.collection1Text
        ? collection.collection1Text
        : collection.collection2Text
        ? collection.collection2Text
        : ''

      imagesData = collectionMedia.map(image => ({
        id: image.asset._id,
        url: image.asset.url,
      }))
      titleData = collectionText // Actualizar titleData aquí
    }

    setItems(imagesData)
    setTitle(titleData)
  }, [heroImages, latestIncomes, collection])
  const [selected, setSelected] = React.useState([])
  const [position, setPosition] = React.useState(0)

  const isItemSelected = id => !!selected.find(el => el === id)

  const handleClick =
    id =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id)

      setSelected(currentSelected =>
        itemSelected
          ? currentSelected.filter(el => el !== id)
          : currentSelected.concat(id),
      )
    }

  const commonContent = items.map(({ id, url }) => (
    <ProdCard hasHeroImages={heroImages} style={{ touchAction: 'pan-x' }}>
      <Card
        itemId={id}
        imageUrl={url}
        title={id}
        key={id}
        onClick={handleClick(id)}
        selected={isItemSelected(id)}
      />
      {!heroImages && (
        <ProdCardTitle>
          <a href="/">NSW CLUB T-SHIRT</a>
          <Price>€ 10.00</Price>
        </ProdCardTitle>
      )}
    </ProdCard>
  ))

  return (
    <ScrollContainer>
      {!heroImages && <SectionHeader title={title} />}
      <ScrollMenu transitionBehavior="smooth">{commonContent}</ScrollMenu>
    </ScrollContainer>
  )
}

const ImageLink = styled.a`
  ${tw`
      w-full
      h-full
    `};
  height: 18.3rem;
  width: 16.9rem;
  border: 1px solid black;
`
const StyledImg = styled.img`
  ${tw`
      h-full
      w-full
      object-cover
  `};
`

function Card({ onClick, selected, title, itemId, imageUrl }) {
  const visibility = React.useContext(VisibilityContext)
  return (
    <ImageLink onClick={() => onClick(visibility)} tabIndex={0}>
      <div className="card" style={{ height: '100%' }}>
        <StyledImg src={imageUrl} alt={title} />
      </div>
    </ImageLink>
  )
}

export default Slider