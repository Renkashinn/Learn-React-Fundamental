export const posts = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos');
};

export const postById = ({ params }) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
};
