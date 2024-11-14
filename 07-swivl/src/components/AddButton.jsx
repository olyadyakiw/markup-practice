import { Button } from "./styled/global/Button.styled"

const AddButton = () => {
  return (
    <Button>
      <svg>
          <use href="/sprite-icons.svg#plus" />
      </svg>
    </Button>
  )
}

export default AddButton