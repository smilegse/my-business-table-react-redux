import React from 'react';
import {useSelector} from "react-redux";

const FullScreenLoader = () => {
    const settings = useSelector((state)=>state.settings.loader);
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default FullScreenLoader;