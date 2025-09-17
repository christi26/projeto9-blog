export type Post = { 
    id: number;
    title: string;
    summary: string;
    content: string;
    date: string;
    author: string;
};

export const posts: Post[] = [ 
    {
        id: 1,
        title: "Post 1",
        summary: "Resumo do post 1...",
        content: "Aqui tem o conteúdo completo do post 1 que você pode acompanhar sem perder nada da notícia...",
        date: "01-01-2025",
        author: "Chris",
    },
    {
        id: 2,
        title: "Post 2",
        summary: "Resumo do post 2...",
        content: "Aqui tem o conteúdo completo do post 2 que você pode acompanhar sem perder nada da notícia...",
        date: "02-10-2025",
        author: "Chris",
    },
    {
        
        id: 3,
        title: "Post 3",
        summary: "Resumo do post 3...",
        content: "Aqui tem o conteúdo completo do post 3 que você pode acompanhar sem perder nada da notícia...",
        date: "03-05-2025",
        author: "Chris",
    },
    {
        
        id: 4,
        title: "Post 4",
        summary: "Resumo do post 4...",
        content: "Aqui tem o conteúdo completo do post 4 que você pode acompanhar sem perder nada da notícia...",
        date: "04-09-2025",
        author: "Chris",
    },
    {
        
        id: 5,
        title: "Post 5",
        summary: "Resumo do post 5...",
        content: "Aqui tem o conteúdo completo do post 5 que você pode acompanhar sem perder nada da notícia...",
        date: "05-20-2025",
        author: "Chris",
    },
    {
        
        id: 6,
        title: "Post 6",
        summary: "Resumo do post 6...",
        content: "Aqui tem o conteúdo completo do post 6 que você pode acompanhar sem perder nada da notícia...",
        date: "09-05-2025",
        author: "Chris",
    }
   

] 

// aqui a mudança foi para ordenar as postagens pela data, da mais recente para a mais antiga
export function getAllPosts(): Post[] {
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// aqui a mudança foi para garantir que o id seja comparado como número
export function getPostById(id: string): Post | undefined {
    return posts.find(post => post.id === parseInt(id));
}

