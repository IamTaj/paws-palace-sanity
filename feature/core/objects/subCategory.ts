export default {
  name: 'subCategory',
  title: 'Sub Category',
  type: 'object',
  fields: [
    {
      name: 'subCategoryText',
      title: 'Sub Category text',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
