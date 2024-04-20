import { toPlugin } from '@verus-ui/common'
import OrderedList from './OrderedList.vue'

export type OrderedListProps = {
  width?: string
}

export const VOrderedList = toPlugin(OrderedList)
