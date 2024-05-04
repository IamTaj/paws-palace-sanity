import {core} from '../feature/core'
import {homePage} from '../feature/homepage'
import {pim} from '../feature/pim'
import {bootstrap} from './bootstrap'

export const schemaTypes = bootstrap([core, pim, homePage])
