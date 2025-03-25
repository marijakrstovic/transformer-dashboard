<template>
  <div>
    <div
      v-if="!props.chartData || !props.chartData.datasets.length"
      class="text-center text-gray-500"
    >
      Loading chart data...
    </div>
    <canvas
      v-else
      ref="canvasRef"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from 'vue';
import { Chart, registerables, ChartData } from 'chart.js';
import 'chartjs-adapter-date-fns';
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';

Chart.register(...registerables);

const props = defineProps<{
  chartData: ChartData<'line'>;
}>();

const canvasRef = ref<HTMLCanvasElement | null>(null);

let chart: Chart<'line'> | null = null;

// Debounced function to update the chart
const updateChart = debounce((newData: ChartData<'line'>) => {
  if (chart && newData?.datasets) {
    chart.data = newData;
    chart.update();
  }
}, 400); // debounce delay

onMounted(() => {
  if (canvasRef.value) {
    chart = new Chart<'line'>(canvasRef.value, {
      type: 'line',
      data: props.chartData,
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'time',
            time: { unit: 'day' },
            title: { display: true, text: 'Date' },
          },
          y: {
            title: { display: true, text: 'Voltage' },
          },
        },
        plugins: {
          legend: {
            display: true,
            onClick: () => {},
          },
        },
      },
    });
  }
});

onUnmounted(() => {
  if (chart) {
    chart.destroy();
    chart = null;
  }
  updateChart.cancel(); // Cancel any pending debounced updates
});

watch(
  () => props.chartData,
  (newData, oldData) => {
    if (!isEqual(newData, oldData)) {
      updateChart(newData); // Use the debounced function
    }
  }
);
</script>
