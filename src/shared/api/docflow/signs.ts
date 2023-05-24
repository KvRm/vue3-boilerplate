import { API_DOCFLOW } from './api';
import type { GroupsDropdown, Sign } from '@/types/sign.types';

interface saveSign {
  name: string;
  url: string;
  accessUsers: GroupsDropdown;
}

export const getSignsApi = async (): Promise<Sign[]> => {
  return await API_DOCFLOW.get('signs').then((response) => response?.data);
};

export const createSignApi = async (data: saveSign) => {
  await API_DOCFLOW.post('signs', data).then((response) => response?.data);
};

export const updateSignApi = async (id: number, data: saveSign) => {
  await API_DOCFLOW.patch(`signs/${id}`, data).then((response) => response?.data);
};

export const deleteSignApi = async (id: number) => {
  await API_DOCFLOW.delete(`signs/${id}`).then((response) => response?.data);
};
