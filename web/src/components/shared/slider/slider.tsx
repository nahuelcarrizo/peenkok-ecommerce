import 'react-horizontal-scrolling-menu/dist/styles.css'

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import { Container } from '../../shared/sharedstyles'
import Link from 'next/link'
import React from 'react'
import RemoteFixedSizeImage from '../image-types/remote-fixed-size-image'
import Scrollbar from 'smooth-scrollbar'
import SectionHeader from './header'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useEffect } from 'react'

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

      w-full
      h-full
  `};
  padding: 2.7vw;
  background: #fdfbf5;
  border: ${props => (props.hasHeroImages ? 'none' : '1px solid black')};
  /*   padding-right: ${props => (!props.hasHeroImages ? '1rem' : '')}; */
  /*   &:first-child { */
  border-left: none;
  /*   } */
  &:last-child {
    margin-right: ${props => (props.hasHeroImages ? '1rem' : '')};
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
        asset: image.asset,
        image: image,
        key: image.asset._id,
      }))
    } else if (latestIncomes) {
      imagesData = latestIncomes.latestIncomesMedia.map(image => ({
        id: image.asset._id,
        url: image.asset.url,
        asset: image.asset,
        image: image,
        key: image.asset._id,
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
        asset: image.asset,
        image: image,
        key: image.asset._id,
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

  const commonContent = items.map(({ id, url, asset, image, index }) => (
    <ProdCard hasHeroImages={heroImages} key={index}>
      <Card
        itemId={id}
        imageUrl={url}
        asset={asset}
        image={image}
        title={id}
        key={id}
        onClick={handleClick(id)}
        selected={isItemSelected(id)}
      />
      {!heroImages && (
        <ProdCardTitle>
          <Link passHref href={'/'}>
            <p>NSW CLUB T-SHIRT</p>
          </Link>
          <Price>€ 10.00</Price>
        </ProdCardTitle>
      )}
    </ProdCard>
  ))

  return (
    <ScrollContainer>
      {!heroImages && <SectionHeader title={title} />}
      <ScrollMenu transitionBehavior="smooth">
        <ul style={{ display: 'flex', flexDirection: 'row' }}>
          {commonContent}
        </ul>
      </ScrollMenu>
    </ScrollContainer>
  )
}

const ImageLink = styled.a`
  ${tw`
      w-full
      h-full
    `};

  border: 1px solid black;
`
const StyledImg = styled(RemoteFixedSizeImage)`
  ${tw`
      object-cover
  `};
  height: 30vw;
  width: 29vw;
`

function Card({ onClick, selected, title, itemId, imageUrl, asset, image }) {
  const visibility = React.useContext(VisibilityContext)
  return (
    <ImageLink onClick={() => onClick(visibility)} tabIndex={0}>
      <div className="card" style={{ height: '100%' }}>
        <StyledImg asset={asset} image={image} alt={title} />
      </div>
    </ImageLink>
  )
}

export default Slider
