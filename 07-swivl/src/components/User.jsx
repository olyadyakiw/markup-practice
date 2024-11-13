import { ArrowIcon, UserName, UserAvatar, UserStyled } from "./styled/User.styled"

const User = () => {
  return (
    <UserStyled>
        <UserName>
            Arthur Wood
        </UserName>
        <UserAvatar src="/user-avatar.jpg" alt="Arthur's Wood Avatar" />
        <ArrowIcon>
            <use href="/public/sprite-icons.svg#arrow" />
        </ArrowIcon>
    </UserStyled>
  )
}

export default User