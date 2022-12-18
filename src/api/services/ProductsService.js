import { http } from "../../http-common";

const api = new http();

class ProductService {

  async addProduct(newProduct) {
    const data = await api.create("/dispatchData", newProduct);
    return data
  }

  async getAllProducts() {
    // const data = await api.get("/dispatchData");
    const data = await api.get("http://localhost:4000/files");
    return data
  }

  async updateProduct(info) {
    const data = api.update("/updateCylinderStatus", info);
    return await data;
  }

  async deleteProduct(info) {
    const data = api.update("/updateCylinderStatus", info);
    return await data;
  }


}

export default new ProductService();