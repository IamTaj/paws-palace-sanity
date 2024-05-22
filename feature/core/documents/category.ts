import {IoDocumentText as Icon, IoApps, IoSearch, IoSettings} from 'react-icons/io5'
import {Rule} from 'sanity'
import {getSanityClient} from '../../../utils/shared-utils'
import {Content, SchemaInputProps} from '../../../schemaTypes/types'

export class Category extends Content {
  name = 'category'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Category',
      name: 'category',
      type: 'document',
      icon: Icon,
      groups: [
        {name: 'main', title: 'Main', icon: IoApps},
        {name: 'seo', title: 'SEO', icon: IoSearch},
        {name: 'configuration', title: 'Configuration', icon: IoSettings},
      ],
      initialValue: {
        variant: 'page',
        itemsRepresentation: 'list',
      },
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
          validation: (Rule: Rule) => Rule.required(),
          group: 'main',
        },
        {
          name: 'category',
          title: 'Category',
          type: 'array',
          of: [
            {
              name: 'subCategory',
              title: 'Sub Category',
              type: 'object',
              fields: [
                {
                  name: 'subTitle',
                  title: 'Sub Title',
                  type: 'string',
                },
                {
                  name: 'subCategoryItems',
                  title: 'Sub Category Items',
                  type: 'array',
                  of: [{type: 'string'}],
                },
              ],
            },
          ],
        },
      ],
      preview: {
        select: {
          title: 'title',
          items: 'items',
          path: 'path',
        },
        prepare({title, items, path}: any) {
          const itemCount = items ? items.length : 0
          const itemsDisplay = itemCount === 1 ? 'Only 1 item' : `${itemCount} items`

          return {
            title,
            subtitle: `${itemsDisplay}, ${path ?? ''}`,
          }
        },
      },
    }
  }
}
