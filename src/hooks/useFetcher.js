import React from "react";

export const useFetcher = (url) => {
  const [data, setData] = React.useState(undefined);
  const [loading, setLoading] = React.useState(true);
  const [err, setErr] = React.useState(false);

  React.useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (err) {
        setErr(true);
      }
    };

    getProducts();
  }, []);

  return { data, loading, error: err };
};
