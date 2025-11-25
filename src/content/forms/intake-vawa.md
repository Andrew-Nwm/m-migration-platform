---
title: "INTAKE FORM VAWA"
description: "Formulario para víctimas de abuso que buscan alivio bajo VAWA, incluye información del solicitante, del agresor y evidencias disponibles."
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
  - name: "nombreAbusador"
    label: "Nombre completo del abusador"
    type: "text"
    required: true
  - name: "relacionAbusador"
    label: "Relación con el abusador"
    type: "select"
    options: ["esposo", "padre", "madre", "hijo", "otro"]
    required: true
  - name: "estatusMigratorioAbusador"
    label: "Estatus migratorio del abusador"
    type: "select"
    options: ["ciudadano", "residente", "otro"]
    required: true
  - name: "numeroAAbusador"
    label: "Número A del abusador (si aplica)"
    type: "text"
    required: false
  - name: "tipoAbuso"
    label: "Tipo de abuso sufrido"
    type: "checkbox_group"
    options: ["fisico", "emocional", "sexual", "economico"]
    required: true
  - name: "descripcionAbuso"
    label: "Descripción detallada del abuso"
    type: "textarea"
    required: true
  - name: "fechaInicioAbuso"
    label: "Fecha aproximada de inicio del abuso"
    type: "date"
    required: false
  - name: "fechaFinAbuso"
    label: "Fecha aproximada de fin del abuso"
    type: "date"
    required: false
  - name: "documentosEvidencia"
    label: "Documentos de evidencia disponibles"
    type: "checkbox_group"
    options: ["reportesPolicia", "ordenesProteccion", "documentosMedicos", "testimonios", "otros"]
    required: false
  - name: "hijosComunes"
    label: "¿Tiene hijos en común con el abusador?"
    type: "radio"
    options: ["si", "no"]
    required: false
  - name: "numeroHijos"
    label: "Número de hijos en común"
    type: "number"
    required: false
  - name: "estatusMigratorioActual"
    label: "Su estatus migratorio actual"
    type: "select"
    options: ["indocumentado", "visaTemporal", "residenteCondicional", "otro"]
    required: false
  - name: "solicitudAnterior"
    label: "¿Ha solicitado anteriormente beneficios bajo VAWA?"
    type: "radio"
    options: ["si", "no"]
    required: false
  - name: "observaciones"
    label: "Observaciones adicionales"
    type: "textarea"
    required: false
---
Formulario para víctimas de abuso (VAWA). Incluye datos personales, del abusador, tipo de abuso y evidencia.