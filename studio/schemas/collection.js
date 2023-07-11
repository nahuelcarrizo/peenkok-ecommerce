import {BsArchive} from 'react-icons/bs'

export default {
  name: 'collection',
  icon: BsArchive,
  type: 'document',
  title: 'Colecciones',
  fields: [
    {
      title: 'Nombre',
      name: 'name',
      type: 'string',
    },
    {
      title: 'URL',
      name: 'searchName',
      type: 'string',
    },
    {
      title: 'Descripción',
      name: 'description',
      type: 'string',
      layout: 'box',
    },
    {
      title: 'Productos',
      name: 'products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'product'}],
        },
      ],
    },
  ],
}
