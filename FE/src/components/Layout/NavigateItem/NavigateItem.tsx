import { CategoryType } from '@/store/category/type';
import React from 'react'
import "./style.scss"
import NavSubMenuItem from './NavSubMenuItem';

export type NavType = {
    id: number;
    title: string;
    menuItem?: CategoryType[];
};

type Props = {
    item: NavType,
}

const NavigateItem = ({item}: Props) => {
  return (
    <div className="nav-item">
        <div id='nav-content'>
            {item.title}
            {item.menuItem && <svg version="1.1" id="Capa_1" style={{marginLeft:8}} xmlns="http://www.w3.org/2000/svg"
                width="12" height="12" fill='rgb(135, 255, 255)' viewBox="0 0 123.959 123.958">
                <path d="M117.979,28.017h-112c-5.3,0-8,6.4-4.2,10.2l56,56c2.3,2.3,6.1,2.3,8.401,0l56-56
                    C125.979,34.417,123.279,28.017,117.979,28.017z"/>
            </svg>}
        </div>
        <div className="underline"></div>
        {item.menuItem && <div className='nav-sub-menu'>
            {item.menuItem.map(item => <NavSubMenuItem key={item.id} item={item}/>)}
        </div>}
    </div>
  )
}

export default NavigateItem