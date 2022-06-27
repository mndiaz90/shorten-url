import { useEffect, useState } from "react";
import { getUrls } from "../api/urls";

type Url = {
  original_url: string;
  short_url: string;
  created_at: string;
  id: number;
  clicks: [];
};

function useUrl() {
  const [loading, setLoading] = useState(false);
  const [urls, setUrls] = useState<Url[]>([]);

  async function getAllUrls() {
    setLoading(true);
    getUrls().then((urls) => {
      setUrls(urls);
      setLoading(false);
    });
  }

  useEffect(() => {
    getAllUrls();
  }, []);

  return { loading, urls, setUrls, getAllUrls };
}

export default useUrl;
