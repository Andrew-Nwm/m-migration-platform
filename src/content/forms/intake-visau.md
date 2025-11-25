---
title: "INTAKE FORM VISA U"
description: "Formulario de intake para víctimas de determinados crímenes que buscan la Visa U, cubre datos personales, del incidente y cooperación con autoridades."
fields:
  - name: "nombreCompleto"
    label: "Nombre completo del solicitante"
    type: "text"
    required: true
  - name: "fechaNacimiento"
    label: "Fecha de nacimiento"
    type: "date"
    required: true
  - name: "lugarNacimiento"
    label: "Lugar de nacimiento"
    type: "text"
    required: true
  - name: "direccionActual"
    label: "Dirección actual"
    type: "text"
    required: true
  - name: "telefono"
    label: "Teléfono"
    type: "tel"
    required: true
  - name: "email"
    label: "Correo electrónico"
    type: "email"
    required: false
  - name: "numeroA"
    label: "Número A (si tiene)"
    type: "text"
    required: false
  - name: "numeroSeguroSocial"
    label: "Número de Seguro Social (si tiene)"
    type: "text"
    required: false
  - name: "tipoCrimen"
    label: "Tipo de crimen sufrido"
    type: "checkbox_group"
    options: ["violenciaDomestica", "agresionSexual", "secuestro", "extorsion", "tortura", "trataPersonas", "otro"]
    required: true
  - name: "descripcionCrimen"
    label: "Descripción detallada del crimen"
    type: "textarea"
    required: true
  - name: "fechaCrimen"
    label: "Fecha del crimen"
    type: "date"
    required: true
  - name: "lugarCrimen"
    label: "Lugar donde ocurrió el crimen"
    type: "text"
    required: true
  - name: "agresor"
    label: "Información sobre el agresor"
    type: "textarea"
    required: false
  - name: "testigos"
    label: "¿Hubo testigos del crimen?"
    type: "radio"
    options: ["si", "no"]
    required: false
  - name: "descripcionTestigos"
    label: "Información sobre los testigos"
    type: "textarea"
    required: false
  - name: "reportePolicia"
    label: "¿Reportó el crimen a la policía?"
    type: "radio"
    options: ["si", "no"]
    required: true
  - name: "numeroCaso"
    label: "Número de caso policial"
    type: "text"
    required: false
  - name: "fechaReporte"
    label: "Fecha del reporte"
    type: "date"
    required: false
  - name: "departamentoPolicia"
    label: "Departamento de policía"
    type: "text"
    required: false
  - name: "cooperacionInvestigacion"
    label: "¿Ha cooperado con las autoridades en la investigación?"
    type: "radio"
    options: ["si", "no"]
    required: true
  - name: "descripcionCooperacion"
    label: "Descripción de la cooperación"
    type: "textarea"
    required: false
  - name: "miedoRepresalias"
    label: "¿Tiene miedo de represalias si regresa a su país de origen?"
    type: "radio"
    options: ["si", "no"]
    required: true
  - name: "descripcionMiedo"
    label: "Descripción del miedo a represalias"
    type: "textarea"
    required: false
  - name: "documentosEvidencia"
    label: "Documentos de evidencia disponibles"
    type: "checkbox_group"
    options: ["reportesPolicia", "documentosMedicos", "testimonios", "fotografias", "comunicaciones", "otros"]
    required: false
  - name: "estatusMigratorioActual"
    label: "Su estatus migratorio actual"
    type: "select"
    options: ["indocumentado", "visaTemporal", "otro"]
    required: false
  - name: "solicitudAnterior"
    label: "¿Ha solicitado anteriormente beneficios bajo Visa U?"
    type: "radio"
    options: ["si", "no"]
    required: false
  - name: "familiaresEstadosUnidos"
    label: "¿Tiene familiares en Estados Unidos?"
    type: "radio"
    options: ["si", "no"]
    required: false
  - name: "descripcionFamiliares"
    label: "Información sobre familiares en Estados Unidos"
    type: "textarea"
    required: false
  - name: "observaciones"
    label: "Observaciones adicionales"
    type: "textarea"
    required: false
---
Formulario para víctimas de crímenes (Visa U). Incluye datos personales, tipo de crimen, cooperación y evidencia.