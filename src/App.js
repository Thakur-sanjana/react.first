// import Buttoncomponent from "./components/button/button.js";
// import { Heading1,Heading2,Heading3,Heading4} from "./components/heading/heading.js";
import Buttoncomponent from "./components/button/button.js";
import { Imagecomponent } from "./components/image/imagecomponent.js";
import { Listparentordered} from "./components/list/listparent.js";
import CustomAccordion from "./components/accordion/accordian.js";
import { DemoCarousel } from "./components/carousel/carousel.js";
// import { FormControl } from "react-bootstrap";
import FormControl from "./components/form/form.js";
const app=()=>{
  return(
    <div>
      <h2>hello</h2>
      {/* <DemoCarousel></DemoCarousel> */}
      <FormControl/>
       {/* <Card/> */}
    {/* <Imagecomponent/>
    //  <Buttoncomponent/>
  //    <Heading1/>
  //    <Heading2/>
  //    <Heading3/>
  //    <Heading4/> 
    //  <Listparentordered/>
  //    <Listparentunordered/> */}
    {/* <Buttoncomponent/>
    <CustomAccordion/> */}
    </div>
  );
//   const isAfterNoon=true;
//   if(isAfterNoon){
//     return(<>
//     <h3>good afternoon</h3>
//     <Imagecomponent/>
//     </>)
//   }else{
//     <>
//     <h3>good evening</h3>
//     </>
//   }
};
export default app;
