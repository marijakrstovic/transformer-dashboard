<template>
  <div>
    <div v-if="!props.chartData || !props.chartData.datasets.length" class="text-center text-gray-500">
      Loading chart data...
    </div>
    <canvas v-else ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from 'vue';
import {
  Chart,
  registerables,
  ChartData,
  ChartOptions
} from 'chart.js';
import 'chartjs-adapter-date-fns';

Chart.register(...registerables);

const props = defineProps<{
  chartData: ChartData<'line'>; 
  options?: ChartOptions<'line'>;
}>();

const canvasRef = ref<HTMLCanvasElement | null>(null);

let chart: Chart<'line'> | null = null;

onMounted(() => {
  if (canvasRef.value) {
    chart = new Chart<'line'>(canvasRef.value, {
      type: 'line',
      data: props.chartData,
      options: props.options || {
        responsive: true,
        scales: {
          x: {
            type: 'time',
            time: { unit: 'day' },
            title: { display: true, text: 'Date' }
          },
          y: {
            title: { display: true, text: 'Voltage' }
          }
        },
        plugins: {
          legend: { display: true }
        }
      }
    });
  }
});

onUnmounted(() => {
  if (chart) {
    chart.destroy();
    chart = null;
  }
});

watch(() => props.chartData, (newData) => {
  if (chart && newData?.datasets) {
    chart.data = newData;
    chart.update();
  } else if (chart) {
    console.error('Invalid chart data');
    chart.data = { datasets: [] }; 
    chart.update();
  }
});
</script>