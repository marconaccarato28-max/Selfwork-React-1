import { useParams } from "react-router-dom";

function Detail() {
const { id } = useParams();

return (
<>
<h1>Detail Page</h1>

<p>Post ID: {id}</p>
</>
);
}

export default Detail;