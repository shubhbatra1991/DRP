import React from 'react'
import {
    StatusContainer,
    StatusHeading,
    StatusWrapper,
    StatusBox,
    Icon,
    Title,
    Desc,
} from './styles/Status.styles.jsx'
import { StatsData } from '../Data/StatsData'

const Status = () => {
  return (
    <StatusContainer>
        <StatusHeading>
            why us?
        </StatusHeading>
        <StatusWrapper>
            { StatsData.map((item, index)=> {
                return (
                    <StatusBox key={index}>
                        <Icon>{item.icon}</Icon>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                    </StatusBox>
                )
            })}
        </StatusWrapper>
    </StatusContainer>
  )
}

export default Status;