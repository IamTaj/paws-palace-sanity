import {Content, SchemaInputProps} from '../../../schemaTypes/types'

export class Header extends Content {
  name = 'header'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      title: 'Header',
      name: 'header',
      type: 'document',
      fields: [
        {
          name: 'variant',
          title: 'Variant',
          type: 'string',
          options: {
            list: variants?.header,
          },
        },
        {
          title: 'Header Data',
          name: 'headerData',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                },

                {
                  title: 'Header Field Variant',
                  description: 'Pick the variant of the header field ',
                  name: 'type',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Direct Navigation', value: 'directNavigation'},
                      {title: 'Multi Category', value: 'multiCategory'},
                      {title: 'Category With Image', value: 'imageCategory'},
                    ],
                  },
                },
                {
                  name: 'multiCategoryList',
                  title: 'Multi Category List',
                  type: 'array',
                  hidden: ({parent}: any) => !(parent.type === 'multiCategory'),
                  of: [
                    {
                      type: 'object',
                      fields: [
                        {
                          name: 'category',
                          title: 'Category',
                          type: 'string',
                        },
                        {
                          name: 'subCategoryList',
                          title: 'Sub Category List',
                          type: 'array',
                          of: [
                            {
                              type: 'object',
                              fields: [
                                {
                                  name: 'subCategory',
                                  title: 'Sub Category',
                                  type: 'string',
                                },
                                {
                                  name: 'url',
                                  title: 'Url',
                                  type: 'url',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: 'url',
                  title: 'Navigation Url',
                  type: 'url',
                  hidden: ({parent}: any) => !(parent.type === 'directNavigation'),
                },
                {
                  name: 'categoryWithImageList',
                  title: 'Category With Image List',
                  type: 'array',
                  hidden: ({parent}: any) => !(parent.type === 'imageCategory'),
                  of: [
                    {
                      type: 'object',
                      fields: [
                        {
                          name: 'category',
                          title: 'Category',
                          type: 'string',
                        },
                        {
                          name: 'image',
                          title: 'Image',
                          type: 'image',
                          fields: [
                            {
                              name: 'altText',
                              type: 'string',
                              title: 'Alternative Text',
                            },
                          ],
                        },
                        {
                          name: 'largeImage',
                          title: 'Large Image',
                          description: 'Image that will be used for larger screens like Desktop',
                          type: 'image',
                          fields: [
                            {
                              name: 'altText',
                              type: 'string',
                              title: 'Alternative Text',
                            },
                          ],
                        },
                        {
                          name: 'url',
                          title: 'Url',
                          type: 'url',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      preview: {
        select: {
          title: 'Variant',
        },
        prepare({title}: any) {
          return {
            title: `${title ? title : 'Default Header'}`,
          }
        },
      },
    }
  }
}
