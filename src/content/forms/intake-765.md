# En este archivo dejo un ejemplo de la organización a usar para la generación de las

---
title: "Formulario I-765"
description: "Solicitud de Autorización de Empleo"
formType: "intake-765"
apiEndpoint: "/api/submit-765"
metaTitle: "Formulario I-765 - Autorización de Empleo"
metaDescription: "Complete el formulario I-765 para solicitar autorización de empleo en Estados Unidos"
published: true
order: 1

fields:
  - name: "firstName"
    label: "Nombre(s)"
    type: "text"
    required: true
    placeholder: "Ingrese su(s) nombre(s)"
    validation:
      minLength: 2
      maxLength: 50

  - name: "lastName"
    label: "Apellido(s)"
    type: "text"
    required: true
    placeholder: "Ingrese su(s) apellido(s)"
    validation:
      minLength: 2
      maxLength: 50

  - name: "email"
    label: "Correo electrónico"
    type: "email"
    required: true
    placeholder: "correo@ejemplo.com"

  - name: "phone"
    label: "Teléfono"
    type: "tel"
    required: true
    placeholder: "(555) 123-4567"

  - name: "dateOfBirth"
    label: "Fecha de nacimiento"
    type: "date"
    required: true

  - name: "alienNumber"
    label: "Número A (Alien Number)"
    type: "text"
    required: false
    placeholder: "A123456789"
    validation:
      pattern: "^A\\d{8,9}$"

  - name: "ssn"
    label: "Número de Seguro Social"
    type: "text"
    required: false
    placeholder: "XXX-XX-XXXX"
    validation:
      pattern: "^\\d{3}-\\d{2}-\\d{4}$"

  - name: "address"
    label: "Dirección completa"
    type: "textarea"
    required: true
    placeholder: "Calle, número, ciudad, estado, código postal"
    validation:
      minLength: 10
      maxLength: 200

  - name: "eligibilityCategory"
    label: "Categoría de elegibilidad"
    type: "select"
    required: true
    options:
      - "(c)(3)(C) - Asylum pending"
      - "(c)(8) - VAWA self-petitioner"
      - "(c)(9) - Adjustment applicant"
      - "(c)(26) - H-4 spouse"
      - "(c)(35) - L-2 spouse"

  - name: "hasBeenDeported"
    label: "¿Ha sido deportado anteriormente?"
    type: "radio"
    required: true
    options:
      - "Sí"
      - "No"

  - name: "agreeToTerms"
    label: "Acepto los términos y condiciones"
    type: "checkbox"
    required: true
---

# Instrucciones para el Formulario I-765

Este formulario se utiliza para solicitar la **Autorización de Empleo (EAD)** en Estados Unidos.

## Requisitos importantes

- Tener un estatus migratorio válido que permita solicitar autorización de empleo
- Completar todos los campos requeridos
- Proporcionar información veraz y actualizada

## Documentos necesarios

1. Copia de su documento de identidad
2. Prueba de su estatus migratorio actual
3. Fotografías tipo pasaporte
4. Comprobante de pago de la tarifa

## Tiempo de procesamiento

El tiempo promedio de procesamiento es de **3 a 5 meses**.

---

**Nota:** Asegúrese de revisar toda la información antes de enviar el formulario.
