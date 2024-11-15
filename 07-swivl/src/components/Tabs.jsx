import { useState } from 'react';
import { TabsStyled, TabsItem, TabsLink } from "./styled/Tabs.styled"

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('FEED');

  const tabs = ['FEED', 'EXPLORE', 'DISCUSSIONS'];

  return (
    <TabsStyled>
      {tabs.map((tab) => (
        <TabsItem key={tab}>
          <TabsLink
            $active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            role="button"
            tabIndex={0}
            aria-pressed={activeTab === tab}
          >
            {tab}
          </TabsLink>
        </TabsItem>
      ))}
    </TabsStyled>
  )
}

export default Tabs