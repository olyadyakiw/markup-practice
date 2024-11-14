import { StatsItem, StatsList } from "./styled/Stats.styled"

const Stats = () => {
  return (
    <StatsList>
        <StatsItem>
            <svg width={16} height={16}>
              <use href="/sprite-icons.svg#play" />
            </svg>
            88
        </StatsItem>
        <StatsItem>
            <svg width={16} height={14} fill="#FB5F8A"> 
              <use href="/sprite-icons.svg#heart" />
            </svg>
            24
        </StatsItem>
    </StatsList>
  )
}

export default Stats