<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold mb-4">Transformer Dashboard</h1>
      <ResetButton />
    </div>
    <TransformerTable />
    <VoltageChart />
  </div>
</template>

<script setup lang="ts">
import TransformerTable from './components/TransformerTable.vue';
import VoltageChart from './components/VoltageChart.vue';
import ResetButton from './components/ResetButton.vue';
</script>
