import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 class="text-3xl font-bold underline text-center">Home page</h1>
      <Link href={'/blog'}>
        <a class="hover:font-bold">Blog</a>
      </Link>
      <div>
        <Link href={'/aboutus'}>
          <a class="hover:font-bold">About Us</a>
        </Link>
      </div>
    </div>
  );
}
