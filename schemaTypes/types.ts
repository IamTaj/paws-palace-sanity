import {Schema} from 'sanity'

export type VariantDefinition = {
  value: string
  title: string
}

export type SchemaItem = {
  type: string
}

type PlainSchema = {
  name: string
  type: string
  [key: string]: any
}

class FeatureSchemaProperties {
  items: Partial<SchemaItemsProperties> | undefined
  schemas: Partial<object>[] | undefined
  variants?: VariantSchemaDefinition
}

class SchemaItemsProperties {
  pageItems: SchemaItem[] = []
  connectedStores: VariantDefinition[] = []
  headers: SchemaItem[] = []
  footers: SchemaItem[] = []
  groupItems: SchemaItem[] = []
  customItems: SchemaItem[] = []
}

class VariantSchemaProperties {
  group: VariantDefinition[] = []
  card: VariantDefinition[] = []
  dialog: VariantDefinition[] = []
}

abstract class Content {
  abstract name: string
  abstract getSchema({variants, items}: SchemaInputProps): Schema | any
}

type FeatureSchemaDefinition = Partial<FeatureSchemaProperties>
type VariantSchemaDefinition = Partial<VariantSchemaProperties>
type SchemaInputProps = {
  variants?: VariantSchemaProperties
  items?: SchemaItemsProperties
}

export {SchemaItemsProperties, VariantSchemaProperties, Content}
export type {SchemaInputProps, FeatureSchemaDefinition}
