<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Transformer Dashboard</h1>
    <TransformerTable />
    <VoltageChart />
  </div>
</template>

<script setup lang="ts">
import TransformerTable from './components/TransformerTable.vue'
import VoltageChart from './components/VoltageChart.vue'
</script>
