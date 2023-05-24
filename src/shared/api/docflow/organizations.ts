import type { CurrItem, Organization } from '@/types/organizations.types';
import { API_DOCFLOW } from './api';

export const getOrganizations = async (): Promise<Organization[]> => {
  return await API_DOCFLOW.get('organizations').then((response) => response?.data);
};

// export const getOrganizationById = async (id: number) => {
//   return API_DOCFLOW.get(`organizations/${id}`).then(response => response?.data);
// }

export const addOrganization = async (newItem: CurrItem) => {
  await API_DOCFLOW.post('organizations', { ...newItem }).then((response) => response?.data);
};

export const updateOrganization = async (id: number, item: CurrItem) => {
  await API_DOCFLOW.put(`organizations/${id}`, { ...item }).then((response) => response?.data);
};

export const deleteOrganization = async (id: number) => {
  await API_DOCFLOW.delete(`organizations/${id}`).then((response) => response?.data);
};
