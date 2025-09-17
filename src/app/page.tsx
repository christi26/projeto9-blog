import PostCard from '../app/components/PostCard';
import { getAllPosts } from '../app/data/posts';

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Meu Blog Pessoal</h2>

      <div className="grid gap-6">
        {posts.map((post) => (
          <PostCard key={ post.id } post={ post } />
        ))}
      </div>
      
    </section>
  );
}
