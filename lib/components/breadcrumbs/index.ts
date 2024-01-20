import type { AsReadonly } from 'mm3'

import { toPlugin } from '@utils'
import Breadcrumbs from './VBreadcrumbs.vue'

export type BreadcrumbsProps = {
  each: AsReadonly<(string | { icon?: string; text: string; value: string })[]>
  selectable?: boolean
}

export type BreadcrumbsModel = {
  modelValue: string[]
}

export const VBreadcrumbs = toPlugin(Breadcrumbs)
