import React, {useState} from "react";

export function UncontrolledRating(){
    console.log('Rating')
    const [starCounter, setStarCounter] = useState(0)

    return (
        <div>
            <Star starCounter={ starCounter > 0 } setValue={ () => setStarCounter(1)}  />
            <Star starCounter={ starCounter > 1 } setValue={ () => setStarCounter(2)}  />
            <Star starCounter={ starCounter > 2 } setValue={ () => setStarCounter(3)}  />
            <Star starCounter={ starCounter > 3 } setValue={ () => setStarCounter(4)}  />
            <Star starCounter={ starCounter > 4 } setValue={ () => setStarCounter(5)}  />
        </div>
    )
}

type StarPropsType = {
    starCounter: boolean;
    setValue: () => void
}

function Star(props: StarPropsType){
    return <span onClick={() => {props.setValue()}}>
        { props.starCounter ? <b>star </b> : 'star ' }
    </span>

}