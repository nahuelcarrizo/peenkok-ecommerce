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
      title: 'Ultimos ingresos',
      name: 'latestIncomes',
      type: 'object',
      fields: [
        {
          title: 'Texto',
          name: 'latestIncomesText',
          type: 'string',
        },
        {
          title: 'Ultimos ingresos fotos',
          name: 'latestIncomesMedia',
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
      ],
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
      title: 'Colecciones',
      name: 'collection',
      type: 'object',
      fields: [
        {
          title: 'Colecciones 1',
          name: 'collections1',
          type: 'object',
          fields: [
            {
              title: 'Nombre de la colección 1',
              name: 'collection1Text',
              type: 'string',
            },
            {
              title: 'Imagenes Colección 1',
              name: 'collection1Media',
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
          ],
        },
        {
          title: 'Colecciones 2',
          name: 'collections2',
          type: 'object',
          fields: [
            {
              title: 'Nombre de la colección 2',
              name: 'collection2Text',
              type: 'string',
            },
            {
              title: 'Imagenes Colección 2',
              name: 'collection2Media',
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
          ],
        },
      ],
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
