import React, {FC, useEffect, useState} from "react";


type PropsType = {}

const getTwoDigitsString = (number: number) => number < 10 ? '0' + number : number

export const Clock: FC<PropsType> = (props) =>{

    const [data, setData] = useState(new Date())

    useEffect(() =>{
        const intervalID = setInterval(() =>{
            setData(new Date())
        }, 1000)

        return () =>{
            clearInterval(intervalID)
        }
    }, [])

    return <div>
        <span>{getTwoDigitsString(data.getHours())}</span>
        :
        <span>{getTwoDigitsString(data.getMinutes())}</span>
        :
        <span>{getTwoDigitsString(data.getSeconds())}</span>
    </div>
}