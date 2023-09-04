import { Container, Gallery, ProductsContainer } from './ProductList.styles'
import React, { useEffect, useRef, useState } from 'react'

import Filter from './filter/Filter'
import { Order } from '../../model/filters/order'
import Product from '../shared/product/Product'
import Search from './Search'
import { useIsomorphicLayoutEffect } from '../../hooks/isomorphicEffect'

const ProductList = ({ products }) => {
  const allCustomFieldsRef = useRef([])
  const [allFilters, setallFilters] = useState({})
  const [filter, setFilter] = useState({})
  const [expandedCategory, setExpandedCategory] = useState(null)
  const [sort, setSort] = useState(Order.DESC)

  const onFilterChange = value => {
    setFilter(value)
  }
  const onSortChange = (nextSort: Order) => {
    setSort(nextSort)
  }

  const getFilterFunction = x => {
    if (!filter || Object.keys(filter).length === 0) {
      return true
    }
    const customField = x.customFields.find(field => field.textValue === filter)
    if (!customField) {
      return false
    }
    return true
  }
  const getSortFunction = () => {
    if (sort === Order.ASC) return (a, b) => a.price - b.price
    return (a, b) => b.price - a.price
  }

  useIsomorphicLayoutEffect(() => {
    const customFieldsArray = products.flatMap(product => product.customFields)
    allCustomFieldsRef.current = customFieldsArray
  }, [products])

  useIsomorphicLayoutEffect(() => {
    const uniqueFields = allCustomFieldsRef.current.reduce((result, field) => {
      if (field) {
        const { fieldName, fieldType, ...rest } = field
        if (!result[fieldName]) {
          result[fieldName] = {
            values: [],
            fieldType: fieldType,
          }
        }
        let value
        switch (fieldType) {
          case 'string':
            value = rest.textValue
            break
          case 'number':
            value = rest.numberValue
            break
          case 'boolean':
            value = rest.booleanValue
            break
          default:
            value = null
            break
        }
        result[fieldName].values.push(value)
      }
      return result
    }, {})
    setallFilters(uniqueFields)
  }, [allCustomFieldsRef])

  const count = products.filter(x => getFilterFunction(x)).length

  return (
    <Container>
      <Filter
        filters={allFilters}
        filterSet={onFilterChange}
        expandedCategory={expandedCategory}
        setExpandedCategory={setExpandedCategory}
      />
      <Gallery>
        <Search count={count} orderProducts={onSortChange} />
        <ProductsContainer>
          {products
            .filter(x => getFilterFunction(x))
            .sort(getSortFunction())
            .map(({ _id, images, name, price, index }) => (
              <Product
                key={_id}
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
