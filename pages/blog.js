import Link from 'next/link';
import posts from '../posts.json';

export default function Blog() {
  return (
    <div>
      <h1 class="text-3xl font-bold underline text-center">Blog</h1>
      <Link href={'/'}>
        <a class="hover:font-bold">Home</a>
      </Link>
      <ul>
        {Object.keys(posts).map((id, index) => {
          return (
            <li key={index}>
              <Link href="/blog/[id]" as={'/blog/' + id}>
                <a class="hover:font-bold">{posts[id].title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
