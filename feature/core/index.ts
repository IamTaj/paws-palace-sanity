import { FeatureSchemaDefinition } from '../../schemaTypes/types'
import {Category} from './documents/category'
import {Page} from './documents/page'
import { Card } from './objects/cards'
import {Group} from './objects/group'

export const core: FeatureSchemaDefinition = {
  schemas: [Page, Category, Card, Group],
  items: {
    pageItems: [
      {
        type: 'card',
      },
      {
        type: 'group',
      },
    ],
  },
}
