import { useState } from "react";

function LoadingData() {
const [users, setUsers] = useState([]);

async function getUsers() {
const response = await fetch(
"https://jsonplaceholder.typicode.com/users"
);

const data = await response.json();

setUsers(data);
}

return (
<>
<button onClick={getUsers}>
Carica Utenti
</button>

<ul>
{users.map((user) => (
<li key={user.id}>
{user.name} - {user.email}
</li>
))}
</ul>
</>
);
}

export default LoadingData;