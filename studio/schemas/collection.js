import {BsArchive} from 'react-icons/bs'

export default {
  name: 'collection',
  icon: BsArchive,
  type: 'document',
  title: 'Colleciones',
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
  ],
}