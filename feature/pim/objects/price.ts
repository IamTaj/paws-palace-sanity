import {Content, SchemaInputProps} from '../../../schemaTypes/types'

export class Price extends Content {
  name: 'price'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'price',
      title: 'Price',
      type: 'object',
      fields: [
        this.getRegularPriceSchema({name: 'regularPrice', title: 'Regular Price'}),
        this.getFinalPriceSchema({name: 'finalPrice', title: 'Final Price'}),
        this.getDiscountSchema({name: 'discount', title: 'Discount'}),
      ],
    }
  }
  getRegularPriceSchema({
    title = 'Regular Price',
    name = 'regularPrice',
  }: {
    title?: string
    name?: string
  }) {
    return {
      name: `${name}`,
      type: 'object',
      title: `${title}`,
      fields: [
        {
          name: 'value',
          title: 'value',
          type: 'number',
        },
        {
          name: 'currency',
          title: 'Currency',
          type: 'string',
        },
      ],
    }
  }
  getFinalPriceSchema({title = 'Final Price', name = 'finalPrice'}: {title: string; name: string}) {
    return {
      name: `${name}`,
      type: 'object',
      title: `${title}`,
      fields: [
        {
          name: 'value',
          title: 'value',
          type: 'number',
        },
      ],
    }
  }
  getDiscountSchema({title = 'Discount', name = 'discount'}: {title: string; name: string}) {
    return {
      name: `${name}`,
      type: 'object',
      title: `${title}`,
      fields: [
        {
          name: 'percent',
          title: 'Percent',
          type: 'number',
        },
      ],
    }
  }
}
