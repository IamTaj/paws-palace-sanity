import {FeatureSchemaDefinition} from '../../schemaTypes/types'
import {Header} from './documents/header'

export const header: FeatureSchemaDefinition = {
  schemas: [Header],
  variants: {
    header: [
      {
        title: 'Default Header',
        value: 'defaultHeader',
      },
    ],
  },
}
