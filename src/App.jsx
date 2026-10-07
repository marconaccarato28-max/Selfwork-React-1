import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Detail from "./pages/Detail";

function App() {
return (
<>
<nav>
<Link to="/">Home</Link> |{" "}
<Link to="/posts">Posts</Link>
</nav>

<Routes>
<Route path="/" element={<Home />} />
<Route path="/posts" element={<Posts />} />
<Route path="/detail/:id" element={<Detail />} />
</Routes>
</>
);
}

export default App;