import {createClient, ClientConfig} from '@sanity/client'

export function getSanityClient(dataset: 'production' | 'dev') {
  const config: ClientConfig = {
    projectId: 'hjuptpmq',
    dataset,
    apiVersion: 'v2021-10-21',
    useCdn: false,
  }

  return createClient(config)
}

export const hiddenField = {
  name: 'isHidden',
  title: 'Hide this item',
  description: 'If hidden, this item will NOT be included on the client side',
  type: 'boolean',
}
