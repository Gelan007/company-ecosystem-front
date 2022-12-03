import React, {useEffect, useState} from 'react';
import s from "../MainPages/styles/MainPages.module.css";
import AdminBlock from "../../../compontents/AdminBlock";
import {useLocation} from "react-router-dom";



const LocationsEditPage = (props) => {
    const location = useLocation()
    const { arrayOfSelectedItem, flexValues, headerBlock } = location.state
    const itemName = "location"
    const headers = ['id', 'title','chiefEmail','workingStart','workingEnd','photo','actions']


    async function updateLocations(inputItems){
        let formData = new FormData();
        formData.append('title', inputItems.title);
        formData.append('chief', inputItems.chief);
        formData.append('workingStart', inputItems.workingStart);
        formData.append('workingEnd', inputItems.workingEnd);
        formData.append('photo', inputItems.photo);
        formData.append('id', inputItems.id);

        let result = await fetch("https://localhost:7032/Location", {
            method: 'PUT',
            body: formData,
        });

        if(result.status == 200){
            alert("Успешно")
        } else{
            alert("Неверные данные")
            console.log(result)
        }
        console.log(inputItems)
    }


    return (
        <div className={s.employeesContainer}>
            <div className={s.block}>
                <AdminBlock flexValues={flexValues} arrayOfItems={[{...arrayOfSelectedItem}]} headersArray={headers} itemName={itemName} updateTable={updateLocations} isAddPage={true}/>
            </div>
        </div>
    );
};

export default LocationsEditPage;