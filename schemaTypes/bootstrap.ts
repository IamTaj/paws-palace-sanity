import {flatMap, chain} from 'lodash'
import {
  Content,
  FeatureSchemaDefinition,
  SchemaItemsProperties,
  VariantSchemaProperties,
} from './types'

export function bootstrap(features: any) {
  const variants = extractVariants(features)
  const schemaItems: SchemaItemsProperties = extractSchemaItems(features)
  const schemas = flatMap(features, (f) => getSchemas(f.schemas, variants, schemaItems))
  let finalSchemas = [...schemas]
  return [...finalSchemas]
}

function getSchemas(
  features: any[],
  variants: VariantSchemaProperties,
  items: SchemaItemsProperties,
) {
  const schemaBuilderMap = new Map()
  features?.forEach((schema: any, index) => {
    if (schema.getSchema) {
      schemaBuilderMap.set(schema.name, schema.getSchema({variants: variants, items: items}))
    } else {
      const obj: Content = new schema()
      schemaBuilderMap.set(obj.name, obj.getSchema({variants: variants, items: items}))
    }
  })
  return [...schemaBuilderMap.values()]
}

function extractVariants(features: FeatureSchemaDefinition[]) {
  const variantDefKeys = Object.keys(new VariantSchemaProperties())
  return variantDefKeys.reduce(
    (obj: any, key) => {
      obj[key] = extractItems(features, (x) => (x.variants ?? {})[key])
      return obj
    },
    <VariantSchemaProperties>{},
  )
}

function extractSchemaItems(features: FeatureSchemaDefinition[]) {
  const schemaItemDefKeys = Object.keys(new SchemaItemsProperties())
  return schemaItemDefKeys.reduce(
    (allFeatures: any, property) => {
      allFeatures[property] = extractItems(features, (x) => x?.items?.[property])
      return allFeatures
    },
    <SchemaItemsProperties>{},
  )
}

function extractItems<T, U>(items: T[], iterator: (T: any) => U[]) {
  return chain(items)
    .flatMap(iterator)
    .filter((x) => !!x)
    .value()
}
