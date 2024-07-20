import React from "react";
import ReactDOM from 'react-dom/client';
import './styles/tailwind.css'; // Import Tailwind CSS
import RegistrationPage from './src/components/RegistrationPage';


const AppLayout =()=>{
    return(
        <>
            <RegistrationPage />
        
        </>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)