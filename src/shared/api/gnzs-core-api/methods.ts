import { API_CORE } from './api';

//types
import type { AccountDataDto, DecodeTokenDto, DNAInfoDto, Markers } from '@/types/initialization.types';
import type { Jwt } from '@/types/iframe.types';
import { GNZS_API_GOOGLE } from '@/stores/constants';
import type { TemplatorVar, EmployedVarTemplate } from '@/types/variable.types';
import type { Catalogs, Constructor } from './type';

export const getDevJwtToken = async (
  xApiToken: string,
  widgetId: number,
  accountId: number,
  userId: any = null,
  data: any = null
): Promise<any> => {
  const params = { account_id: accountId, user_id: userId, data };
  const headers = { 'X-Api-Token': xApiToken };
  try {
    const response = await API_CORE.get(`public/jwt/encode/${widgetId}`, { headers, params });
    return response?.data;
  } catch (e) {
    console.log('error', e);
  }
};

export const getJwtToOtherWidget = async (otherWidgetId: number): Promise<Jwt> => {
  const headers = {
    'Content-Type': 'application/json',
  };
  return API_CORE.get(`public/jwt/${otherWidgetId}`, { headers }).then((response) => response?.data);
};

export const verifyAndDecodeToken = async (widgetId: number): Promise<DecodeTokenDto> => {
  return API_CORE.get(`/public/jwt/verify/${widgetId}`).then((response) => response?.data);
};

export const getAccountInfo = async (force = 0): Promise<AccountDataDto> => {
  return API_CORE.get(`/amo/account/info?force=${force}`).then((response) => response?.data);
};

export const getDNAInfo = async (): Promise<DNAInfoDto> => {
  return API_CORE.get(`/public/account/dna`).then((response) => response?.data?.account);
};

//google
export const getUsersAccount = async () => {
  const headers = {
    'x-api-key': GNZS_API_GOOGLE,
  };
  const response = await API_CORE.get('/google/users', { headers });
  return response.data;
};

export const checkIfUserAdded = async (userHash: string) => {
  const response = await API_CORE.get(`/google/oauth/check/${userHash}`);
  return response.data;
};

export const setDeleteAccount = async (id: number) => {
  const headers = {
    'x-api-key': GNZS_API_GOOGLE,
  };
  await API_CORE.delete(`/google/users/${id}`, { headers });
};
//

export const getMarkersApi = async (lang = 'ru'): Promise<Markers> => {
  const response = await API_CORE.get(`/amo/templator/markers`, { params: { lang } });
  return response.data;
};

export const getConstructorApi = async (lang = 'ru'): Promise<Constructor> => {
  const response = await API_CORE.get(`/amo/templator/constructor`, { params: { lang } });
  return response.data;
};

export const getTemplatorVarsApi = async (): Promise<TemplatorVar[]> => {
  const response = await API_CORE.get(`/amo/templator/vars`);
  return response.data;
};

export const deleteTemplatorVarsApi = async (id: number) => {
  await API_CORE.delete(`/amo/templator/vars`, { data: { ids: [id] } });
};

export const saveTemplatorVarsApi = async (varTemplate: EmployedVarTemplate) => {
  await API_CORE.post(`/amo/templator/vars`, [varTemplate]);
  // if (varTemplate.id) {
  //   const id = String(varTemplate.id)
  //   await API_CORE.post(`/amo/templator/vars`, [{...varTemplate, id}])
  // } else {
  //   await API_CORE.post(`/amo/templator/vars`, [varTemplate])
  // }
};

export const getCatalogsApi = async (page: number): Promise<Catalogs[]> => {
  const limit = 250;
  const response = await API_CORE.get(`/amo/catalogs`, { params: { limit, page } });

  return response.data;
};
