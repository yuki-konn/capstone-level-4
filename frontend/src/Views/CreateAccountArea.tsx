import React, { useEffect, useState } from "react";
import { CreateAccountModal } from "./CreateAccountModal";

export function CreateAccountArea() {
  const [button, setButton] = useState(<></>);

  const [didMount, setDidMount] = useState(false);
  useEffect(componentDidMount, []);

  return <>{button}</>;

  function componentDidMount() {
    console.log("CreateAccountArea: Mount Phase");
    setDidMount(true);

    setButton(<CreateAccountModal />);
  }
}
