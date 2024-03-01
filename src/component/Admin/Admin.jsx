import React, { useState, useEffect } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);
  const [search, setSearch] = useState("");
  //  const adProduct = useSelector((state) => state.auth.product);
  //  console.log('adProduct', adProduct);

  //  const [product, setProduct] = useState({
  //    name: adProduct.name,
  //    client: adProduct.client,
  //  });

  useEffect(() => {
    fetch("https://api.omnimoveexpress.org/products", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("these are the products", res.products);
        setProducts(res.products);
      })
      .catch((err) => console.log("errrrrrrr", err));
  }, []);

  return (
    <div>
      <section>
        <h1 className="text-center text-3xl py-5 tracking-widest text-[#0f2b53]">
          All Products
        </h1>
        <div className="flex md:justify-end justify-center mx-5 ">
          <Link
            to="/admin/createNewProduct"
            className="bg-[#fa4612] w-fit px-5 py-2 rounded-xl text-gray-200 shadow-md shadow-gray-400 focus:shadow focus:shadow-gray-300 hover:shadow-gray-300 hover:shadow-md
          focus:text-white"
          >
            Create New Product
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 mx-5 lg:gap-10 gap-6 lg:mx-28 my-5">
          {products
            .filter((product) => {
              if (search === "") {
                return product;
              } else if (
                product.name.toLowerCase().includes(search.toLowerCase()) ||
                product.clientName
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                product.order.toLowerCase().includes(search.toLowerCase())
              ) {
                return product;
              }
            })
            .map((product, index) => {
              return (
                <Product key={product.id} product={product} index={index + 1} />
              );
            })}
          <Product />
        </div>
      </section>
    </div>
  );
};

export default Admin;
