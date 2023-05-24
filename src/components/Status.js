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
import { GiEarthAmerica } from 'react-icons/gi'
import { MdAirplanemodeActive, MdTimer } from 'react-icons/md'
import { FaMoneyCheck } from 'react-icons/fa'

const StatsData = [
    {
        icon: (<GiEarthAmerica />),
        title: "Over 100 destinations",
        desc: "travel to over 100 unique places"
    },
    {
        icon: (<MdAirplanemodeActive />),
        title: "10 Million Trips made",
        desc: "Over 100 million trips completed last year"
    },
    {
        icon: (<MdTimer />),
        title: "Fastest Support",
        desc: "travel to over 100 unique places"
    },
    {
        icon: (<FaMoneyCheck />),
        title: "Best Deals",
        desc: "We offer the best prices."
    },
]

const Status = () => {
  return (
    <StatusContainer>
        <StatusHeading>
            why us?
        </StatusHeading>
        <StatusWrapper>
            {StatsData.map((item, index)=> {
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

export default Status