import { useState } from "react";

import { SwitcherWrapper, SwitcherTitle, SwitcherButton, SwitcherLabel, SwitcherInput } from "./styled/Switcher.styled"

const Switcher = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <SwitcherWrapper>
      <SwitcherTitle>Public</SwitcherTitle>
      <SwitcherButton>
        <SwitcherInput type="checkbox" checked={isChecked} onChange={handleToggle} />
        <SwitcherLabel />
      </SwitcherButton>
      <SwitcherTitle>Private</SwitcherTitle>
    </SwitcherWrapper>
  )
}

export default Switcher