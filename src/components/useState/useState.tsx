import React, {useMemo, useState} from "react";

function generateData(){
    console.log('generateData')
    return 1
}

export const ExampleState = () =>{
    console.log('Example')

    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState<number>(generateData)

    const changer = (state: number) => state + 1

    return <>
        <button onClick={() => setCounter(state => state + 1)}> + </button>
        {counter}
    </>
}
