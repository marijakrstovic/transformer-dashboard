import type { Transformer } from '../types/types';

const API_URL = 'https://testapi.io/api/marijakrstovic/transformers';

export async function fetchTransformers(): Promise<Transformer[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch transformer data');
  return await res.json();
}
