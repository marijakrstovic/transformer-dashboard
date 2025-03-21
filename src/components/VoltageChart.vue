<template>
  <div class="mb-6">
    <div v-if="store.loading" class="text-center text-gray-500">Loading chart data...</div>
    <div v-else-if="store.error" class="text-center text-red-500">
      {{ store.error }}
    </div>
    <div v-else>
      <div class="mb-4 flex flex-wrap gap-4">
        <label
          v-for="transformer in store.transformers"
          :key="transformer.assetId"
          class="flex items-center gap-2"
        >
          <input
            v-model="store.selectedIds"
            type="checkbox"
            :value="transformer.assetId"
            :aria-label="`Select ${transformer.name}`"
          />
          {{ transformer.name }}
        </label>
      </div>

      <div v-if="!chartData.datasets.length" class="pt-6 text-center text-gray-500">
        No data to display. Please select transformers.
      </div>
      <LineChart v-else :chart-data="chartData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTransformerStore } from '../stores/transformerStore';
import LineChart from './LineChart.vue';
import { ChartData } from 'chart.js';

const store = useTransformerStore();
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF'];

const chartData = computed((): ChartData<'line'> => {
  return {
    datasets: store.transformers
      .filter(
        (t) =>
          store.selectedIds.includes(t.assetId) &&
          (t.name.toLowerCase().includes(store.search.toLowerCase()) ||
            t.region.toLowerCase().includes(store.search.toLowerCase()))
      )
      .map((t, index) => ({
        label: t.name,
        data: t.lastTenVoltgageReadings.map((r) => ({
          x: new Date(r.timestamp).getTime(),
          y: Number(r.voltage),
        })),
        borderColor: colors[index % colors.length],
        tension: 0.3,
        fill: false,
      })),
  };
});
</script>
