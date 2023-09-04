import React, { useState } from 'react'

import ScrolleableContent from './scrolleableContent'
import SectionHeader from './header'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useIsomorphicLayoutEffect } from '../../../hooks/isomorphicEffect'

const Container = styled.div`
  position: relative;
  width: 150vw;
  height: 100%;
  z-index: 10;
  background-color: white;
`
interface ScrolleableContentProps {
  id: string
  url: string
  asset: any // Reemplaza 'any' con el tipo real para la propiedad 'asset'
  image: any // Reemplaza 'any' con el tipo real para la propiedad 'image'
  key: string
}

interface SliderProps {
  data: {
    media: ScrolleableContentProps[]
    text: string // Reemplaza 'string' con el tipo real para la propiedad 'text'
  }
}

function Slider({ data }: any) {
  const [items, setItems] = useState<ScrolleableContentProps[]>([])
  const [title, setTitle] = useState<string>('')

  useIsomorphicLayoutEffect(() => {
    if (!data) {
      return
    }

    const prods = data.collection ? data.collection.products : []
    const name = data.collection ? data.collection.name : ''

    setItems(prods)
    setTitle(name)
  }, [data])

  return (
    <div>
      <Container>
        <ScrolleableContent items={items} title={title} />
      </Container>
    </div>
  )
}

export default Slider
