<script lang="ts">
import type { OrReadonly } from 'mm3'
import type { DirectionProp } from '@verus-ui/ts'

import { computed } from 'vue'
import { Direction } from '@verus-ui/ts'
import { Icon, withPrefix } from '@verus-ui/common'

export interface SegmentedButtonProps {
  direction?: DirectionProp
  /**
   * @example
   *
   * // simple:
   * ['Windows', 'Linux', 'MacOS']
   *
   * // with icon:
   * [
   *  { label: 'Android', icon: 'i-ri:android-fill', value: 'android' },
   *  { label: 'iOS', icon: 'i-ri:apple-fill', value: 'ios' },
   *  { label: 'Windows Phone', icon: 'i-ri:windows-fill', value: 'windows-phone' }
   * ]
   */
  each: OrReadonly<(string | { icon?: string; label: string; value: string })[]>
  uniformWidth?: boolean
}

export interface SegmentedButtonModel {
  modelValue?: string
}
</script>

<script setup lang="ts">
defineOptions({ name: withPrefix('SegmentedButton') })

const { each, direction = Direction.Horizontal } = defineProps<SegmentedButtonProps>()

const modelValue = defineModel<SegmentedButtonModel['modelValue']>()

const _each = computed(() => each.map(i => (typeof i == 'string' ? { label: i, value: i } : i)))
</script>

<template>
  <div
    :style="{
      gridTemplateColumns:
        direction === Direction.Vertical
          ? void 0
          : `repeat(${each.length}, ${uniformWidth ? '1fr' : 'auto'})`
    }"
    :class="[
      'relative rounded-v1 bg-bsc transition-colors duration-300 before:v-shade before:border-1.2 before:border-solid before:border-otl',
      direction === Direction.Vertical ? 'inline-grid grid-cols-1' : 'inline-grid grid-rows-1'
    ]"
  >
    <label
      v-for="({ value, icon, label }, index) in _each"
      :key="index"
      :class="[
        'relative box-border h-9 cursor-pointer items-center border-otl bg-transparent px-4 text-on-bsc transition duration-300 hover:bg-pri/8',
        'has-[:checked]:border-pri has-[:checked]:bg-pri-ctr has-[:checked]:text-pri has-[:focus-visible]:v-outline',
        direction === 'vertical'
          ? 'col-span-2 -my-[0.6px] inline-grid grid-cols-subgrid border-1.2 border-solid border-t-transparent first:mt-0 first:rounded-t-inherit first:border-t-otl last:mb-0 last:rounded-b-inherit'
          : '-mx-[0.6px] inline-flex justify-center border-1.2 border-solid border-l-transparent first:ml-0 first:rounded-l-inherit first:border-l-otl last:mr-0 last:rounded-r-inherit'
      ]"
    >
      <input
        type="radio"
        :value
        v-model="modelValue"
        class="pointer-events-none absolute m-auto size-0 appearance-none p-0 opacity-0 outline-none"
      />
      <Icon
        v-if="icon"
        :name="icon"
        size="sm"
        :class="['-ml-0.5 mr-3', { 'col-start-1': direction === Direction.Vertical }]"
      />
      <span
        :class="[
          'pointer-events-none mb-px select-none text-left text-sm',
          { 'col-start-2': direction === Direction.Vertical }
        ]"
      >
        {{ label }}
      </span>
    </label>
  </div>
</template>
