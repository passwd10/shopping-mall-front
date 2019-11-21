import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

function SearchResult() {
    const {keyword} = useParams();

    return (
    <h1>{keyword}</h1>
    )
}

export default SearchResult;