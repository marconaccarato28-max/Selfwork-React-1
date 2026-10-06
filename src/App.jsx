import Navbar from "./components/navbar";
import Header from "./components/header";
import List from "./components/list";

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
</>
);
}

export default App;