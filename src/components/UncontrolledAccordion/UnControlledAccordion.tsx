import {useState} from "react";

type AccordionPropsType = {
    titleValue: string;
}


function UncontrolledAccordion(props:AccordionPropsType){
    console.log('Accordion rendering')
    const [collapsed, setCollapsed] = useState(false)

    const changeCollapsed = () => setCollapsed(!collapsed)

        return <div>
            <AccordionTitle title={props.titleValue} onClick={changeCollapsed} />
            { !collapsed && <AccordionBody /> }
        </div>
}


type AccordionTitlePropsType = {
    title: string,
    onClick: () => void
}

function AccordionTitle(props:AccordionTitlePropsType){
    console.log('AccordionTitle')
    return(
        <div>
            <h3 onClick={() => { props.onClick()}}>--- {props.title} ---</h3>
        </div>
    )
}

function AccordionBody(){
    console.log('AccordionBody')
    return(
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default UncontrolledAccordion;