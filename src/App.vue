<script setup lang="ts">
import Navigation from './components/Navigation.vue'
import CountryList from './components/CountryList.vue'
import axiosClient from "./utils/axios"
import { onMounted, ref, watch } from 'vue'
import { ICountry } from "./models/country.model"

const countries = ref<ICountry[]>([])
const search = ref('')
const filteredCountries = ref<ICountry[]>([])

// Pagination
const page = ref(1)
const perPage = ref(12)
const paginatedCountries = ref<ICountry[]>([])
const totalItems = ref(0)

const fetchCountries = async () => {

  try {
    const { data } = await axiosClient.get('/all')
    countries.value = data
    totalItems.value = countries.value.length;
    return data
  } catch (error) {
    console.log(error);
  }


}

const filterCountries = () => {
  filteredCountries.value = countries.value.filter(country => {
    return country.name.common.toLowerCase().includes(search.value.toLowerCase())
  })
}

const sliceCountries = (currentCountries: ICountry[]) => {

  const start = (page.value - 1) * perPage.value
  const end = start + perPage.value

  paginatedCountries.value = currentCountries.slice(start, end)
}

const changePage = (newPage: number) => {
  page.value = newPage
}

onMounted(() => {
  fetchCountries()
})

watch([countries, page, filteredCountries], () => {
  sliceCountries(
    filteredCountries.value.length <= 0 && search.value === ""
      ? countries.value
      : filteredCountries.value
  );
})

</script>

<template>
  <h1 class="text-[50px] text-emerald-300 font-bold text-center">
    World Countries
  </h1>
  <Navigation />
  <div class="flex flex-col w-full items-center my-4">
    <input class="border-2 border-gray-400 rounded-xl px-6 py-2" placeholder="Search by country name" type="text"
      name="search" id="search" v-model="search" @input="filterCountries">
  </div>
  <div class="flex w-full justify-center gap-6 mb-4">
    <button @click="changePage(page - 1)" :disabled="page <= 1" :class="{ 'opacity-50': page <= 1 }"
      class="border-2 border-gray-500 rounded-xl hover:bg-slate-400 px-8 py-1">
      Prev
    </button>

    <button @click="changePage(page + 1)" :disabled="page >= totalItems / perPage"
      :class="{ 'opacity-50': page >= totalItems / perPage }"
      class="border-2 border-gray-500 rounded-xl hover:bg-slate-400 px-8 py-1">
      Next
    </button>
  </div>
  <CountryList :countries="paginatedCountries" />
</template>

<style scoped></style>
