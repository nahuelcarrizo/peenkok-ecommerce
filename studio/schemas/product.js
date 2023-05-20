export default {
  name: 'product',
  type: 'document',
  title: 'Productos',
  fields: [
    {
      title: 'Nombre',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Precio',
      name: 'price',
      type: 'number',
    },
    {
      title: 'Información',
      name: 'info',
      type: 'object',
      fields: [
        {
          title: 'Colección',
          name: 'collection',
          type: 'reference',
          to: [{type: 'collection'}],
        },
        {
          title: 'Descripción',
          name: 'description',
          type: 'string',
        },
        {
          title: 'Composición',
          name: 'composition',
          type: 'string',
        },
        {
          title: 'Cuidado',
          name: 'care',
          type: 'string',
        },
      ],
    },
    {
      title: 'Imágenes',
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            metadata: ['lqip'],
          },
        },
      ],
    },
    {
      title: 'Stock x talle',
      name: 'sizeChart',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'size',
              type: 'string',
              title: 'Talle',
              options: {
                list: [
                  {title: 'XS', value: 'XS'},
                  {title: 'S', value: 'S'},
                  {title: 'M', value: 'M'},
                  {title: 'L', value: 'L'},
                  {title: 'XL', value: 'XL'},
                  {title: 'XXL', value: 'XXL'},
                  {title: 'XXXL', value: 'XXXL'},
                ],
              },
            },
            {name: 'stock', type: 'number', title: 'Stock'},
          ],
        },
      ],
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200, // Opcional: puedes establecer la longitud máxima del slug
      },
    },
  ],
}
