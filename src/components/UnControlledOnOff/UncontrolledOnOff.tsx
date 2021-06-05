import {useState} from "react";

function UnControlledOnOff() {
    console.log('OnOff rendering')
    let [on, setOn] = useState(false) // hook with init value
    console.log(`on ${on}`)

    const onStyle = {
        width: '    30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: !on ? 'red' : 'white'
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    };

    const onClicked = () => {
        {
            setOn(true)
        }
    }

    const offClicked = () => {
        setOn(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}> On
            </div>
            <div style={offStyle} onClick={offClicked}> Off
            </div>
            <div style={indicatorStyle}/>
        </div>
    )
}

export default UnControlledOnOff;