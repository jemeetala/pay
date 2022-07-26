import Axios from "axios";
const defaultAxios = Axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer A21AAKJvxnUgfacQn3poucmuyRg8uOxpDQW3RehWi2Vp4PoFMOb42lHkYGnc2y0rdXfdlGZVJqCUQHIE7WI2ZEkVDIF9REAmg",
  },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const getProducts = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://api-m.sandbox.paypal.com/v1/catalogs/products`,
    method: "get",
    params: { page_size: "2", page: "1", total_required: "true", ...params },
    headers,
    data,
  });
};
