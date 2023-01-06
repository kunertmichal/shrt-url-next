export function redirectToUrl(url: string) {
  return {
    redirect: {
      destination: url,
      permanent: false
    }
  }
}
