import Fruit from "./Fruit.jsx";

export default function Fruits() {

   // const fruits = ['apple', 'banana', 'orange', 'grapes'];

    const fruits = [
        { name: 'apple', price: 10, color: 'red', soldout: false },
        { name: 'banana', price: 5, color: 'yellow', soldout: true },
        { name: 'orange', price: 8, color: 'orange of course', soldout: true  },
        { name: 'grapes', price: 4, color: 'purple', soldout: false },


    ]

    return (
        <div>
            <ul>
                {
                    fruits.map(
                        (
                            fruit)=> (
                            //<li key={fruit.name}>{fruit.name} at ${fruit.price} and the color is {fruit.color}</li>

                            <Fruit
                                key={fruit.key}
                                name={fruit.name}
                                price={fruit.price}
                                color={fruit.color}
                                soldout={fruit.soldout}
                            />

                        )
                    )
                }

            </ul>
        </div>
    )

}