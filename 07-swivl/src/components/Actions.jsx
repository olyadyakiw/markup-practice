import { ActionsStyled, ActionIcon } from "./styled/Actions.styled"

const iconIds = ['bell', 'gift', 'medium'];

const Actions = () => {
  return (
    <ActionsStyled>
      {iconIds.map((iconId) => (
        <ActionIcon key={iconId} href="#" aria-label={iconId}>
          <svg>
            <use href={`/sprite-icons.svg#${iconId}`} />
          </svg>
        </ActionIcon>
      ))}
    </ActionsStyled>
  )
}



export default Actions