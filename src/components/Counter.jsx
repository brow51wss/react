import {useState} from "react";

export default function Counter() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('John Doe')
    const [incrementBy,setIncrementBy] = useState(1)

    function increment() {
        setCount(count + incrementBy)
    }
    function decrement() {
        setCount(count - incrementBy)
    }

    function changeName() {
        setName("Doe John");
    }

    function increaseIncrement() {
        setIncrementBy(incrementBy + 1)
    }

    function decreaseIncrement() {
        setIncrementBy(incrementBy - 1)
    }

    return (
        <div>
            <h1>Count value is: {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <h2>We are incrementing the value by: {incrementBy}</h2>
            <button onClick={increaseIncrement}>+</button>
            <button onClick={decreaseIncrement}>-</button>
            <br/><br/>
            <h2>Name is: {name}</h2>
            <button onClick={changeName}>Change Name</button>


        </div>
    )
}