<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex items-center justify-between">
      <h1 class="mb-4 text-2xl font-bold">Transformer Dashboard</h1>
      <ResetButton :disabled="!hasChanges" />
    </div>
    <TransformerTable />
    <VoltageChart />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useTransformerStore } from './stores/transformerStore';
import TransformerTable from './components/TransformerTable.vue';
import VoltageChart from './components/VoltageChart.vue';
import ResetButton from './components/ResetButton.vue';

const store = useTransformerStore();

onMounted(() => {
  store.loadTransformers();
});

const hasChanges = computed(() => {
  const isSearchChanged = store.search !== '';
  const areSelectedIdsChanged = store.selectedIds.length !== store.transformers.length;
  return isSearchChanged || areSelectedIdsChanged;
});
</script>
