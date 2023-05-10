import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'péenkok-webapp',

  projectId: 'vvhlk67r',
  dataset: 'development',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
