import Hello from './components/Hello'
import Fruits from "./components/Fruits.jsx";

function App() {


    const person = {

        name: "John",
        message: "Hello",
        age: 5,
        seatNumbers: [1,4,7]
    }

    return (
        <div className="App">
            <Hello
                person={person}
            />

            <Fruits  />

        </div>
    )

}

export default App
