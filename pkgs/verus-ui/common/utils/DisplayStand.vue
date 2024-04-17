<script setup lang="ts">
import type { ComputedRef, Ref } from 'vue'
import type { OrReadonly } from 'mm3'

import { computed, ref } from 'vue'
import { VSegmentedButton, VSwitch, VTextField } from '@verus-ui/components'

const { options } = defineProps<{
  options: OrReadonly<
    ({ name: string } & [
      { type: 'toggle'; value: string; init?: boolean },
      { type: 'boolean'; init?: boolean },
      { type: 'literal'; value: string[]; init?: string },
      { type: 'string'; init?: string }
    ][number])[]
  >
}>()

const each = options.map(item => {
  const returnValue: typeof item & { _modelValue?: Ref; outputValue?: ComputedRef } = { ...item }

  const modelValue = ref(item.init)

  returnValue._modelValue = modelValue
  returnValue.outputValue = computed(() => {
    if (item.type == 'toggle') {
      return modelValue.value ? item.value : void 0
    } else {
      return modelValue.value
    }
  })

  return returnValue
})

const props = computed(() =>
  each.reduce((cur, val) => {
    // @ts-ignore
    cur[val.name] = val.outputValue.value
    return cur
  }, {})
)

defineSlots<{ default(props: { props: any }): any }>()
</script>

<template>
  <div class="flex flex-col rounded-v3 border-v1 border-solid border-otl *:p-6">
    <div class="relative flex items-center justify-center">
      <slot v-bind="{ props }" />
    </div>

    <div
      class="grid grid-cols-[auto_1fr] items-center gap-4 border-0 border-t-v1 border-solid border-inherit"
    >
      <template v-for="option in each">
        <span class="select-none text-sm text-pri transition-colors duration-300">
          {{ option.name }}
        </span>

        <div>
          <component
            v-model="option!._modelValue!.value"
            :is="
              {
                toggle: VSwitch,
                boolean: VSwitch,
                literal: VSegmentedButton,
                string: VTextField
              }[option.type]
            "
            :each="option.type == 'literal' ? option.value : void 0"
          />
        </div>
      </template>
    </div>
  </div>
</template>
