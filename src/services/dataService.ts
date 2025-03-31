import type { Transformer } from '../types/types';

const API_URL = 'https://run.mocky.io/v3/ed165275-4e03-4d53-b3a1-7b98ca1eb2f4';

export async function fetchTransformers(): Promise<Transformer[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch transformer data');
  return await res.json();
}
