import Menu from "./Menu"
import Followers from "./Followers"

import { Avatar } from "./styled/global/Avatar.styled"
import { Text } from "./styled/global/Text.styled"

import { ProfileWrapper, ProfileDetails, ProfileInfo, ProfileTitle, ProfileLink, ProfileEdit } from "./styled/Profile.styled"

const Profile = () => {
  return (
    <ProfileWrapper>

      <ProfileDetails>

        <Avatar width="120" height="120" src="/user-avatar-1.jpg" alt="Benjamin's Clementine Avatar" />

        <ProfileInfo>
          <ProfileTitle>Benjamin Clementine</ProfileTitle>
          <ProfileLink href="#">@benclementine</ProfileLink>
          <ProfileEdit href="#">
              <svg>
                <use href="/sprite-icons.svg#edit" />
              </svg>
              Edit Profile
          </ProfileEdit>
        </ProfileInfo>

        <Menu />

      </ProfileDetails>

      <Followers />

      <Text>
        Cryptocurrencies including Ethereum, Ripple, and Litecoin have all plunged between 20 to 30 percent each, according to CoinMarketCap. Here is the latest Ripple price news and live updates on XRP, bitcoin and Ethereum.
      </Text>

    </ProfileWrapper>
  )
}

export default Profile