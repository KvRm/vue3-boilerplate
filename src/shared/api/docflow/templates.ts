import type { AmoIds, Template } from '@/types/doctemplate.types';
import { API_DOCFLOW } from './api';

export const getTemplates = async (params: AmoIds): Promise<Template[]> => {
  return await API_DOCFLOW.get('doc-templates', { params }).then((response) => response?.data);
};

// export const getTemplateById = async (id: number, params: AmoIds) => {
//   return API_DOCFLOW.get(`doc-templates/root/${id}`, { params }).then(response => response?.data);
// }

export const addTemplate = async (newItem: Template) => {
  await API_DOCFLOW.post('doc-templates', { ...newItem }).then((response) => response?.data);
};

export const updateTemplate = async (id: number, item: Template) => {
  await API_DOCFLOW.put(`doc-templates/${id}`, { ...item }).then((response) => response?.data);
};

export const deleteTemplate = async (id: number) => {
  await API_DOCFLOW.delete(`doc-templates/${id}`).then((response) => response?.data);
};
