<script setup lang="ts">
import { ICountry } from '../models/country.model';
import CountryItem from './CountryItem.vue';

interface Props {
    countries: ICountry[];
}

defineProps<Props>()

</script>
<template>
    <div class="grid grid-cols-3 gap-4">
        <div v-for="country in countries">
            <CountryItem :country="country" />
        </div>
    </div>
</template>