import React, {useEffect, useRef, useState} from 'react';
import s from './styles/AdminBlock.module.css'
import AdminHeader from "./AdminHeaders/AdminHeader";
import AdminSearch from "./UI/search/AdminSearch";
import { itemSelector } from '../utils/selectors';


const AdminBlock = ({arrayOfItems, headersArray, flexValues,itemName}) => {

    useEffect(() => {
        setWidthBlockForCorrectScrollDrawing(elementRef.current.scrollWidth);
    }, []);

    const [widthBlockForCorrectScrollDrawing, setWidthBlockForCorrectScrollDrawing] = useState(0);
    const elementRef = useRef(null);
    const getElementsOfArray = arrayOfItems.map(el => el)
    

//<EmployeesItem arrayOfItems={item} flexValues={flexValues} headerBlock={widthBlockForCorrectScrollDrawing}/>
    
    
    return (
        <div className={s.adminBlockContainer}>
            <div className={s.adminBlockContent}>
                <div className={s.topContainer}>
                    <div className={s.searchContainer}>
                        <AdminSearch placeholder='Search...'/>
                    </div>
                </div>
                <div className={s.mainBlock}  ref={elementRef} >
                    <div>
                        <AdminHeader arrayOfItems={getElementsOfArray} headers={headersArray} flexValues={flexValues}  headerBlock={widthBlockForCorrectScrollDrawing}/>
                    </div>
                    <div className={s.informationContainer}>
                        {arrayOfItems.map(item => itemSelector(item,flexValues,widthBlockForCorrectScrollDrawing).map(el => {
                            if(el.name === itemName){
                                return el.Component
                            }
                        }))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminBlock;



