import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { Category, Container, FilterTitle, Filters } from './Filter.styles'

import React from 'react'

interface FilterProps {
  filters: Record<string, { values: string[] }>;
  filterSet: (value: any) => void;
  expandedCategory: any;
  setExpandedCategory: (category: any) => void;
}

const Filter: React.FC<FilterProps> = ({
  filters,
  filterSet,
  expandedCategory,
  setExpandedCategory,
}) => {
  const toggleCategory = category => {
    setExpandedCategory(prevCategory =>
      prevCategory === category ? null : category,
    )
  }

  return (
    <Container>
      FILTER BY
      {Object.entries(filters).map(([category, values]) => (
        <Filters key={category}>
          <Category onClick={() => toggleCategory(category)}>
            <p>{category}</p>
            {expandedCategory === category ? (
              <BsChevronUp />
            ) : (
              <BsChevronDown />
            )}
          </Category>
          {expandedCategory === category &&
            values.values
              .filter((value, index, self) => self.indexOf(value) === index)
              .map((value, index) => (
                <FilterTitle key={index} onClick={() => filterSet(value)}>
                  {value}
                </FilterTitle>
              ))}
        </Filters>
      ))}
    </Container>
  )
}

export default Filter
