---
title: "SPECIAL IMMIGRANT JUVENILE STATUS (SIJ)"
description: "Formulario Estatus de Inmigrante Juvenil Especial."
color: "from-[#0f3f4c] to-[#87b8c6]"
icon: "users"
fields:
  - name: "nombre"
    label: "Nombre del menor"
    type: "text"
    required: true
  - name: "edad"
    label: "Edad"
    type: "text"
    required: false
  - name: "fechaNacimientoMenor"
    label: "Fecha de Nacimiento del menor"
    type: "date"
    required: false
  - name: "nombreGuardian"
    label: "Nombre del guardián"
    type: "text"
    required: false
  - name: "parentesco"
    label: "Parentesco"
    type: "text"
    required: false
  - name: "fechaNacimientoGuardian"
    label: "Fecha de Nacimiento del guardián"
    type: "date"
    required: false
  - name: "telefono"
    label: "Teléfono"
    type: "text"
    required: false
  - name: "colorOjos"
    label: "Color de ojos"
    type: "text"
    required: false
  - name: "colorCabello"
    label: "Color de cabello"
    type: "text"
    required: false
  - name: "peso"
    label: "Peso"
    type: "text"
    required: false
  - name: "altura"
    label: "Altura"
    type: "text"
    required: false
  - name: "direccion"
    label: "Dirección Actual Completa"
    type: "text"
    required: false
  - name: "nombrePadre"
    label: "Nombre del Padre"
    type: "text"
    required: false
  - name: "ubicacionPadre"
    label: "Ubicación del Padre"
    type: "text"
    required: false
  - name: "fechaNacimientoPadre"
    label: "Fecha de Nacimiento del Padre"
    type: "date"
    required: false
  - name: "colorOjosPadre"
    label: "Color de ojos del Padre"
    type: "text"
    required: false
  - name: "colorCabelloPadre"
    label: "Color de cabello del Padre"
    type: "text"
    required: false
  - name: "pesoPadre"
    label: "Peso del Padre"
    type: "text"
    required: false
  - name: "alturaPadre"
    label: "Altura del Padre"
    type: "text"
    required: false
  - name: "nombreMadre"
    label: "Nombre de la Madre"
    type: "text"
    required: false
  - name: "ubicacionMadre"
    label: "Ubicación de la Madre"
    type: "text"
    required: false
  - name: "fechaNacimientoMadre"
    label: "Fecha de Nacimiento de la Madre"
    type: "date"
    required: false
  - name: "colorOjosMadre"
    label: "Color de ojos de la Madre"
    type: "text"
    required: false
  - name: "colorCabelloMadre"
    label: "Color de cabello de la Madre"
    type: "text"
    required: false
  - name: "pesoMadre"
    label: "Peso de la Madre"
    type: "text"
    required: false
  - name: "alturaMadre"
    label: "Altura de la Madre"
    type: "text"
    required: false
  - name: "opcionIdentificacion"
    label: "Seleccione la opción con la que se identifica"
    type: "select"
    options: ["Abandono de su padre/no lo conoce", "Abandono de su madre/no lo conoce", "Su padre va a renunciar a la custodia- no está en el país", "Su madre va a renunciar a la custodia- no está en el país", "Su padre va a renunciar a la custodia- si está en el país", "Su madre va a renunciar a la custodia- si está en el país", "Abuso/Negligencia del Padre/Madre"]
    required: false
  - name: "direccionesMenor"
    label: "Direcciones donde ha vivido el menor"
    type: "table"
    required: false
    minRows: 1
    maxRows: 5
    columns:
      - name: "direccion"
        label: "Dirección completa"
        type: "text"
      - name: "ciudad"
        label: "Ciudad"
        type: "text"
      - name: "estado"
        label: "Estado/País"
        type: "text"
      - name: "desde"
        label: "Desde"
        type: "text"
      - name: "hasta"
        label: "Hasta"
        type: "text"

  - name: "personasCuidadoras"
    label: "Personas que han cuidado al menor"
    type: "table"
    required: false
    minRows: 1
    maxRows: 5
    columns:
      - name: "nombreCuidador"
        label: "Nombre completo"
        type: "text"
      - name: "fechaNacCuidador"
        label: "Fecha nacimiento"
        type: "date"
      - name: "relacionCuidador"
        label: "Relación con el menor"
        type: "text"
      - name: "direccionCuidador"
        label: "Dirección actual"
        type: "text"
  - name: "casados"
    label: "¿Los padres del menor estuvieron casados?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: false
  - name: "fechaInicialMatrimonio"
    label: "Fecha Inicial del matrimonio (Mes/Día/Año)"
    type: "date"
    required: false
  - name: "fechaFinalMatrimonio"
    label: "Fecha Final del matrimonio (Mes/Día/Año)"
    type: "date"
    required: false
  - name: "paisMatrimonio"
    label: "País de matrimonio"
    type: "text"
    required: false
  - name: "paisDivorcio"
    label: "País de divorcio"
    type: "text"
    required: false
  - name: "razonMejorGuardian"
    label: "¿Por qué cree que usted es la mejor persona para ser guardián del menor?"
    type: "textarea"
    required: false
  - name: "razonPadresNoTutores"
    label: "¿Por qué cree que el padre o madre no pueden ser los tutores del menor?"
    type: "textarea"
    required: false
  - name: "observaciones"
    label: "Observaciones adicionales"
    type: "textarea"
    required: false
requiredFiles:
  - "1. Documentos de migración del menor (I-94, visa, etc.)"
  - "2. Certificado de nacimiento del menor (con traducción si no está en inglés)"
  - "3. Pasaporte del guardián"
  - "4. Pasaporte del menor"
  - "5. Cualquier Otro Documento Que Sirva De Prueba"

---
La clasificación de Inmigrante Juvenil Especial (SIJ), por sus siglas en inglés) permite que ciertos 
niños no ciudadanos soliciten el estatus de residente permanente legal en los Estados Unidos 
(también conocido como solicitud de una Green Card). 
Estos niños han estado sujetos a procedimientos judiciales estatales de menores relacionados con 
el abuso, la negligencia, el abandono o una base similar según la ley estatal. 
El Estatus Especial de Inmigrante Juvenil (SIJ, por sus siglas en inglés) es una forma para que los 
jóvenes inmigrantes (menores de 21 años) obtengan un estatus legal en los Estados Unidos. 
Es posible que califique para SIJS si: 
 
Son Menores de 21 años 
No está casado 
Ya está en los EE. UU. y es indocumentado 
Separado o lastimado por uno o ambos de sus padres 
 
SIJS le permite permanecer legalmente en los Estados Unidos. Con SIJS, puedes: 
 
* Solicitar una tarjeta verde (residencia permanente legal) 
* Solicitar autorización para trabajar