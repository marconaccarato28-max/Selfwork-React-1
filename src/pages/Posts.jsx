import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Posts() {
const [posts, setPosts] = useState([]);

useEffect(() => {
async function getPosts() {
const response = await fetch(
"https://jsonplaceholder.typicode.com/posts"
);

const data = await response.json();

setPosts(data);
}

getPosts();
}, []);

return (
<>
<h1>Posts</h1>

{posts.slice(0, 10).map((post) => (
<div key={post.id}>
<h3>{post.title}</h3>

<Link to={`/detail/${post.id}`}>
Vai al dettaglio
</Link>
</div>
))}
</>
);
}

export default Posts;