import React from 'react';
import styled from 'styled-components';

const ModifyDivGrid = styled.div`
    display: grid;
    grid-template-columns: 200px 900px;
    grid-auto-rows: 70px;
    font-size: 20px;
    border: 1px solid #ddd;
`;

export const ModifyCategory = styled.div`
    display: flex ;
    /* background-color: #eef1f8; */
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    align-items: center;     
    justify-content: center;
`;

export const ModifyInfo = styled.div`
    display: flex; 
    align-Items: center;
    padding-left: 20px;
`;

export const BasicForm = styled.div`
    width: 60%;
    margin-right: auto;
    margin-left: auto;
`;

export const OrderProductCategory = styled.div`
    display: grid;
    grid-template-columns: 450px 150px 150px 150px;
    grid-auto-rows: 70px;
    font-size: 20px;
    border: 1px solid #ddd;
    justify-items: center;
    align-items: center;
`;

export const OrderProductInfo = styled.div`
    display: grid;
    grid-template-columns: 450px 150px 150px 150px;
    grid-auto-rows: 70px;
    font-size: 20px;
    /* border: 1px solid #ddd; */
    justify-items: center;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export default ModifyDivGrid;