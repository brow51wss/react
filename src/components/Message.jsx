export default function Message() {

    function handlClick() {
        console.log('button clicked');
    }

    function meOver() {
        console.log('mouse over');
    }

    function meOut() {
        console.log('mouse out');
    }

    function meLeave() {
        console.log('mouse leave');
    }


    return (
        <div>

            <button onClick={handlClick} >Click here
            </button>

        </div>
    )
}