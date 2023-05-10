export default {
  title: 'Suscripción',
  name: 'suscribe',
  type: 'document',
  fields: [
    {
      title: 'Suscripción media',
      type: 'image',
      name: 'image',
      options: {
        metadata: ['lqip'],
      },
    },
    {
      title: 'Texto',
      type: 'string',
      name: 'text',
    },
  ],
}
