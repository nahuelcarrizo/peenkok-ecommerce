export default {
  name: 'customField',
  type: 'object',
  title: 'Campo Adicional',
  fields: [
    {
      title: 'Nombre del Campo',
      name: 'fieldName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Tipo de Dato',
      name: 'fieldType',
      type: 'string',
      options: {
        list: [
          {title: 'Texto', value: 'string'},
          {title: 'Número', value: 'number'},
          {title: 'Fecha', value: 'date'},
          {title: 'Booleano', value: 'boolean'},
          {title: 'Campo', value: 'text'},
          // Agrega otros tipos de datos disponibles según tus necesidades
        ],
      },
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'Valor de Texto',
      name: 'textValue',
      type: 'string',
      hidden: ({parent}) => parent && parent.fieldType !== 'string',
    },
    {
      title: 'Valor de Número',
      name: 'numberValue',
      type: 'number',
      hidden: ({parent}) => parent && parent.fieldType !== 'number',
    },
    {
      title: 'Valor de Booleano',
      name: 'booleanValue',
      type: 'boolean',
      hidden: ({parent}) => parent && parent.fieldType !== 'boolean',
    },
    {
      title: 'Valor de Campo',
      name: 'campValue',
      type: 'text',
      hidden: ({parent}) => parent && parent.fieldType !== 'text',
    },
    {
      title: 'Requiere Stock',
      name: 'requiresStock',
      type: 'boolean',
    },
    {
      title: 'Stock',
      name: 'stock',
      type: 'number',
      hidden: ({parent}) => !parent || !parent.requiresStock,
    },
  ],
}
