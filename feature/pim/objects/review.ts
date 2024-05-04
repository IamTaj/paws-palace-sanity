import {Content, SchemaInputProps} from '../../../schemaTypes/types'

export class Review extends Content {
  name = 'review'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Review',
      name: 'review',
      type: 'object',
      fields: [
        {title: 'Rating', name: 'rating', type: 'number'},
        {title: 'Comment', name: 'comment', type: 'string'},
      ],
    }
  }
}
