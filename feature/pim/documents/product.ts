import {Content, SchemaInputProps} from '../../../schemaTypes/types'
import {Price} from '../objects/price'

export class Product extends Content {
  name = 'product'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Product',
      name: 'product',
      type: 'document',
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
          title: 'Is Configurable Product?',
          name: 'isConfigurable',
          type: 'boolean',
        },
        {
          title: 'Brand Name',
          name: 'brandName',
          type: 'string',
        },
        {
          title: 'Brand Info',
          name: 'brandInfo',
          type: 'string',
        },
        {
          title: 'Thumbnails',
          name: 'thumbnail',
          type: 'array',
          of: [{type: 'image'}],
          hidden: ({parent}: any) => parent?.isConfigurable,
        },
        {
          title: 'Images',
          name: 'images',
          type: 'array',
          of: [{type: 'image'}],
          hidden: ({parent}: any) => parent?.isConfigurable,
        },
        {
          title: 'Configurable Options',
          name: 'configurableOptions',
          type: 'array',
          hidden: ({parent}: any) => !parent?.isConfigurable,
          of: [{type: 'configOption'}],
        },
        {
          name: 'price',
          type: 'price',
          hidden: ({parent}: any) => parent?.isConfigurable,
        },
        {
          name: 'reviews',
          type: 'array',
          of: [{type: 'review'}],
          hidden: ({parent}: any) => parent?.isConfigurable,
        },
        {
          title: 'Variants',
          name: 'variants',
          type: 'array',
          of: [{type: 'productVariant'}],
          hidden: ({parent}: any) => !parent?.isConfigurable,
        },
      ],
    }
  }
}
