import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
    {
        title: 'MyCloset',
        path: '/MyCloset',
        icon: <BiIcons.BiCloset />,
        cName: 'nav-text',
    },
    {
        title: 'MyOutfits',
        path: '/MyOutfits',
        icon: <GiIcons.GiClothes />,
        cName: 'nav-text',
    },
    {
        title: 'MyMannequin',
        path: '/',
        icon: <GiIcons.GiPerson />,
        cName: 'nav-text',
    },
    {
        title: 'TryOn',
        path: '/TryOn',
        icon: <GiIcons.GiClothes/>,
        cName: 'nav-text',
    },
    {
        title: 'Login',
        path: '/Login',
        icon: <GiIcons.GiClothes/>,
        cName: 'nav-text',
    }
]