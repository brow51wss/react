import {useState} from "react";

export default function Form() {

    //SINGLE INPUT
        // const [name, setName] = useState('')

    //MULTIPLE INPUTS
    const [name, setName] = useState({firstName: "", lastName: ""});

    //SINGLE INPUT
        // function handleChange(e) {
        //     console.log(e.target.value)
        //     setName(e.target.value)
        // }

        // function demo(e) {
        //     return handleChange(e);
        // }

    //MULTIPLE INPUTS
    function handleSubmit(e) {
        e.preventDefault();
        console.log(name);
    }

    return (
        <div>
            {name.firstName} {name.lastName}
            <br/><br/>
            <form>

                {/*// SINGLE INPUT*/}
                {/*<input onChange={(e) => setName(e.target.value)}*/}
                {/*   type="text" value={name} placeholder="First Name" />*/}

                <input onChange={
                    (e) => setName({...name, firstName: e.target.value})
                }
                       type="text" value={name.firstName} placeholder="First Name"/>

                <input onChange={
                    (e) => setName({...name, lastName: e.target.value})
                }
                       type="text" value={name.lastName} placeholder="last Name"/><br/><br/>
                <button onClick={(e) => handleSubmit(e)}>Add</button>
            </form>

        </div>
    )

}