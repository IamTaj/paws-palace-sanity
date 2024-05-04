import { FeatureSchemaDefinition } from '../../schemaTypes/types'
import {Product} from './documents/product'
import {ConfigOption} from './objects/config-option'
import {Price} from './objects/price'
import {ProductVariant} from './objects/product-variant'
import {Review} from './objects/review'

export const pim: FeatureSchemaDefinition = {
  schemas: [Product, ProductVariant, Price, Review, ConfigOption],
}
