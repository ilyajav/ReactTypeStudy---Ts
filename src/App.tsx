import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UnControlledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UnControlledRating";
import UnControlledOnOff from "./components/UnControlledOnOff/UncontrolledOnOff";
import OnOff from "./components/OnOff/OnOff";
import {Select} from "./components/Select/Select";

//function declaration//

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionValue, setAccordionValue] = useState(false)
    let [on, setOn] = useState(false)
    let [value, setValue] = useState<string>('Select')

    return (
        <div className={"App"}>
            {/*<OnOff on={on} set={setOn} />*/}
            {/*<UnControlledOnOff />*/}
            {/*<UncontrolledAccordion titleValue={"Menu"} />*/}
            {/*<UncontrolledAccordion titleValue={"Users"} />*/}
            {/*<UncontrolledRating />*/}
            {/*<Rating value={1} />*/}
            {/*<Rating value={2} />*/}
            {/*<Rating value={ratingValue} onClick = {setRatingValue} />*/}
            {/*<Accordion titleValue={'Users'}*/}
            {/*           collapsed={accordionValue}*/}
            {/*           clickAccordion={setAccordionValue}*/}
            {/*           items={[*/}
            {/*               {title: 'Valera', value: 1},*/}
            {/*               { title: 'Artem', value: 2 },*/}
            {/*               { title: 'Viktor', value: 3}*/}
            {/*           ]}*/}
            {/*/>*/}
            {/*<Rating value={4} />*/}
            {/*<Rating value={5} />*/}
            <Select value={value} onChange={setValue} items={[
                {title: 'Valera', value: 1},
                { title: 'Artem', value: 2 },
                { title: 'Viktor', value: 3}
            ]} />
        </div>
    );
}

export default App;