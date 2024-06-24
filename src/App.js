import Buttoncomponent from "./components/button/button.js";
import { Heading1,Heading2,Heading3,Heading4} from "./components/heading/heading.js";
import { Imagecomponent } from "./components/image/imagecomponent.js";
import { Listparentordered, Listparentunordered } from "./components/list/listparent.js";
import {Card} from "./components/card/card.js";
const app=()=>{
  return(
    <div>
      <Card/>
      {/* <Imagecomponent/>
     <Buttoncomponent/>
     <Heading1/>
     <Heading2/>
     <Heading3/>
     <Heading4/>
     <Listparentordered/>
     <Listparentunordered/> */}
    </div>
  );
};
export default app;
