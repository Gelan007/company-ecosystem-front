import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import s from "../MainPages/styles/MainPages.module.css";
import AdminBlock from "../../../compontents/AdminBlock";

const PostsAddPage = () => {
    const location = useLocation()
    const itemName = "post"
    const { arrayOfSelectedItem, flexValues, headerBlock } = location.state
    const headers = ['title', 'body','locationId','actions']


    async function createPost(inputItems){
        let formData = new FormData();
        formData.append('title',inputItems.title);
        formData.append('body',inputItems.body);
        formData.append('locationId',inputItems.locationId);
        formData.append('id',0);

        let result = await fetch("https://localhost:7032/Post", {
            method: 'POST',
            body: formData
        });
        if(result.status == 200){
            alert("Успешно")
        } else {
            alert("Неверные данные")
            console.log(result)
        }
    }

    return (
        <div className={s.employeesContainer}>
            <div className={s.block}>
                <AdminBlock flexValues={flexValues} arrayOfItems={[{...arrayOfSelectedItem}]} headersArray={headers} itemName={itemName} updateTable={createPost} isAddPage={true}/>
            </div>
        </div>
    );
};

export default PostsAddPage;