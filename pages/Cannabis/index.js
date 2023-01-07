import React from "react";


import Cannabisoverview from "./Cannabisoverview";
import Cannabissolution from "./Cannabissolution";

import { Cannabiscontainer } from "./Cannabiscontainer";
import { Cannabiscustomersection } from "./Cannabiscustomersection";
import { Cannabisadmin } from "./Cannabisadmin";
import { Cannabisdrive } from "./Cannabisdrive";

export default function Cannabis() {


  return (
    <div>
      <Cannabiscontainer />
      <Cannabissolution />
      <Cannabisoverview />
      <Cannabiscustomersection />
       <Cannabisadmin />
      <Cannabisdrive />
      
    </div>
  );
}
