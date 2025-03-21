import type { Transformer } from '../types/types';

// load fallback data just in case mocky.io is down
const API_URL = import.meta.env.VITE_API_URL ?? '/data/sampledata.json';

export async function fetchTransformers(): Promise<Transformer[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch transformer data');
  return await res.json();
}
