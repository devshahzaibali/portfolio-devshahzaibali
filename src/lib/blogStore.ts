let posts = [
  {
    id: 1,
    title: "Welcome to My Blog!",
    summary:
      "This is the first post on my new portfolio blog. Stay tuned for more updates!",
    date: "2024-06-01",
    slug: "welcome-to-my-blog",
    isNew: true,
    imageUrl: "",
    body: "",
  },
];

export function getPosts() {
  return posts;
}

export function addPost(post) {
  posts = [{ ...post, id: Date.now() }, ...posts];
}

export function updatePost(id, newData) {
  posts = posts.map((p) => (p.id === id ? { ...p, ...newData, id } : p));
}

export function deletePost(id) {
  posts = posts.filter((p) => p.id !== id);
}
