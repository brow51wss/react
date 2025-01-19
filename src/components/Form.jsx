import {useState} from "react";

export default function Form() {

    const [name, setName] = useState('')

    function handleChange() {
        console.log("Change")
    }

    return (
        <div>

            <form>
                <input onChange={handleChange} type="text" value={name} placeholder="First Name" />
            </form>

        </div>
    )

}