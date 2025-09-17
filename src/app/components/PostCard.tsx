import Link from 'next/link';
import { Post } from '../data/posts';
import { formatDate } from '../../utils/formatDate';

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="p-6 bg-white rounded-2xl shadow-sm">
      <header className="flex items-start justify-between">
        <div>
          <h3 className="text-purple-500 font-bold">
            { post.title }
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {formatDate(post.date)} • { post.author }
          </p>
        </div>
      </header>

      
      <p className="mt-4 text-gray-700">{ post.summary }</p>

      <div className="mt-4">
        <Link href={ `/posts/${ post.id }` } className="text-purple-600 font-medium hover:underline">Ler mais →</Link>
      </div>
    </article>
  );
}