//function Hello({name, message, age, seatNumbers}) {
function Hello({person}) {

    //deconstruct props
   // const {name, message, age} = props



   // function getage() {
        // return !props.age || props.age < 1 ? null : <span>{props.age} years old</span>;
     //   return !age || age < 1 ? null : <span>{age} years old</span>;

  //  }

    return (

        <div>

            <h1>{person.message} {person.name} you have</h1>
        </div>
    )
}

export default Hello