<template>
  <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
      <h1
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Proyectos
      </h1>
      <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">
        A continuación, encontrarás algunos de los proyectos que he desarrollado, aplicando habilidades en análisis de datos, programación y visualización para resolver problemas reales y prácticos.  
      </p>
    </div>
    <main class="relative mb-auto">
      <div class="">
        <div class="container py-12">
          <div class="flex flex-wrap -m-4">
            <project-card
              v-for="item in projectsData"
              :key="item.title"
              :title="item.title"
              :description="item.description"
              :href="item.href"
              :github="item.github"
              :tech1="item.tech1"
              :tech2="item.tech2"
              :tech3="item.tech3"
            ></project-card>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import projectsData from "~/data/proyectos";
import siteMetaInfo from "@/data/sitemetainfo.js";

useSeoMeta({
  title: `${siteMetaInfo.title} | Proyectos`,
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "Portfolio Micaela Alarcón",
      name: "Portfolio Micaela Alarcón",
      content: "Algunos de los proyectos que he desarrollado, aplicando habilidades en análisis de datos, programación y visualización para resolver problemas reales y prácticos.",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
</script>
