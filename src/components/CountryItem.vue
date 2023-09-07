<script setup lang="ts">
import { ICountry } from "../models/country.model";
interface Props {
    country: ICountry;
}
defineProps<Props>()
</script>


<template>
    <div class="bg-gray-300 p-4 h-full">
        <h1 class="bold text-2xl">{{ country.name.common }}</h1>
        <p>Country Population: {{ country.population?.toLocaleString() }}</p>
        <div v-for="language in country.languages" :key="language">
            <p>Country Language: {{ language }}</p>
        </div>
        <img :src="country.flags.png" :alt="country.flags.alt" :width="60">
    </div>
</template>