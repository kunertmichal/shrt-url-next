import {GetServerSidePropsContext} from "next";
import {getShortUrl} from "../services/shortUrl";
import {redirectToUrl} from "../utils";

export default function ShortUrlPage() {
  return <div>Loading...</div>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  if (!context.params?.urlKey) return;
  try {
    const url = await getShortUrl(context.params.urlKey as string);
    return redirectToUrl(url);
  } catch (e) {
    return redirectToUrl('/url-not-found');
  }
}
