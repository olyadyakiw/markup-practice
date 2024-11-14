import { ActionsStyled, ActionIcon } from "./styled/Actions.styled"

const Actions = () => {
  return (
    <ActionsStyled>
        <ActionIcon href="#">
            <svg>
                <use href="/sprite-icons.svg#bell" />
            </svg>
        </ActionIcon>
        <ActionIcon href="#">
            <svg>
                <use href="/sprite-icons.svg#gift" />
            </svg>
        </ActionIcon>
        <ActionIcon href="#">
            <svg>
                <use href="/sprite-icons.svg#medium" />
            </svg>
        </ActionIcon>
    </ActionsStyled>
  )
}

export default Actions