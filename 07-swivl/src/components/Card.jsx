/* eslint-disable react/prop-types */
import { Avatar } from './styled/global/Avatar.styled'

import Stats from './Stats'

import { CardWrapper, CardTitle, CardTop, CardBottom, CardUser, CardName, CardShare, CardTag  } from "./styled/Cards.styled"

const Card = ({ title, name, shared = false, weblink = false, tag }) => {
  return (
    <CardWrapper>
        {shared ? (
            <CardTop>
                
                {weblink ? 
                    <svg> 
                        <use href="/sprite-icons.svg#share" />
                    </svg> 
                    : null
                }
                {weblink ? "Shared via weblink" : "Shared to"}

                {!weblink && <CardTag href="#">{tag}</CardTag>}
            </CardTop>
        ) : null}
        <CardTitle>{title}</CardTitle>
        <CardBottom>
            <CardUser>
                <Avatar src='/user-avatar-default.svg' width='16px' height='16px' alt="Gregory's Watkins Avatar" />
                <CardName href="#">{name}</CardName>
            </CardUser>
            {shared ? <Stats /> : <CardShare> Share </CardShare>}
        </CardBottom>
    </CardWrapper>
  )
}

export default Card
