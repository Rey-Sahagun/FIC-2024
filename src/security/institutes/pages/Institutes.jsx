import { Box } from "@mui/material";
import { useState } from "react";
import InstitutesNavTab from "../components/tabs/InstitutesNavTab";
import InstitutesTab from "../components/tabs/InstitutesTab";
import BusinessTab from "../components/tabs/BusinessTab";

const Institutes = () => {
    // Estado para controlar el índice de la fila seleccionada en la pestaña de Institutos.
    const [currentRowInInstitutesTab, setCurrentRowInInstitutesTab] = useState(0);
    
    // Estado para controlar la pestaña principal seleccionada ("INSTITUTOS" o "NEGOCIOS").
    const [currentTabInPrincipalTab, setCurrentTabInPrincipalTab] = useState("INSTITUTOS");

    return (
        <Box>
            {/* Componente de navegación de pestañas para Institutos y Negocios */}
            <InstitutesNavTab
                currentRowInInstitutesTab={currentRowInInstitutesTab}
                setCurrentTabInPrincipalTab={setCurrentTabInPrincipalTab} 
            />
            
            {/* Mostrar el contenido de la pestaña "Institutos" si está seleccionada */}
            {currentTabInPrincipalTab === "INSTITUTOS" && <InstitutesTab />}

            {/* Mostrar el contenido de la pestaña "Negocios" si está seleccionada */}
            {currentTabInPrincipalTab === "NEGOCIOS" && <BusinessTab />}    
        </Box>
    );
};

export default Institutes;
