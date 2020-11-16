import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useParams, Redirect } from "react-router-dom";

function UpdateBrands() {
    const [logo, setLogo] = useState();
    const [brand_name, setBrand_Name] = useState();
    const [CEO, setCEO] = useState();
    const [type, setType] = useState();
    const [price_point, setPrice_Point] = useState();
    const [link, setLink] = useState();
    const params = useParams();
    return (
        <div>
            <Navbar />
        </div>
    )
}

export default UpdateBrands;