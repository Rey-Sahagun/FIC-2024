import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, Typography, TextField, DialogActions } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddInstituteModal = ({ AddInstituteShowModal, setAddInstituteShowModal }) => {
    
    // Estado para manejar mensajes de alerta
    const [mensajeErrorAlert, setMensajeErrorAlert] = useState("");
    const [mensajeExitoAlert, setMensajeExitoAlert] = useState("");

    // Configuración de Formik y Yup
    const formik = useFormik({
        initialValues: {
            IdInstitutoOK: "",
            IdInstitutoBK: "",
            DesInstituto: "",
            Matriz: "",
            IdTipoGiroOK: "",
            IdInstitutoSupOK: "",
        },
        validationSchema: Yup.object({
            IdInstitutoOK: Yup.string().required("Campo requerido"),
            IdInstitutoBK: Yup.string().required("Campo requerido"),
            DesInstituto: Yup.string().required("Campo requerido"),
            Matriz: Yup.string()
                .required("Campo requerido")
                .max(1, "Solo se permite una letra")
                .matches(/^[NS]+$/, "Solo se permiten las letras N o S"),
            IdTipoGiroOK: Yup.string()
                .required("Campo requerido")
                .matches(/^[a-zA-Z0-9-]+$/, "Solo se permiten caracteres alfanuméricos y el símbolo '-'"),
            IdInstitutoSupOK: Yup.string(),
        }),
        onSubmit: async (values) => {
            console.log("Valores del formulario:", values);
            // Aquí iría la lógica para enviar el formulario al servidor o manejar la respuesta
            setMensajeExitoAlert("Instituto agregado exitosamente");
            setAddInstituteShowModal(false);
        },
    });

    // Estructura de propiedades comunes para TextField
    const commonTextFieldProps = {
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
        fullWidth: true,
        margin: "dense",
        disabled: !!mensajeExitoAlert,
    };

    return (
        <Dialog 
            open={AddInstituteShowModal}
            onClose={() => setAddInstituteShowModal(false)}
            fullWidth
        >
            <form onSubmit={formik.handleSubmit}>
                {/* Titulo de la Modal */}
                <DialogTitle>
                    <Typography component="h6">
                        <strong>Agregar Nuevo Instituto</strong>
                    </Typography>
                </DialogTitle>
                
                {/* Controles de entrada de datos */}
                <DialogContent sx={{ display: 'flex', flexDirection: 'column' }} dividers>
                    <TextField
                        id="IdInstitutoOK"
                        label="IdInstitutoOK*"
                        value={formik.values.IdInstitutoOK}
                        {...commonTextFieldProps}
                        error={formik.touched.IdInstitutoOK && Boolean(formik.errors.IdInstitutoOK)}
                        helperText={formik.touched.IdInstitutoOK && formik.errors.IdInstitutoOK}
                    />
                    <TextField
                        id="IdInstitutoBK"
                        label="IdInstitutoBK*"
                        value={formik.values.IdInstitutoBK}
                        {...commonTextFieldProps}
                        error={formik.touched.IdInstitutoBK && Boolean(formik.errors.IdInstitutoBK)}
                        helperText={formik.touched.IdInstitutoBK && formik.errors.IdInstitutoBK}
                    />
                    <TextField
                        id="DesInstituto"
                        label="DesInstituto*"
                        value={formik.values.DesInstituto}
                        {...commonTextFieldProps}
                        error={formik.touched.DesInstituto && Boolean(formik.errors.DesInstituto)}
                        helperText={formik.touched.DesInstituto && formik.errors.DesInstituto}
                    />
                    <TextField
                        id="Matriz"
                        label="Matriz*"
                        value={formik.values.Matriz}
                        {...commonTextFieldProps}
                        error={formik.touched.Matriz && Boolean(formik.errors.Matriz)}
                        helperText={formik.touched.Matriz && formik.errors.Matriz}
                    />
                    <TextField
                        id="IdTipoGiroOK"
                        label="IdTipoGiroOK*"
                        value={formik.values.IdTipoGiroOK}
                        {...commonTextFieldProps}
                        error={formik.touched.IdTipoGiroOK && Boolean(formik.errors.IdTipoGiroOK)}
                        helperText={formik.touched.IdTipoGiroOK && formik.errors.IdTipoGiroOK}
                    />
                    <TextField
                        id="IdInstitutoSupOK"
                        label="IdInstitutoSupOK*"
                        value={formik.values.IdInstitutoSupOK}
                        {...commonTextFieldProps}
                        error={formik.touched.IdInstitutoSupOK && Boolean(formik.errors.IdInstitutoSupOK)}
                        helperText={formik.touched.IdInstitutoSupOK && formik.errors.IdInstitutoSupOK}
                    />
                </DialogContent>
                
                {/* Botones de acción */}
                <DialogActions sx={{ display: 'flex', flexDirection: 'row' }}>
                    <LoadingButton
                        color="secondary"
                        loadingPosition="start"
                        startIcon={<CloseIcon />}
                        variant="outlined"
                        onClick={() => setAddInstituteShowModal(false)}
                    >
                        <span>CERRAR</span>
                    </LoadingButton>
                    <LoadingButton
                        color="primary"
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="contained"
                        type="submit"
                    >
                        <span>GUARDAR</span>
                    </LoadingButton>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default AddInstituteModal;
