import React, { useEffect, useState } from "react";
import ProductService from "../service/productService";

const EditProduct = (props) => {
  const [productForm, setProductForm] = useState({
    name: "",
    imgUrl: "",
    description: "",
    price: "",
  });

  let product = props.dataSelected;
  let id = product.id;

  const handleSubmitEdit = () => {
    ProductService.updateProduct(
      id,
      productForm,
    )
      .then(() => {
        props.newMessage("edit");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (product) {
      setProductForm({
        name: product.name,
        imgUrl: product.imgUrl,
        description: product.description,
        price: product.price,
      });
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full bg-slate-400 h-[100vh] px-5">
      <div className={`xl:max-w-3xl w-full p-5 sm:p-10 rounded-md`}>
        <h1 className={`text-center text-xl sm:text-3xl font-semibold`}>
          Edit Product
        </h1>
        <div className="w-full mt-8">
          <form>
            <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline`}
                type="text"
                defaultValue={productForm?.name}
                onChange={(e) =>
                  setProductForm({ ...productForm, name: e.target.value })
                }
                placeholder="Input Name of Product"
              />
              <input
                className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline`}
                type="text"
                defaultValue={productForm?.imgUrl}
                onChange={(e) =>
                  setProductForm({ ...productForm, imgUrl: e.target.value })
                }
                placeholder="Input Link for Image (ex: http://google.co.id/)"
              />
              <input
                className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline`}
                type="text"
                defaultValue={productForm?.description}
                onChange={(e) =>
                  setProductForm({
                    ...productForm,
                    description: e.target.value,
                  })
                }
                placeholder="Input for Description"
              />
              <input
                className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline`}
                type="text"
                defaultValue={productForm?.price.toString()}
                onChange={(e) =>
                  setProductForm({
                    ...productForm,
                    price: Number(e.target.value),
                  })
                }
                placeholder="Input Price Product (ex: 1500)"
              />
              <div className="flex justify-between">
                <button
                  className="w-1/2  bg-[#4c4645] text-gray-100 py-4 rounded-lg transition-all duration-300 ease-in-out justify-center focus:shadow-outline focus:outline-none"
                  type="button"
                  onClick={handleSubmitEdit}
                >
                  <span className="ml-3">Update</span>
                </button>
                <button
                  className="w-1/2 ml-2 bg-[#efeeed] rounded-lg"
                  onClick={() => props.newMessage("cancelEdit")}
                >
                  <span className="ml-3">Cancel</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditProduct;
