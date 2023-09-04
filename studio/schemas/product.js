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
      title: 'Imágenes',
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'image',
          name: 'image',
          options: {
            metadata: ['lqip'],
          },
        },
      ],
    },
    {
      title: 'Atributos',
      name: 'customFields',
      type: 'array',
      of: [{type: 'customField'}],
    },
  ],
}
