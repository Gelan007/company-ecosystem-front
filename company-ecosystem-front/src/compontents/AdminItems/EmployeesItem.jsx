import React from 'react';
import s from './AdminItem.module.css'
import Delete from "../../img/icons/Delete.svg"
import Edit from "../../img/icons/Edit.svg"
import {Link} from "react-router-dom";

const EmployeesItem = ({arrayOfItems, flexValues, headerBlock}) => {

    return (

        <div className={s.adminItemContainer} style={{width: `${headerBlock}px`}}>
            <div className={s.content}>
                <ul className={s.ul}>
                    <li className={s.item} style={flexValues.id != null ? {flex: flexValues.id} : {flex: flexValues.general}}>{arrayOfItems.id}</li>
                    <li className={s.item} style={flexValues.email != null ? {flex: flexValues.email} : {flex: flexValues.general}}>{arrayOfItems.email}</li>
                    <li className={s.item} style={flexValues.role != null ? {flex: flexValues.role} : {flex: flexValues.general}}>{arrayOfItems.role}</li>
                    <li className={s.item} style={flexValues.position != null ? {flex: flexValues.position} : {flex: flexValues.general}}>{arrayOfItems.position}</li>
                    <Link to='/dfdsf'><li className={`${s.item} ${s.editButton}`}><img src={Edit} alt="Edit"/></li></Link>
                    <li className={s.item}><img src={Delete} alt="Delete"/></li>

                </ul>

            </div>
        </div>
    );
};

export default EmployeesItem;