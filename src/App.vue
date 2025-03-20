<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold mb-4">Transformer Dashboard</h1>
      <ResetButton v-if="hasChanges" />
    </div>
    <TransformerTable />
    <VoltageChart />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTransformerStore } from './stores/transformerStore';
import TransformerTable from './components/TransformerTable.vue';
import VoltageChart from './components/VoltageChart.vue';
import ResetButton from './components/ResetButton.vue';

const store = useTransformerStore();

const hasChanges = computed(() => {
  const isSearchChanged = store.search !== '';
  const areSelectedIdsChanged = store.selectedIds.length !== store.transformers.length;
  return isSearchChanged || areSelectedIdsChanged;
});
</script>
