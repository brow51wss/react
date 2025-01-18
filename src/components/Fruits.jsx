import Fruit from "./Fruit.jsx";

export default function Fruits() {

   // const fruits = ['apple', 'banana', 'orange', 'grapes'];

    const fruits = [
        { name: 'apple', price: 10, color: 'red' },
        { name: 'banana', price: 5, color: 'yellow' },
        { name: 'orange', price: 8, color: 'orange of course' },
        { name: 'grapes', price: 4, color: 'purple' },


    ]

    return (
        <div>
            <ul>
                {
                    fruits.map(
                        (
                            fruit)=> (
                            //<li key={fruit.name}>{fruit.name} at ${fruit.price} and the color is {fruit.color}</li>

                            <Fruit fruit={fruit} />
                        )
                    )
                }
            </ul>
        </div>
    )

}