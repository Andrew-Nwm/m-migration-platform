---
title: "INTAKE FORM VISA T"
description: "Formulario preliminar para sobrevivientes de trata de personas (Visa T)"
color: "from-[#0f3f4c] to-[#87b8c6]"
icon: "shield"
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
    label: "Teléfono de contacto"
    type: "tel"
    required: false
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
  - name: "tipoTrafico"
    label: "Tipo de tráfico humano sufrido"
    type: "checkbox_group"
    options: ["trabajoForzado", "explotacionSexual", "servicioDomestico", "matrimonioForzado", "otro"]
    required: true
  - name: "descripcionTrafico"
    label: "Descripción detallada del tráfico humano"
    type: "textarea"
    required: true
  - name: "fechaInicioTrafico"
    label: "Fecha aproximada de inicio del tráfico"
    type: "date"
    required: false
  - name: "fechaFinTrafico"
    label: "Fecha aproximada de fin del tráfico"
    type: "date"
    required: false
  - name: "lugarTrafico"
    label: "Lugar donde ocurrió el tráfico"
    type: "text"
    required: true
  - name: "traficantes"
    label: "Información sobre los traficantes"
    type: "textarea"
    required: false
  - name: "cooperacionInvestigacion"
    label: "¿Ha cooperado con las autoridades en la investigación del tráfico?"
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
    options: ["reportesPolicia", "documentosMedicos", "testimonios", "documentosTrabajo", "comunicaciones", "otros"]
    required: false
  - name: "estatusMigratorioActual"
    label: "Su estatus migratorio actual"
    type: "select"
    options: ["indocumentado", "visaTemporal", "otro"]
    required: false
  - name: "solicitudAnterior"
    label: "¿Ha solicitado anteriormente beneficios bajo Visa T?"
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
Formulario para víctimas de tráfico humano (Visa T). Incluye datos personales, tipo de tráfico, cooperación y evidencia.