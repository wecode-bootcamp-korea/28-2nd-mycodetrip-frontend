import { useState, useEffect } from 'react';

const useFetch = url => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = (fetchUrl = url) => {
    fetch(fetchUrl)
      .then(res => res.json())
      .then(fetchedData => {
        setIsLoading(true);
        setData(fetchedData.result);
      })
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, isLoading, error, fetchData };
};

export default useFetch;
