import {IoApps, IoLayers as Icon, IoSettings} from 'react-icons/io5'
import {hiddenField} from '../../../utils/shared-utils'
import {Content, SchemaInputProps} from '../../../schemaTypes/types'

export const groupPreview = {
  select: {
    title: 'title',
    items: 'items',
    subtitle: 'subtitle',
    hidden: 'isHidden',
  },
  prepare({title, items, subtitle, hidden}: any) {
    const count = items?.length || 0
    const countText = count === 1 ? '1 item' : `${count} items`
    const hiddenIndicator = hidden ? '🚫 ' : ''
    return {
      title: `${hiddenIndicator}${title ?? '<Group>'}`,
      subtitle: `${subtitle || ''} (${countText})`,
    }
  },
}

export class Group extends Content {
  name = 'group'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'group',
      title: 'Group',
      type: 'object',
      icon: Icon,
      groups: [
        {name: 'main', title: 'Main', icon: IoApps},
        {name: 'configuration', title: 'Configuration', icon: IoSettings},
      ],
      fields: [
        {
          ...hiddenField,
          group: 'configuration',
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          group: 'main',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          group: 'main',
        },
        {
          name: 'ctaLabel',
          title: 'CTA Label',
          type: 'string',
          group: 'main',
        },
        {
          name: 'url',
          title: 'Url',
          type: 'string',
          group: 'main',
        },
        {
          name: 'urlType',
          title: 'Url Type',
          type: 'string',
          options: {
            list: ['internal', 'external', 'link', 'dialog'],
          },
          group: 'main',
        },
        {
          name: 'variant',
          title: 'Variant',
          type: 'string',
          options: {
            list: variants.group,
          },
          group: 'main',
        },
        {
          name: 'largeVariant',
          title: 'Large Variant',
          type: 'string',
          options: {
            list: variants.group,
          },
          group: 'main',
        },
        {
          name: 'gridLayout',
          title: 'Grid Layout',
          type: 'boolean',
        },
        {
          name: 'columnSize',
          type: 'number',
          title: 'Column Number',
          hidden: ({parent}: any) => !parent?.gridLayout,
        },
        {
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          group: 'main',
        },
        {
          name: 'items',
          title: 'Items',
          type: 'array',
          of: items.pageItems,
          group: 'main',
        },
      ],
      preview: groupPreview,
    }
  }
}
