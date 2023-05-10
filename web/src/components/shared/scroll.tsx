import 'react-horizontal-scrolling-menu/dist/styles.css'

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import { Container } from './sharedstyles'
import Header from './slider/header'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const ScrollContainer = styled(Container)`
  ${tw`
      inline-block
      border-b 
`};
`

const StyledMenu = styled(ScrollMenu)`
  .react-horizontal-scrolling-menu--wrapper {
    height: 100%;
  }
`

function Scroll({ latestIncomes, collection }) {
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    const images = latestIncomes?.images ?? collection?.images ?? []
    setItems(
      images.map(image => ({
        id: image.asset._id,
        url: image.asset.url,
      })),
    )
  }, [latestIncomes, collection])

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

  return (
    <ScrollContainer>
      <StyledMenu
        transitionBehavior="smooth"
        Header={latestIncomes ? undefined : Header}
        Footer={latestIncomes ? Header : undefined}
      >
        {items.map(({ id, url }) => (
          <Card
            itemId={id}
            imageUrl={url} // NOTE: itemId is required for track items
            title={id}
            key={id}
            onClick={handleClick(id)}
            selected={isItemSelected(id)}
          />
        ))}
      </StyledMenu>
    </ScrollContainer>
  )
}

function Card({ onClick, selected, title, itemId, imageUrl }) {
  const visibility = React.useContext(VisibilityContext)
  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: '160px',
      }}
      tabIndex={0}
    >
      <div className="card">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  )
}

export default Scroll
