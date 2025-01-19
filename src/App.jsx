import Hello from './components/Hello'
import Fruits from "./components/Fruits.jsx";
import ConditionalComponent from "./components/ConditionalComponent.jsx";
import Message from "./components/Message.jsx";
import Counter from "./components/Counter.jsx";
import Form from "./components/Form.jsx";

function App() {


    const person = {

        name: "John",
        message: "Hello",
        age: 5,
        seatNumbers: [1,4,7]
    }

    return (
        <div className="App">
            {/*<Hello person={person} />*/}
            {/*<Fruits  />*/}
            {/*<ConditionalComponent />*/}
            {/*<Message />*/}
            {/*<Counter />*/}
            <Form />

        </div>
    )

}

export default App
