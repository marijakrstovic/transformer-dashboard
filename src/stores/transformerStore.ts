import { defineStore } from 'pinia';
import { ref } from 'vue';
import data from '../data/sampledata.json';
import { Transformer } from '../types/types'; 

export const useTransformerStore = defineStore('transformers', () => {
  const transformers = ref<Transformer[]>(data as Transformer[]);
  const search = ref<string>(''); 
  const selectedIds = ref<number[]>(transformers.value.map(t => t.assetId)); 

  return { transformers, search, selectedIds };
}, {
  persist: true 
});