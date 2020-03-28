import axios from "axios";

import API from "@/shared/constants/api.const";

const apiService = () => {
  const { baseUrl, timeout } = API;
  const { create } = axios;

  const baseApi = create({
    baseURL: baseUrl,
    timeout
  });

  return { baseApi };
};

export default apiService;
