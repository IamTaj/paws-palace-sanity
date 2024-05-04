import {Content, SchemaInputProps} from '../../../schemaTypes/types'

export class ProductVariant extends Content {
  name = 'productVariant'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Variant',
      name: 'productVariant',
      type: 'object',
      fields: [
        {
          title: 'SKU',
          name: 'sku',
          type: 'string',
        },
        {
          title: 'Name',
          name: 'name',
          type: 'string',
        },
        {
          title: 'Thumbnails',
          name: 'thumbnail',
          type: 'array',
          of: [{type: 'image'}],
        },
        {
          title: 'Images',
          name: 'images',
          type: 'array',
          of: [{type: 'image'}],
        },

        {
          name: 'price',
          type: 'price',
        },
        {
          name: 'reviews',
          type: 'array',
          of: [{type: 'review'}],
        },
      ],
    }
  }
}
