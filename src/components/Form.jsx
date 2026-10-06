import { useState } from "react";
 
function Form() {
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
<form onSubmit={handleSubmit}>
<input
type="text"
placeholder="Nome"
value={name}
onChange={(e) => setName(e.target.value)}
/>
 
<input
type="email"
placeholder="Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>

<button type="submit">
Invia
</button>
</form>

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

export default Form;