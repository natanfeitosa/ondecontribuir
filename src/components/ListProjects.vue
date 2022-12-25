<script lang="ts" setup>
  import { ref, computed, onMounted, watchEffect } from 'vue'
  import Project from './Project.vue'
  
  import { getProjects } from '@/repositories'
  import type { IProject } from '@/interfaces'
  
  const props = defineProps<{search: string}>()

  const projects = ref<IProject[] | null>()
  projects.value = await getProjects()

  // onMount(async () => {
  //   if(projects.value == null) {
  //     projects.value = await getProjects()
  //   }
  // })

  const ordering = ref<string>('A')
  const descending = ref(false)
  
  const filteredProjects = computed<IProject[] | any>(() => {
    let _projs = projects.value
    if(props.search) {
      return _projs.filter(p => {
        return (
          p.name.includes(props.search) ||
          p.topics.some(t => t.includes(props.search))
        )
      })
    }

    // console.log({ordering: ordering.value})

    _projs = ordering.value == 'A' ? _projs : _projs.sort((a, b) => {
      // console.log({a, b, o: ordering.value})
      switch(ordering.value) {
        case 'E':
          return a.stars - b.stars
        case 'F':
          return a.forks - b.forks
        case 'I':
          return a.open_issues - b.open_issues
      }
    })

    if(descending.value) return _projs.reverse()

    return _projs
  })

  // watchEffect(() => console.log({
  //   // search: props.search
  //   // ordering: ordering.value
  //   projects: projects.value
  // }))

  // console.log('called')
</script>

<template>
  <div class="p-0.5">
    <div v-if="filteredProjects?.length < 1 && !!search" class="text-slate-500 my-4 mx-auto max-w-sm">
      <img alt="Sad face" src="/img/Sad-Face.png" class="w-[74px] mx-auto">
      <h3 class="pt-3.5 text-lg font-bold text-center">
        Oops, parece que ainda não temos nenhum resultado para isso. Que tal você <a href="#contribuir" class="[&:not(:hover)]:underline text-slate-900 ">contribuir</a> com o projeto?
      </h3>
    </div>
    <template v-else>
      <div class="my-2 flex justify-center items-center">
        <select class="ml-2 p-1 text-slate-600 rounded border border-solid border-slate-300 drop-shadow outline-none" v-model="ordering">
          <option value="A">Aleatório</option>
          <option value="E">Número de estrelas</option>
          <option value="F">Número de forks</option>
          <option value="I">Issues abertas</option>
        </select>
        <button
    class="px-3 py-0.5 mx-1 rounded transition-all duration-300 hover:bg-[rgb(239,239,239)] hover:shadow hover:opacity-90"
          :title="descending ? 'Descendente' : 'Ascendente'"
          @click="descending = !descending"
        >
          <FaIcon icon="sort" class="fill-current"></FaIcon>
        </button>
      </div> 
      <div class="flex justify-center flex-wrap">
        <Project v-for="(project, i) in filteredProjects" :key="i" :project="project"></Project>
      </div>
    </template>
  </div>
</template>