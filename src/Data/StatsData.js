import React from "react";
import { GiEarthAmerica } from 'react-icons/gi';
import { MdAirplanemodeActive, MdTimer } from 'react-icons/md';
import { FaMoneyCheck } from 'react-icons/fa';

export const StatsData = [
    {
        icon: (<GiEarthAmerica 
                    css={`
                            color: #047bf1;
                        `} 
                />),
        title: "Over 100 destinations",
        desc: "travel to over 100 unique places"
    },
    {
        icon: (<MdAirplanemodeActive 
                    css={`
                        color: #f3a82e;
                    `} 
                />),
        title: "10 Million Trips made",
        desc: "Over 100 million trips completed last year"
    },
    {
        icon: (<MdTimer 
                    css={`
                        color: #f34f2e;
                    `} 
                />),
        title: "Fastest Support",
        desc: "travel to over 100 unique places"
    },
    {
        icon: (<FaMoneyCheck 
                        css={`
                            color: #3af576;
                        `} 
                />),
        title: "Best Deals",
        desc: "We offer the best prices."
    },
];