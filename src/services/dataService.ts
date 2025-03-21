import type { Transformer } from '../types/types';

const API_URL = 'https://run.mocky.io/v3/44b96068-4b26-4713-8687-f5b635043de0';

export async function fetchTransformers(): Promise<Transformer[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch transformer data');
  return await res.json();
}
