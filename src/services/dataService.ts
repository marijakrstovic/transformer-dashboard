import type { Transformer } from '../types/types';

const API_URL = 'https://run.mocky.io/v3/a7296587-891f-4657-b634-aa0fa5581a51';

export async function fetchTransformers(): Promise<Transformer[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch transformer data');
  return await res.json();
}
