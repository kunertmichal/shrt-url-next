import Link from 'next/link';

export default function Page404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-7xl font-bold text-white">404</h1>
      <p className="mb-6 mt-2">Your link is invalid or has expired.</p>
      <Link
        href="/"
        className="btn btn-primary"
      >
        Go back
      </Link>
    </div>
  );
}
