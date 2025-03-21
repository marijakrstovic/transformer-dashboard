<template>
  <button
    class="mb-4 rounded bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600 disabled:opacity-50 disabled:hover:bg-blue-500"
    :disabled="disabled"
    aria-label="Reset all filters"
    @click="resetFilters"
  >
    Reset All
  </button>
</template>

<script setup lang="ts">
import { useTransformerStore } from '../stores/transformerStore';

const store = useTransformerStore();
const resetFilters = store.resetFilters;
</script>
