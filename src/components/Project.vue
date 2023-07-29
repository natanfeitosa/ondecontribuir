<script lang="ts" setup>
  import type { IProject } from '@/interfaces'
  const props = defineProps<{project: IProject}>()
  // console.log(props.project)
</script>

<template>
  <a
    class="card h-fit max-w-sm m-3 cursor-pointer border border-solid border-transparent transition-all [&:not(:hover)]:shadow-none hover:border-slate-300"
    :href="project.url"
    target="_blank"
    rel="noopener"
  >
    <div class="mx-auto mb-3 p-1 w-[74px] h-[74px] rounded-full">
      <img :src="project.logo ?? '/img/github-mark.svg'" class="max-w-full max-h-full text-slate-800 rounded-[inherit]" alt="Capa do projeto">
    </div>
    <div class="text-center">
      <h2 class="text-2xl font-bold text-slate-800 opacity-90 leading-4">
        {{ project.name }}
      </h2>
      <small class="opacity-60 text-slate-600 text-xs font-bold">
        @{{ project.owner.username }}
      </small>
      <p class="text-base pt-2 text-slate-700">
        {{ project.description }}
      </p>
    </div>
    <div v-if="project.badges" class="mt-2 pt-2 flex flex-wrap">
      <img
        v-for="(badge, i) in project.badges"
        :key="i"
        :alt="badge.alt"
        :src="badge.url"
        class="m-1"
      >
    </div>
  </a>
</template>
