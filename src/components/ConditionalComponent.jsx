import Welcome from "./Welcome.jsx";
import Code from "./Code.jsx";

export default function ConditionalComponent()
{

    const display = true

    return display ? (<Welcome />) : (<Code />);


}