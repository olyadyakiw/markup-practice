import { TabsStyled, TabsItem, TabsLink } from "./styled/Tabs.styled"


const Tabs = () => {
  return (
    <TabsStyled>
        <TabsItem>
            <TabsLink $active>FEED</TabsLink>
        </TabsItem>
        <TabsItem>
            <TabsLink>EXPLORE</TabsLink>
        </TabsItem>
        <TabsItem>
            <TabsLink>DISCUSSIONS</TabsLink>
        </TabsItem>
    </TabsStyled>
  )
}

export default Tabs