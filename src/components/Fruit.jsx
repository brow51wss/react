export default function Fruit({key, name, price, color, soldout}) {



    return (
        // <div>{name}: <b>{price}</b> {color}</div>

        // <>
        //     {price > 5 ? (<li>"too expensive"</li>) : (null)}
        // </>

        <>
            <li>
                {name} {price} {soldout ? ("soldout") : ("")}
            </li>
        </>
)
}