import { useInitializationStore } from '@/stores/initializationStore';
import { API_CORE } from './api';

export const createBaseFolder = async () => {
  const data = {
    amoAccountId: useInitializationStore().amoAccountId || '',
    lang: 'ru',
  };
  await API_CORE.post(`/google/folder/base/create`, data);
};
