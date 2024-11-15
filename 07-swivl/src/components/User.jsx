import { ArrowIcon, UserName, UserStyled } from "./styled/User.styled"
import { Avatar } from './styled/global/Avatar.styled'

const User = () => {
  return (
    <UserStyled>
        <UserName>Arthur Wood</UserName>
        <Avatar width="32" height="32" src="/user-avatar.jpg" alt="Arthur's Wood Avatar" />
        <ArrowIcon>
            <use href="/sprite-icons.svg#arrow" />
        </ArrowIcon>
    </UserStyled>
  )
}

export default User