import { projects } from "../portfolio";

export async function getAllPosts() {
  // const response = await fetch(
  //   `https://portfolio-c585b-default-rtdb.europe-west1.firebasedatabase.app/posts.json`
  // );
  // const data = await response.json();

  const data = projects;

  const posts = [];

  for (const key in data) {
    posts.push({
      id: key,
      ...data[key],
    });
  }

  return posts;
}

export async function getPostById(id) {
  const allPosts = await getAllPosts();
  return allPosts.find((post) => post.id === id);
}
