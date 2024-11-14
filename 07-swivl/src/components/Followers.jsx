import { FollowersList, FollowersItem, FollowersNumber } from "./styled/Followers.styled"

const Followers = () => {
  return (
    <FollowersList>
        <FollowersItem>
          <FollowersNumber>45</FollowersNumber>
          synths
        </FollowersItem>
        <FollowersItem>
          <FollowersNumber>110</FollowersNumber>
          followers
        </FollowersItem>
        <FollowersItem>
          <FollowersNumber>322</FollowersNumber>
          following
        </FollowersItem>
    </FollowersList>
  )
}

export default Followers