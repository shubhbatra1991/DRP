import React from 'react';
import {
    StatusContainer,
    StatusHeading,
    StatusWrapper,
    StatusBox,
    Icon,
    Title,
    Description,
} from './styles/Stats.styles';

import {StatsData} from '../Data/StatsData';

const Stats = () => {
  return (
    <StatusContainer>
        <StatusHeading>
            Why Choose Us?
        </StatusHeading>
        <StatusWrapper>
            {StatsData.map((item, index)=> {
                return (
                    <StatusBox key={index}>
                        <Icon>{item.icon}</Icon>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                    </StatusBox>
                )
            })}
        </StatusWrapper>
    </StatusContainer>
  )
};

export default Stats;