import { Container, Gallery, ProductsContainer } from './ProductList.styles'
import React, { useState } from 'react'

import Filter from './filter/Filter'
import Product from '../shared/product/Product'
import Search from './Search'
import { useIsomorphicLayoutEffect } from '../../hooks/isomorphicEffect'

const filters = {
  Price: {
    name: 'Price',
    options: ['0-10', '10-20'],
  },
  All: {
    name: 'All',
  },
}

const ProductList = ({ products }) => {
  const [category, setCategoryFilter] = useState(filters.All)
  const [option, setOptionFilter] = useState()

  const onFilterChange = (category, option) => {
    setCategoryFilter(category)
    setOptionFilter(option)
  }

  const mapCustomFields = x => {
    // Mapeo de los customFields para cada producto
    const customFields = x.customFields.map(field => ({
      name: x.customFields.fieldName,
      value:
        field.fieldType === 'string'
          ? field.textValue
          : field.fieldType === 'number'
          ? field.numberValue
          : field.fieldType === 'boolean'
          ? field.booleanValue
          : field.fieldType === 'text'
          ? field.campValue
          : null,
    }))
  }

  /*   const getFilterFunction = () => {
    if (category === filters.All) {
      return x => x
    } else if (category == filters.Price.name) {
      if (option === '0-10') {
        // Devuelve aquellos productos con precio entre 0 y 20 (inclusive)

        return x => x.price >= 0 && x.price <= 10
      } else if (option === '10-20') {
        // Devuelve aquellos productos con precio entre 20 y 1000 (inclusive)
        return x => x.price >= 10 && x.price <= 20
      } else {
        // Si no se seleccionó ninguna opción, devuelve todos los productos sin filtrar
        return x => x
      }
    } else {
      return x => x
    }
  } */

  return (
    <Container>
      <Filter filterAndSet={onFilterChange} />
      <Gallery>
        <Search />
        <ProductsContainer>
          {products
            /*   .filter(getFilterFunction()) */
            .map(({ _id, images, name, price, index }) => (
              <Product
                key={index}
                images={images}
                name={name}
                price={price}
                id={_id}
              />
            ))}
        </ProductsContainer>
      </Gallery>
    </Container>
  )
}

export default ProductList
