import Navbar from "./components/navbar";
import Header from "./components/header";
import List from "./components/list";
import Counter from "./components/counter";
import Form from "./components/Form";

function App() {
const names = [
"Marco",
"Luca",
"Anna",
"Mario"
];

return (
<>
<Navbar />
<Header />
<List names={names} />
<Counter />
<Form />
</>
);
}

export default App;
