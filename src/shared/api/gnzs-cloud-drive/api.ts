import axios from 'axios';
import { useInitializationStore } from '@/stores/initializationStore';
import { GNZS_WIDGET_ID } from '@/stores/constants';

export const API_CORE = axios.create({
  baseURL: ' https://cloud-drives.gnzs.ru',
  validateStatus(status) {
    return status >= 200 && status < 300;
  },
});

API_CORE.interceptors.request.use((req: any) => {
  req.headers['X-Account-Id'] = useInitializationStore().amoAccountId || '';
  req.headers['X-Widget-Id'] = GNZS_WIDGET_ID;
  req.headers['X-Auth-Token'] = useInitializationStore().token || '';
  return req;
});
