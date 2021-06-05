import React, {KeyboardEvent, useEffect, useState} from "react";
import styles from './Select.module.css'

type ItemType = {
    title: string;
    value: number
}

type SelectPropsType = {
    value: string;
    onChange: (value: string) => void;
    items: ItemType[]
}

export function Select(props:SelectPropsType){
    let [show, setShow] = useState<boolean>(false)
    let [hoveredElement, setHoveredElement] = useState(props.value)

    const usersInfo = () =>{
      setShow(!show)
    }

    const selectedItem = props.items.find(i => i.title === props.value)
    const hoveredItem = props.items.find(i => i.title === hoveredElement)

    useEffect(() => {
        setHoveredElement(props.value)
    }, [props.value])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'ArrowDown' || e.key === 'ArrowUp' ) {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].title === hoveredElement) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.title)
                        return
                    }
                }
            }

            if (!selectedItem) {
                props.onChange(props.items[0].title)
            }
        }

        if(e.key === 'Enter' || e.key === 'Escape'){
            setShow(false)
        }
    }

    return (
        <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
            <div onMouseEnter={usersInfo}>{props.value}</div>
            <div className={styles.items}>
            { show && props.items.map((i, index) => {
                const changeName = () => {
                    props.onChange(i.title)
                    setShow(!show)
                }
                return <div onMouseEnter={() => {setHoveredElement(i.title)}}
                            className={styles.item + " " + (hoveredItem === i ? styles.selected : '')}
                            key={index}
                            onClick={changeName}>{i.title}</div>
            })}
            </div>
        </div>
    )
}