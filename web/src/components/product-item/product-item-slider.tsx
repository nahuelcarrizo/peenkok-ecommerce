import { Container } from '../shared/sharedstyles'
import Link from 'next/link'
import React from 'react'
import RemoteFixedSizeImage from '../shared/image-types/remote-fixed-size-image'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useEffect } from 'react'

const ScrollContainer = styled(Container)`
  ${tw`
      inline-block
  relative
  `};
`

const ProdCard = styled.li`
  ${tw`
      flex
      flex-col

      w-full
      h-full
  `};
`

function ProductItemSlider(props) {
  const { product } = props
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    let imagesData

    imagesData = product.map(image => ({
      id: image.asset._id,
      url: image.asset.url,
      asset: image.asset,
      image: image,
    }))

    setItems(imagesData)
  }, [product])
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

  const commonContent = items.map(({ id, url, asset, image }) => (
    <ProdCard>
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
    </ProdCard>
  ))

  return (
    <ScrollContainer>
      <div>
        <ul style={{ display: 'flex', flexDirection: 'row' }}>
          {commonContent}
        </ul>
      </div>
    </ScrollContainer>
  )
}

const ImageLink = styled.a`
  ${tw`
      w-full
      h-full
    `};
  height: 100%;
  width: 100vw;
  border: 1px solid #191919;
`
const StyledImg = styled(RemoteFixedSizeImage)`
  ${tw`
      h-full
      w-full
      object-cover
  `};
`

function Card({ onClick, selected, title, itemId, imageUrl, asset, image }) {
  return (
    <ImageLink>
      <div className="card" style={{ height: '100%' }}>
        <StyledImg
          asset={asset}
          image={image}
          alt={title}
          width={560}
          height={730}
        />
      </div>
    </ImageLink>
  )
}

export default ProductItemSlider
