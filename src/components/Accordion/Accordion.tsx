type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    clickAccordion: (value: boolean) => void;
    items: ItemType[];
}

type ItemType = {
    title: string,
    value: any
}

function Accordion(props:AccordionPropsType){
        return <div>
            <AccordionTitle title={props.titleValue}
                            clickAccordion={props.clickAccordion}
                            value={props.collapsed}
            />
            { !props.collapsed && <AccordionBody items={props.items} /> }
        </div>
}


type AccordionTitlePropsType = {
    title: string
    clickAccordion: (value: boolean) => void
    value: boolean;
}

function AccordionTitle(props:AccordionTitlePropsType){
    return(
        <div>
            <h3 onClick={() => {props.clickAccordion(!props.value)}}>--- {props.title} ---</h3>
        </div>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
}

function AccordionBody(props: AccordionBodyPropsType){
    return(
        <div>
            <ul>
                { props.items.map((i, index) => <li onClick={() =>
                    console.log(`some item was clicked ${i.value}`)} key={index}>{i.title}</li>)}
            </ul>
        </div>
    )
}

export default Accordion;