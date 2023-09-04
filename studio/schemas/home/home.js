export default {
  name: 'homeSettings',
  type: 'document',
  title: 'Secciones home',
  fields: [
    {
      title: 'Título de la página',
      name: 'homePageTitle',
      type: 'string',
      readOnly: true,
      hidden: true,
    },
    {
      title: 'Hero Video',
      name: 'heroVideo',
      type: 'file',
      options: {
        accept: 'video/mp4',
      },
    },
    {
      title: 'Hero Images',
      name: 'heroImages',
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
      title: 'Coleccion 1',
      name: 'collection1',
      type: 'reference',
      to: [{type: 'collection'}],
    },
    {
      title: 'Seccion stories Video',
      name: 'storiesVideo',
      type: 'file',
      options: {
        accept: 'video/mp4',
      },
    },
    {
      title: 'Coleccion 2',
      name: 'collection2',
      type: 'reference',
      to: [{type: 'collection'}],
    },
    {
      title: 'Seccion valores',
      name: 'about',
      type: 'object',
      fields: [
        {
          title: 'Texto',
          name: 'text',
          type: 'string',
        },
        {
          title: 'Valores media',
          name: 'video',
          type: 'file',
          options: {
            accept: 'video/mp4',
          },
        },
      ],
    },
    {
      title: 'Suscripción',
      name: 'suscribe',
      type: 'suscribe',
    },
  ],
  initialValue: () => ({
    homePageTitle: 'Configuración Home',
  }),
}
