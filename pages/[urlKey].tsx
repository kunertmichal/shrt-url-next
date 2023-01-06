import {useEffect} from "react";
import {useRouter} from "next/router";
import {useQuery} from "react-query";
import {getShortUrl} from "../services/shortUrl";

export default function ShortUrlPage() {
  const router = useRouter()
  const { urlKey } = router.query

  useEffect(() => {
    if (!urlKey) return
    getShortUrl(urlKey as string).then((url) => {
      window.location.href = url;
    })
  }, [urlKey])

  return <div>Loading...</div>;
}
