import React from 'react';
import styled from 'styled-components';

const ModifyBtn = styled.button`
    background-color: white;
    border: 1px solid #ddd;
`;

export const OkBtn = styled.button`
    background-color: #5f0080;
    color: white;
    padding: 10px;
    padding-left: 40px;
    padding-right: 40px;
    border-radius: 5px; 
    border: 1px solid purple; 
    margin-right: 20px; 
`;

export const CancelBtn = styled.button`
    background-color: white;
    color: #5f0080;
    padding: 10px;
    padding-left: 40px;
    padding-right: 40px;
    border-radius: 5px; 
    border: 1px solid #5f0080; 
    margin-right: 20px; 
`;

export default ModifyBtn;