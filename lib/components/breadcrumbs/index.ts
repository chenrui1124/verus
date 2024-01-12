import { toPlugin } from '@utils'
import Breadcrumbs from './VBreadcrumbs.vue'

export type BreadcrumbsProps = {
  each: string[]
  selectable?: boolean
}

export type BreadcrumbsModel = {
  modelValue: string[]
}

export const VBreadcrumbs = toPlugin(Breadcrumbs)
