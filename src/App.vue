<script setup lang="ts">
  import { ref } from 'vue'
  import Header from './components/Header.vue'
  import Footer from'./components/Footer.vue'
  import ListProjects from './components/ListProjects.vue'
  import ContribuirCard from './components/ContribuirCard.vue'
  import { useEventListener } from './composables/useEventListener'
  
  const searchString = ref<string>()
  
  const scroll = ref(0)

  useEventListener('scroll', e => {
    scroll.value = window.scrollY
    // console.log(e)
  })
</script>

<template>
  <div class="bg-slate-200 text-slate-700 min-h-screen flex flex-col">
    <Header :blur="scroll > 10"></Header>
    <main class="grow p-4 pt-6 mt-4 w-full max-w-screen-lg lg:mx-auto">
      <div class="flex flex-col items-center max-w-xl mx-auto">
        <h1 class="font-bold text-2xl mt-6 opacity-90 text-center">Procurando projetos open source para contribuir?</h1>
        <p class="text-center text-base opacity-90 my-4">
          Encontre e contribua com projetos diversos, filtrando por linguagens, ordenando por número de estrelas ou pesquisando palavras específicas.
        </p>
        <div class="card mx-1 my-6">
          <form class="px-1.5 py-1 bg-white border-b border-solid border-blue-700 flex" @submit.prevent="() => {}">
            <button type="submit" class="pl-1 pr-2">
              <FaIcon icon="magnifying-glass"></FaIcon>
            </button>
            <input
              type="text"
              placeholder="Procurando um repo?"
              class="bg-transparent outline-none"
              v-model.trim="searchString"
            />
          </form>
        </div>
      </div>
      <div class="p-1.5 w-full">
        <Suspense>
          <!-- component with nested async dependencies -->
          <ListProjects :search="searchString"></ListProjects>
          <!-- loading state via #fallback slot -->
          <template #fallback>
            <div class="py-4 my-2 w-fit mx-auto flex flex-col justify-center">
              <FaIcon class="mx-auto" icon="spinner" size="3x" spin></FaIcon>
              <p class="text-lg text-slate-600 pt-2">Carregando...</p>
            </div>
          </template>
        </Suspense>
      </div>
      <ContribuirCard id="contribuir"></ContribuirCard>
    </main>
    <Footer></Footer>
    </div>
</template>
