import React from "react";
import Politicalparty from "./Politicalparty";
import Politicaltool from "./Politicaltool";
import Politicalvolunteer from "./Politicalvolunteer";
import Politicscontainer from "./Politicscontainer";
import Politicsmobile from "./Politicsmobile";
import Politicsreliable from "./Politicsreliable";
import Politictarget from "./Politictarget";


export default function Politics () {
 
  return (
    <div>
    
      <Politicscontainer />
      <Politicalparty />
      <Politicsmobile />
      <Politicalvolunteer />
      <Politicaltool />
      <Politicsreliable />
      <Politictarget />
     
    </div>
  );
}
