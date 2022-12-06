import React, {useEffect, useState} from 'react';
import s from "../MainPages/styles/MainPages.module.css";
import AdminBlock from "../../../compontents/AdminBlock";
import {useLocation} from "react-router-dom";



const ThingsEditPage = (props) => {
    const location = useLocation()
    const { arrayOfSelectedItem, flexValues, headerBlock } = location.state
    const itemName = "thing"
    const headers = ['name', 'instruction','characteristic','photoes','actions']

    async function updateThings(inputItems){
        let formData = new FormData();
        formData.append('name',inputItems.name);
        formData.append('instruction',inputItems.instruction);
        formData.append('characteristic',inputItems.characteristic);
        formData.append('photoes',inputItems.photoes);
        formData.append('locationId',inputItems.locationId);
        formData.append('id',0);

        let result = await fetch("https://localhost:7032/Thing", {
            method: 'PUT',
            body: formData
        });
        if(result.status === 200){
            alert("Успешно")
        } else {
            alert("Неверные данные")
        }
    }



    return (
        <div className={s.employeesContainer}>
            <div className={s.block}>
                <AdminBlock flexValues={flexValues} arrayOfItems={[{...arrayOfSelectedItem}]} headersArray={headers} itemName={itemName} updateTable={updateThings} isAddPage={true}/>
            </div>
        </div>
    );
};

export default ThingsEditPage;