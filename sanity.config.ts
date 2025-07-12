'use client'

/**
 * This configuration is used for the Sanity Studio mounted at the `/src/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import project from '@/sanity/schemaTypes/project'

import { apiVersion, dataset, projectId } from './src/sanity/env'
import { structure } from './src/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: [project], // Declare schema types here
  },
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
