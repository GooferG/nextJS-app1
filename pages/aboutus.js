import Link from 'next/link';

export default function AboutUs() {
  return (
    <div>
      <h1 class="text-3xl font-bold underline text-center">About Us</h1>
      <Link href={'/'}>
        <a class="hover:font-bold">Home</a>
      </Link>
      <div>
        <h2 class="italic">Our story started here...</h2>
      </div>
    </div>
  );
}
