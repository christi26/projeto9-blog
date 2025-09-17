import LikeButton from '../../components/LikeButton';
import React from "react";
import { getPostById } from '../../data/posts';
import { notFound } from "next/navigation";

type Props = {
    params: { id: string };
}

export default async function PostPage({ params }: Props) { 
    const { id } = await params;
    const post = getPostById(id);

    if (!post) return notFound();

    
    return (
        <article className="prose lg:prose-xl">
      <header>
        <h1 className="text-3xl font-bold">{ post.title }</h1>
        <p className="text-sm text-gray-500">{ new Date(post.date).toLocaleDateString('pt-BR') } — { post.author }</p>
      </header>

      <section className="mt-6">
        <div className="whitespace-pre-wrap">{ post.content }</div>
      </section>

      <div className="mt-8">
        <LikeButton key={ `like-${ post.id }` } />
      </div>
    </article>
    );
}