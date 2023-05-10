export default {
  name: 'navbarItems',
  type: 'document',
  title: 'Items del navbar',
  fields: [
    {
      title: 'Titulos del Navbar',
      name: 'navbarTitles',
      type: 'string',
      readOnly: true,
      hidden: true,
    },
    {
      title: 'Items del navbar',
      name: 'navbarItems',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navbarItem',
          fields: [
            {
              title: 'Titulo',
              name: 'title',
              type: 'string',
            },
            {
              title: 'Link',
              name: 'link',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
