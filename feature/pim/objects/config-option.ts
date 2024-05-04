import {Content, SchemaInputProps} from '../../../schemaTypes/types'

export class ConfigOption extends Content {
  name = 'configOption'
  getSchema({variants, items}: SchemaInputProps) {
    return {
      name: 'configOption',
      title: 'COnfig Option',
      type: 'object',
      fields: [
        {name: 'id', title: 'ID', type: 'number'},
        {name: 'label', title: 'Label', type: 'string'},
        {name: 'attributeCode', title: 'Attribute Code', type: 'string'},
        {
          name: 'values',
          type: 'array',
          of: [
            {
              name: 'value',
              type: 'object',
              fields: [
                {name: 'id', title: 'ID', type: 'number'},
                {name: 'label', title: 'Label', type: 'string'},
                {name: 'data', title: 'Data', type: 'string'},
              ],
            },
          ],
        },
      ],
    }
  }
}
