import axios from "axios";

const API_HOST = "http://localhost:3000/data";
const HTTP_CONTENT_TYPE_JSON = "application/json";

class ProductService {
  static getListProduct = async () => {
    console.log('masuk sini')
    const response = await axios({
      url: `${API_HOST}`,
      method: "get",
      headers: { "content-type": HTTP_CONTENT_TYPE_JSON},
      data: null,
    });

    console.log('response list->', response)
    let data = { data: response.data };

    return data;
  };

  
}

export default ProductService;
