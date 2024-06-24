import { Imagecomponent } from "../image/imagecomponent";
import { Heading1 } from "../heading/heading";
import Buttoncomponent from "../button/button";
import { Listparentordered } from "../list/listparent";
export const Card=()=>{
    return <div>
        <Heading1/>
        <Imagecomponent/>
        <Listparentordered/>
        <Buttoncomponent/>
    </div>;
};