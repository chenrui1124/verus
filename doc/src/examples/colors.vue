<template>
  <div
    class="border-otl font-mono text-sm v-border [&>div>div]:h-20 [&>div>div]:w-80 [&>div>div]:p-2"
  >
    <div class="flex">
      <div class="bg-bsc text-on-bsc">Basic / On Basic</div>
      <div class="bg-otl text-on-pri">Border</div>
      <div class="bg-dis text-on-bsc">Disabled</div>
    </div>

    <div class="flex">
      <div class="bg-pri text-on-pri">Primary / On Primary</div>
      <div class="bg-pri-var text-on-pri-var">Primary Variant / On Primary Variant</div>
      <div class="bg-pri-ctr text-on-pri-var">Primary Container</div>
    </div>

    <div class="flex">
      <div class="bg-err text-on-err">Error / On Error</div>
      <div class="bg-err-var text-on-err-var">Error Variant / On Error Variant</div>
      <div class="bg-err-ctr text-on-err-var">Error Container</div>
    </div>
  </div>
</template>
