---
title: "INTAKE FOR ADMISSION ANNEX VISA FOR VICTIMS "
description: "Formulario de admisión para visas enfocadas en víctimas."
color: "from-[#0f3f4c] to-[#87b8c6]"
icon: "shield"
fields:
  - name: "nombreCompleto"
    label: "Nombre Legal Completo"
    type: "text"
    required: false
  - name: "aNumber"
    label: "Número de registro de extranjero (A-Number) (si tienes)"
    type: "text"
    required: false
  - name: "historialVivienda"
    label: "¿Dónde has vivido durante los últimos cinco años (proporcionar todas las direcciones y fechas)? "
    type: "table"
    required: true
    minRows: 5
    maxRows: 5
    columns:
      - name: "adress"
        label: "Dirección"
        type: "text"
      - name: "desde"
        label: "Desde (mes/año)"
        type: "text"
      - name: "hasta"
        label: "Hasta (mes/año)"
        type: "text"

  - name: "telefono"
    label: "Teléfono de contacto"
    type: "tel"
    required: false
  - name: "estadoCivil"
    label: "¿Cuál es tu estado civil actual?"
    type: "text"
    required: false
  - name: "vecesCasado"
    label: "¿Cuántas veces te has casado (incluyendo anulaciones y al mismo cónyuge)?"
    type: "text"
    required: false
  - name: "nombreConyuge"
    label: "Nombre completo del cónyuge actual"
    type: "text"
    required: false
  - name: "aNumberConyuge"
    label: "A-Number del cónyuge (si aplica)"
    type: "text"
    required: false
  - name: "fechaNacimientoConyuge"
    label: "Fecha y lugar de nacimiento del cónyuge"
    type: "text"
    required: false
  - name: "fechaLugarMatrimonio"
    label: "Fecha y lugar del matrimonio"
    type: "text"
    required: false
  - name: "matrimoniosAnteriores"
    label: "¿Has tenido matrimonios anteriores? (detallar cada uno: nombre del excónyuge, fechas, lugar de matrimonio y divorcio)"
    type: "text"
    required: false
  - name: "causalesInadmisibilidad"
    label: "¿Qué causales de inadmisibilidad aplican a tu caso?"
    type: "text"
    required: false
  - name: "permisoEntrada"
    label: "¿Has solicitado previamente permiso para entrar a EE.UU. como no inmigrante?"
    type: "text"
    required: false
  - name: "seisMeses"
    label: "¿Has estado alguna vez en EE.UU. por seis meses o más? ¿Cuándo y bajo qué estatus?"
    type: "text"
    required: false
  - name: "beneficiosMigratorios"
    label: "¿Tú o alguien en tu nombre ha solicitado beneficios migratorios en EE.UU.?"
    type: "text"
    required: false
  - name: "negacionBeneficios"
    label: "¿Te han negado beneficios migratorios? ¿Cuáles? ¿Cuándo? ¿Dónde?"
    type: "text"
    required: false
  - name: "arresto"
    label: "¿Has sido arrestado(a), citado(a), acusado(a), multado(a), o condenado(a) dentro o fuera de EE. UU.? (Explica cada caso)"
    type: "textarea"
    required: false
  - name: "ocupacion"
    label: "¿Cuál es tu ocupación actual o más reciente?"
    type: "text"
    required: false
  - name: "EmpleosAnteriores"
    label: "¿Tienes empleos anteriores? (Proporcionar detalles para cada uno)"
    type: "table"
    required: true
    minRows: 3
    maxRows: 5
    columns:
      - name: "nombreEmpleo"
        label: "Nombre"
        type: "text"
      - name: "direccionEmpleo"
        label: "Direccion"
        type: "text"
      - name: "desdeEmpleo"
        label: "Desde (mes/año)"
        type: "text"
      - name: "hastaEmpleo"
        label: "Hasta (mes/año)"
        type: "text"
      - name: "ocupacionEmpleo"
        label: "Ocupacion"
        type: "text"
        



---
Formulario para admisión de visa para víctimas. Incluye datos personales, familiares, antecedentes y motivos migratorios.