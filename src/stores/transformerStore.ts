import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Transformer } from '../types/types';
import { fetchTransformers } from '../services/dataService';

export const useTransformerStore = defineStore(
  'transformers',
  () => {
    const transformers = ref<Transformer[]>([]);
    const search = ref<string>('');
    const selectedIds = ref<number[]>([]);
    const loading = ref<boolean>(false);
    const error = ref<string | null>(null);

    const loadTransformers = async () => {
      loading.value = true;
      error.value = null;

      try {
        const data = await fetchTransformers();
        transformers.value = data;
        selectedIds.value = data.map((t) => t.assetId);
      } catch (err) {
        error.value = (err as Error).message;
      } finally {
        loading.value = false;
      }
    };

    const resetFilters = () => {
      search.value = '';
      selectedIds.value = transformers.value.map((t) => t.assetId);
    };

    return {
      transformers,
      search,
      selectedIds,
      loading,
      error,
      loadTransformers,
      resetFilters,
    };
  },
  {
    persist: true,
  }
);
