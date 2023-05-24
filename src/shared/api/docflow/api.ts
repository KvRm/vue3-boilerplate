import axios from 'axios';
import { useInitializationStore } from '@/stores/initializationStore';

export const API_DOCFLOW = axios.create({
  baseURL: 'http://localhost:3000/',
  validateStatus(status) {
    return status >= 200 && status < 300;
  },
});

API_DOCFLOW.interceptors.request.use((req: any) => {
  req.headers['X-Account-Id'] = useInitializationStore().amoAccountId;
  req.headers['X-Platform-Id'] = useInitializationStore().amoPlatformId;
  req.headers['Account-Id'] = useInitializationStore().accountId;
  req.headers['X-Auth-Token'] = useInitializationStore().token || '';
  return req;
});
