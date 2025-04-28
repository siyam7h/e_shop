import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt , fa0 } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import { T1NavBtn } from '../pseudo/navBtn';

export default function navBar(){
    let navBtn = [
        {
            name : 'store',
            megaMenu : {
                shop : [
                    {name : 'Shop the latest'},
                    {name : 'Mac'},
                    {name : 'iPad'},
                    {name : 'iPhone'},
                    {name : 'Apple Vision Pro'},
                    {name : 'Accessories'}
                ],
                quickLinks : [
                    {name : 'Find a Store'}
                    ,{name : 'Order Status'}
                    ,{name : 'Apple Trade In'}
                    ,{name : 'Financing'}
                    ,{name : 'Personal Setup'}
                ],
                shopSpecialStores : [
                    {name : 'Certified Refurbished'}
                    ,{name : 'Education'}
                    ,{name : 'Business'}
                    ,{name : 'Veterans and Military'}
                    ,{name : 'Government'}
                ]
            }
        },
        {name : 'Mac'},
        {name : 'iPad'},
        {name : 'iPhone'},
        {name : 'Watch'},
        {name : 'Vision'},
        {name : 'AirPods'},
        {name : 'TV & Home'},
        {name : 'Entertainment'},
        {name : 'Accessories'},
        {name : 'Support'}
    ]

    let navBtns = navBtn.map(btn);

    function btn(a) {
        return <T1NavBtn 
            key={a.name}
            name={a.name} 
            shop={a.megaMenu ? a.megaMenu.shop : undefined}
        />
    }

    return(
        <nav className="bg-blue-900">
        <ul className="w-max m-auto flex gap-1 relative">
            <li></li>
            <li className="p-2 w-9"><FontAwesomeIcon icon={faAppleAlt} /></li>
            {navBtns}
        </ul>
        </nav>   
    )
}