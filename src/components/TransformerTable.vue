<template>
  <div class="mb-6">
    <input
      v-model="store.search"
      placeholder="Search by name or region"
      class="mb-2 w-full rounded border px-3 py-2"
      aria-label="Search transformers"
    >

    <div
      v-if="store.loading"
      class="py-4 text-center text-gray-500"
    >
      Loading transformers...
    </div>
    <div
      v-else-if="store.error"
      class="py-4 text-center text-red-500"
    >
      {{ store.error }}
    </div>

    <table
      v-else
      class="w-full rounded border bg-white shadow"
    >
      <thead>
        <tr class="bg-gray-100 text-left">
          <th class="p-2">
            Name
          </th>
          <th class="p-2">
            Region
          </th>
          <th class="p-2">
            Health
          </th>
        </tr>
      </thead>
      <tbody v-if="filteredTransformers.length">
        <tr
          v-for="transformer in filteredTransformers"
          :key="transformer.assetId"
          class="border-t"
        >
          <td class="p-2">
            {{ transformer.name }}
          </td>
          <td class="p-2">
            {{ transformer.region }}
          </td>
          <td class="p-2">
            {{ transformer.health }}
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td
            colspan="3"
            class="p-2 text-center text-gray-500"
          >
            No transformers found.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTransformerStore } from '../stores/transformerStore';
import { Transformer } from '../types/types';

const store = useTransformerStore();
const filteredTransformers = computed((): Transformer[] => {
  if (!store.transformers) return [];
  const search = store.search?.toLowerCase() || '';
  return store.transformers.filter(
    (t: Transformer) =>
      t.name.toLowerCase().includes(search) || t.region.toLowerCase().includes(search)
  );
});
</script>
