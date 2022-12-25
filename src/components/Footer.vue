<template>
  <footer class="mt-2">
    <div class="w-full px-2 py-4 w-full bg-slate-300 border-b border-solid border-slate-400 -shadow">
      <div class="flex justify-center max-w-screen-xl xl:mx-auto">
        <a href="#" class="w-[46px] h-[46px] mx-6 bg-slate-500 rounded-full flex justify-center items-center text-slate-100 transition-all hover:text-slate-200 hover:drop-shadow-xl" title="Repositorio GitHub" target="_blank" rel="noopener">
          <FaIcon :icon="['fab', 'github']" size="xl"></FaIcon>
        </a>
        <a href="#" class="w-[46px] h-[46px] mx-6 bg-slate-500 rounded-full flex justify-center items-center text-slate-100 transition-all hover:text-slate-200 hover:drop-shadow-xl" title="Twitter" target="_blank" rel="noopener">
          <FaIcon :icon="['fab', 'twitter']" size="xl"></FaIcon>
        </a>
        <a href="#" class="w-[46px] h-[46px] mx-6 bg-slate-500 rounded-full flex justify-center items-center text-slate-100 transition-all hover:text-slate-200 hover:drop-shadow-xl" title="Linkedin" target="_blank" rel="noopener">
          <FaIcon :icon="['fab', 'linkedin-in']" size="xl"></FaIcon>
        </a>
      </div>
    </div>
    <div class="p-2 text-center text-sm bg-slate-500 border-t border-solid border-slate-600 text-slate-200 font-bold">
      <div class="flex justify-around flex-wrap max-w-screen-xl xl:mx-auto w-full px-2">
        <span class="p-2">Os projetos são atualizados a cada 30min*</span>
        <span class="p-2">
          Com
          <FaIcon icon="heart" class="text-red-500"></FaIcon>
          por
          <a href="https://www.instagram.com/santos_natanoficial/" target="_blank" rel="noopener" class="hover:underline hover:text-green-400">Natan Santos</a>
        </span>
      </div>
    </div>
  </footer>
</template>
