import { useInstall } from '@verus-ui/common'
import OrderedList from './OrderedList.vue'

export interface OrderedListProps {
  width?: string
  marker?: 'arabic' | 'roman'
}

export interface OrderedListSlots {
  default(): any
}

export const VOrderedList = useInstall(
  OrderedList as unknown as new () => {
    $props: OrderedListProps
    $slots: OrderedListSlots
  }
)
