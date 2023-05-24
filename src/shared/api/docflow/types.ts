import type { Type } from '@/types/doctype.types';
import { API_DOCFLOW } from './api';

export const getTypes = async (): Promise<Type[]> => {
  return await API_DOCFLOW.get('doc-types').then((response) => response?.data);
};

export const addType = async (typeName: string) => {
  await API_DOCFLOW.post('doc-types', {
    name: typeName,
  }).then((response) => response?.data);
};

export const updateType = async (typeId: number, typeName: string) => {
  await API_DOCFLOW.put(`doc-types/${typeId}`, {
    name: typeName,
  }).then((response) => response?.data);
};

export const deleteType = async (typeId: number) => {
  await API_DOCFLOW.delete(`doc-types/${typeId}`).then((response) => response?.data);
};
