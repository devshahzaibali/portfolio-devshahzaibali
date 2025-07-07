interface BlogPost {
  id: number;
  title: string;
  summary: string;
  date: string;
  slug: string;
  isNew: boolean;
  imageUrl: string;
  body: string;
}

let posts: BlogPost[] = [
  {
    id: 1,
    title: "Building a Modern E-commerce Platform with Next.js",
    summary: "Learn how to create a full-stack e-commerce application using Next.js, TypeScript, and modern web technologies. This comprehensive guide covers everything from setup to deployment.",
    date: "2024-01-15",
    slug: "building-modern-ecommerce-nextjs",
    isNew: true,
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    body: `
      <h2>Introduction</h2>
      <p>Building a modern e-commerce platform requires careful planning and the right technology stack. In this post, we'll explore how to create a robust e-commerce application using Next.js and TypeScript.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Server-side rendering for better SEO</li>
        <li>TypeScript for type safety</li>
        <li>Responsive design with Tailwind CSS</li>
        <li>Secure payment integration</li>
        <li>Real-time inventory management</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>The first step is setting up your Next.js project with TypeScript. We'll use the latest features including App Router and Server Components for optimal performance.</p>
      
      <h2>Conclusion</h2>
      <p>By following this guide, you'll have a solid foundation for building scalable e-commerce applications that provide excellent user experience and performance.</p>
    `,
  },
  {
    id: 2,
    title: "Mastering React Game Development: Building a Tic-Tac-Toe Game",
    summary: "Discover the fundamentals of game development in React by building a complete Tic-Tac-Toe game. Learn about state management, game logic, and user interaction patterns.",
    date: "2024-01-10",
    slug: "react-game-development-tic-tac-toe",
    isNew: true,
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    body: `
      <h2>Game Development in React</h2>
      <p>React provides an excellent foundation for building interactive games. In this tutorial, we'll create a fully functional Tic-Tac-Toe game that demonstrates key React concepts.</p>
      
      <h2>Core Concepts Covered</h2>
      <ul>
        <li>State management with useState</li>
        <li>Component composition and reusability</li>
        <li>Event handling and user interactions</li>
        <li>Game logic and win conditions</li>
        <li>Responsive design for mobile play</li>
      </ul>
      
      <h2>Building the Game Board</h2>
      <p>We'll start by creating the game board component and implementing the basic game mechanics. Each square will be a separate component that can be clicked to place X or O.</p>
      
      <h2>Implementing Game Logic</h2>
      <p>The game logic involves checking for winning combinations, handling draws, and managing turn-based gameplay. We'll use arrays and mathematical patterns to detect wins efficiently.</p>
      
      <h2>Adding Features</h2>
      <p>Once the basic game is working, we'll add features like game history, move highlighting, and a restart button to enhance the user experience.</p>
      
      <h2>Conclusion</h2>
      <p>This project demonstrates how React can be used for more than just web applications. The same principles can be applied to create more complex games and interactive experiences.</p>
    `,
  },
];

export function getPosts(): BlogPost[] {
  return posts;
}

export function addPost(post: Omit<BlogPost, 'id'>): void {
  posts = [{ ...post, id: Date.now() }, ...posts];
}

export function updatePost(id: number, newData: Partial<BlogPost>): void {
  posts = posts.map((p) => (p.id === id ? { ...p, ...newData, id } : p));
}

export function deletePost(id: number): void {
  posts = posts.filter((p) => p.id !== id);
}
