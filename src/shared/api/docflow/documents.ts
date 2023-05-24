import { API_DOCFLOW } from './api';
import type { EntitiesСurrentIds } from '@/types/doctemplate.types';
import type { Document, Paginated } from '@/types/document.types';

type PaginatedDto = {
  page: number;
  limit: number;
  date: null | Date[];
  entityId: string | number;
  templateId: string | number;
  userId: string | number;
  organizationId: string | number;
  documentTypeId: string | number;
};

type CreateDocumentDto = {
  entityType: number;
  entityId: number;
  url: string;
  number: string;
  templateId: number;
  organizationId: number;
  settlementAccountId: number;
  isSigned: string;
  userId: number;
  isDeleted: string;
};

export const getDocuments = async (entityId: number): Promise<Document[]> => {
  const params = { entityId };
  return await API_DOCFLOW.get('documents', { params }).then((response) => response?.data);
};

export const getDocumentContent = async (fileId: string): Promise<any> => {
  return await API_DOCFLOW.get(`documents/content/${fileId}`).then((response) => response?.data);
};

export const changeSign = async (documentId: number, signId: number) => {
  await API_DOCFLOW.post('documents/changeSign', { documentId, signId }).then((response) => response?.data);
};

export const resetSignsToDocument = async (documentId: number) => {
  await API_DOCFLOW.post('documents/resetSigns', { documentId }).then((response) => response?.data);
};

export const getFilterDocuments = async (query: PaginatedDto): Promise<Paginated> => {
  return await API_DOCFLOW.get('documents/filter', { params: { ...query } }).then((response) => response?.data);
};

// export const getDocumentById = async (id: number) => {
//   return API_DOCFLOW.get(`documents/${id}`).then(response => response?.data);
// }

export const addDocument = async (entitiesСurrentIds: EntitiesСurrentIds) => {
  await API_DOCFLOW.post('documents', entitiesСurrentIds).then((response) => response?.data);
};

// export const updateDocument = async (id: number, item: object) => {
//   return API_DOCFLOW.put(`documents/${id}`, { ...item }).then(response => response?.data);
// }

export const deleteDocument = async (id: number) => {
  await API_DOCFLOW.delete(`documents/${id}`).then((response) => response?.data);
};
