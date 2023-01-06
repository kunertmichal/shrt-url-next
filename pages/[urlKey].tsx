import {GetServerSidePropsContext} from "next";
import {getUrlKey} from "../services/urlKeys";

export default function ShortUrlPage() {
  return <div>Loading...</div>;
}

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
  if (!params?.urlKey) return;
  try {
    const url = await getUrlKey(params.urlKey as string);
    return {
      redirect: {
        destination: url,
        permanent: true,
      }
    }
  } catch (e) {
    return {
      notFound: true,
      props: {},
    }
  }
}
