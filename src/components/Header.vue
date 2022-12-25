<script setup lang="ts">
  import { ref } from 'vue'

  defineProps<{blur: boolean}>()
</script>

<template>
  <header
    :class="[blur && 'backdrop-blur-sm border-b-[1px] border-solid border-slate-300', 'px-1 sticky top-0 z-10 transition-all']"
  >
    <div class="flex justify-between items-center max-w-screen-xl xl:mx-auto">
      <a href="/">
        <img src="@/assets/logo.png" alt="Logo de Onde Contribuir?" class="h-20">
      </a>
  
      <div class="px-1.5">
        <a href="#contribuir" class="px-3.5 py-3 bg-emerald-500 text-white hover:bg-emerald-600 transition-all font-bold rounded-xl">
          Adicionar projeto
        </a>
      </div>
    </div>
  </header>
</template>
