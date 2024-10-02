import axios from "axios";

const API_HOST = "http://localhost:3000/data";
const HTTP_CONTENT_TYPE_JSON = "application/json";

class ProductService {
  static getListProduct = async () => {
    const response = await axios({
      url: `${API_HOST}`,
      method: "get",
      headers: { "content-type": HTTP_CONTENT_TYPE_JSON},
      data: null,
    });

    let data = { data: response.data };

    return data;
  };

  static deleteProduct = async ({ id }) => {
    let url = `${API_HOST}/${id}`;

    return axios({
      url,
      method: 'delete',
      headers: {
        'content-type': HTTP_CONTENT_TYPE_JSON,
      },
    });
  };

  
}

export default ProductService;
