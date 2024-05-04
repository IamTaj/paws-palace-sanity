import {IoFolder as Icon} from 'react-icons/io5'
import {Content, SchemaInputProps} from '../../../schemaTypes/types'

export class Category extends Content {
  name = 'category'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Category',
      name: 'category',
      type: 'document',
      icon: Icon,
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
      ],
      preview: {
        select: {
          title: 'title',
        },
      },
    }
  }
}
