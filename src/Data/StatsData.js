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
        desc: "Travel to over 100 amazing places"
    },
    {
        icon: (<MdAirplanemodeActive
                    css={`
                        color: #f3a82e;
                    `} 
                />),
        title: "1K Trips made",
        desc: "Over 100K trips completed last year"
    },
    {
        icon: (<MdTimer
                    css={`
                        color: #f34f2e;
                    `} 
                />),
        title: "Fastest Support",
        desc: "24/7 Support asvailable."
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