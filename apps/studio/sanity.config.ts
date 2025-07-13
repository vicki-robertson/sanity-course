import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { structure } from './structure'
import { defaultDocumentNode } from './structure/defaultDocumentNode'

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET

if (!projectId || !dataset) {
  throw new Error('Missing SANITY_PROJECT_ID or SANITY_DATASET environment variables')
}

export default defineConfig({
  name: 'default',
  title: 'Day One Content Operations',

  projectId,
  dataset,

  plugins: [structureTool({ structure, defaultDocumentNode }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
