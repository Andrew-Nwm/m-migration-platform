---
title: "INTAKE I-765"
description: "Formulario inicial para solicitar autorización de empleo (I-765) "
color: "from-[#0f3f4c] to-[#87b8c6]"
icon: "briefcase"
fields:
  - name: "nombreCompleto"
    label: "Nombre completo del solicitante"
    type: "text"
    required: true
  - name: "numeroA"
    label: "Numero A (si tiene)"
    type: "text"
    required: false
  - name: "direccionActual"
    label: "Dirección actual"
    type: "text"
    required: true
  - name: "codPostal"
    label: "Codigo Postal"
    type: "number"
    required: true
  - name: "telefono"
    label: "Teléfono de contacto"
    type: "tel"
    required: false
  - name: "nombrePadre"
    label: "Nombre Padre"
    type: "text"
    required: true
  - name: "nombreMadre"
    label: "Nombre Madre"
    type: "text"
    required: true
  - name: "antecedentes"
    label: "¿Tiene antecedentes penales?"
    type: "checkbox"
    required: false
  - name: "txtPenales"
    label: "Explique brevemente"
    type: "textarea"
    required: false
requiredFiles:
  - "Pasaporte vigente"
  - "Formulario I-765 completado"
  - "Fotografías tamaño pasaporte (2)"
  - "Comprobante de pago de tarifas"
  - "Documentos de identidad"
---
Formulario para solicitar autorización de empleo (I-765). Incluye campos personales, familiares y antecedentes penales. Adjuntar documentos requeridos según instrucciones.