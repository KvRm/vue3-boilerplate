import type { NewSettlement, Settlement } from '@/types/settlement.types';
import { API_DOCFLOW } from './api';

export const getSettlements = async (): Promise<Settlement[]> => {
  return await API_DOCFLOW.get('settlement-accounts').then((response) => response?.data);
};

export const getSettlementById = async (id: number): Promise<Settlement> => {
  return await API_DOCFLOW.get(`settlement-accounts/${id}`).then((response) => response?.data);
};

export const addSettlement = async (newItem: NewSettlement) => {
  await API_DOCFLOW.post('settlement-accounts', { ...newItem }).then((response) => response?.data);
};

export const updateSettlement = async (id: number, item: Settlement) => {
  await API_DOCFLOW.put(`settlement-accounts/${id}`, { ...item }).then((response) => response?.data);
};

export const deleteSettlement = async (id: number) => {
  await API_DOCFLOW.delete(`settlement-accounts/${id}`).then((response) => response?.data);
};
