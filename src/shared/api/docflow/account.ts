import type { AccountSettings } from '@/types/initialization.types';
import { API_DOCFLOW } from './api';

export const getApiAccountSettings = async (): Promise<AccountSettings> => {
  return await API_DOCFLOW.get('accounts/settings').then((response) => response?.data);
};

export const updateApiAccountSettings = async (settings: AccountSettings) => {
  await API_DOCFLOW.patch('accounts/settings', { settings }).then((response) => response?.data);
};

export const initAccount = async (): Promise<number> => {
  return await API_DOCFLOW.get('accounts/init').then((response) => response?.data);
};
