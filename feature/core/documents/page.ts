import {IoDocumentText as Icon, IoApps, IoSearch, IoSettings} from 'react-icons/io5'
import {Rule} from 'sanity'
import {getSanityClient} from '../../../utils/shared-utils'
import {Content, SchemaInputProps} from '../../../schemaTypes/types'

export class Page extends Content {
  name = 'page'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Page',
      name: 'page',
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
          name: 'path',
          title: 'Path',
          description: 'A unique path to identify this page',
          type: 'string',
          validation: (Rule: any) =>
            Rule.required().custom(async (path: any, {document}: any) => {
              const documentId = document._id.replace('drafts.', '')

              // Finds a page which has the currently specified path, excluding the current page
              const page = await getSanityClient('dev').fetch(
                `*[_type == "page" && path == "${path}" && !(_id match "*${documentId}")]{_id}[0]`,
              )
              const pageExists = !!page

              // Returns an error message if page exists, else the validation is true
              return pageExists ? 'This path is already in use.' : true
            }),
          readOnly: ({document}: any) => document?.isLocked === true,
          group: 'main',
        },
        {
          title: 'Category',
          name: 'category',
          type: 'reference',
          to: [{type: 'category'}],
          group: 'main',
        },
        {
          name: 'itemsRepresentation',
          title: 'Items Representation',
          type: 'string',
          options: {
            list: [
              {title: 'Vertical List', value: 'list'},
              {title: 'Tabs', value: 'tabs'},
              {title: 'Single Item', value: 'single'},
            ],
          },
          group: 'main',
        },
        {
          name: 'variant',
          title: 'Variant',
          description: 'A Page is dynamic and built on the fly. An Article will be cached.',
          type: 'string',
          options: {
            list: [
              {title: 'Page', value: 'page'},
              {title: 'Article', value: 'article'},
            ],
          },
          group: 'main',
        },
        {
          title: 'Items',
          name: 'items',
          type: 'array',
          group: 'main',
          of: [...(items?.pageItems ?? [])],
          readOnly: ({document}: any) => document?.isLocked === true,
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
