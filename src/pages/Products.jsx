import React from "react";
import Layout from "../components/Layout";
import { useFetcher } from "../hooks/useFetcher";

export default function Products() {
  const { data, loading, error, trick } = useFetcher(
    "https://fakestoreapi.com/products"
  );

  trick();

  if (error) return alert("Error Fetching DData");

  if (loading)
    return (
      <Layout>
        <div className='h-full w-full flex justify-center items-center'>
          Loading...
        </div>
      </Layout>
    );

  return (
    <Layout>
      <div className='grid grid-cols-4'>
        {data.map((product) => {
          // title
          // image
          // price
          return <h1>{product.title}</h1>;
        })}
      </div>
    </Layout>
  );
}
