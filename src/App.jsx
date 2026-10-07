import { useState } from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import List from "./components/list";
import Counter from "./components/counter";
import Form from "./components/Form";

function App() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [user, setUser] = useState(null);

function handleSubmit(e) {
e.preventDefault();

setUser({
name,
email,
});
}

return (
<>
<Navbar />
<Header />

<List>
<List.Item>Marco</List.Item>
<List.Item>Luca</List.Item>
<List.Item>Anna</List.Item>
<List.Item>Mario</List.Item>
</List>

<Counter />

<Form onSubmit={handleSubmit}>
<Form.Input
type="text"
placeholder="Nome"
value={name}
onChange={(e) => setName(e.target.value)}
/>

<Form.Input
type="email"
placeholder="Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>

<Form.Button>
Invia
</Form.Button>
</Form>

{user && (
<div>
<h3>Dati Utente</h3>
<p>Nome: {user.name}</p>
<p>Email: {user.email}</p>
</div>
)}
</>
);
}

export default App;