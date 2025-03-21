<template>
  <button 
    class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm rounded mb-4 disabled:opacity-50 disabled:hover:bg-blue-500"
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