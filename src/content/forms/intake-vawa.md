---
title: "INTAKE FORM VAWA"
description: "Formulario para víctimas de abuso que buscan alivio bajo VAWA"
color: "from-[#0f3f4c] to-[#87b8c6]"
icon: "shield"
fields:
  # ========== INFORMACIÓN PERSONAL ==========
  - name: "nombreCompleto"
    label: "Nombre completo del solicitante"
    type: "text"
    required: true
  - name: "otroNombre"
    label: "Otros nombres que ha usado"
    type: "text"
    required: false
  - name: "direccionActual"
    label: "Dirección donde reside incluyendo código postal y estado"
    type: "text"
    required: true
  - name: "direccionSegura"
    label: "Dirección segura si es diferente a donde reside"
    type: "text"
    required: false
  - name: "numeroA"
    label: "Número A (si tiene)"
    type: "text"
    required: false
  - name: "numeroSeguroSocial"
    label: "Número de Seguro Social (si tiene)"
    type: "text"
    required: false
  - name: "EstadoCivil"
    label: "Estado Civil"
    type: "select"
    required: false
    options:
      - "Soltero/a"
      - "Casado/a"
      - "Divorciado/a"
      - "Viudo/a"
  - name: "Genero"
    label: "Género"
    type: "select"
    required: false
    options:
      - "Hombre"
      - "Mujer"
  - name: "fechaNacimiento"
    label: "Fecha de nacimiento"
    type: "date"
    required: true
  - name: "paisNacimiento"
    label: "País de nacimiento"
    type: "text"
    required: true
  - name: "paisNacionalidad"
    label: "País de nacionalidad"
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

  # ========== INFORMACIÓN DE DOCUMENTOS ==========
  - name: "numeroI94"
    label: "Número de I-94 (si aplica)"
    type: "text"
    required: false
  - name: "fechaExpiraEstadia"
    label: "Fecha que expira la estadía"
    type: "date"
    required: false
  - name: "numeroPasaporte"
    label: "Número de pasaporte o documento de viaje con el cual ingresó"
    type: "text"
    required: false
  - name: "paisEmisioPasaporte"
    label: "País que emitió el pasaporte o documento"
    type: "text"
    required: false
  - name: "fechaExpedicionDoc"
    label: "Fecha de expedición del documento"
    type: "date"
    required: false
  - name: "fechaExpiracionDoc"
    label: "Fecha de expiración del documento"
    type: "date"
    required: false
  - name: "fechaEntrada"
    label: "Fecha de entrada a EE.UU."
    type: "date"
    required: false
  - name: "lugarUltimaEntrada"
    label: "Lugar de la última entrada (ciudad y estado)"
    type: "text"
    required: false
  - name: "estatusMigratorioActual"
    label: "Estatus migratorio actual"
    type: "text"
    required: false

  # ========== PREGUNTAS SOBRE ACTIVIDAD CRIMINAL (Responda SÍ o NO) ==========
  - name: "victimaActividadCriminal"
    label: "1. ¿Es víctima de actividad criminal según lo indica el acta nacional de inmigración en la sección 101(a)(15)(U)(iii)?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "sufridoAbusoFisicoMental"
    label: "2. ¿Ha sufrido abuso físico o mental sustancial como resultado de ser víctima de una actividad criminal?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "poseeInfoActividadCriminal"
    label: "3. ¿Posee información sobre la actividad criminal de la cual fue víctima?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "sometiendoSuplementoB"
    label: "4. ¿Está sometiendo el suplemento 'B' firmado por una autoridad certificada?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "crimenEnTerritorioUSA"
    label: "5. ¿El crimen del cual fue víctima ocurrió en territorio de Estados Unidos?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "menorDe16"
    label: "6. ¿Es menor de 16 años?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "procesoDeportacion"
    label: "7. ¿Estuvo o está en un proceso de deportación con la corte de inmigración?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "detalleProcesoDeportacion"
    label: "Si respondió Sí, indique fecha, tipo de proceso y estado actual"
    type: "textarea"
    required: false

  # ========== VIAJES A EE.UU. ÚLTIMOS 5 AÑOS ==========
  - name: "viajesUSA"
    label: "Viajes a Estados Unidos en los últimos 5 años"
    type: "table"
    required: false
    minRows: 0
    maxRows: 5
    columns:
      - name: "fechaEntradaViaje"
        label: "Fecha entrada"
        type: "date"
      - name: "lugarEntradaViaje"
        label: "Lugar entrada"
        type: "text"
      - name: "ciudadEstadoViaje"
        label: "Ciudad y Estado"
        type: "text"
      - name: "estatusAdmitidoViaje"
        label: "Estatus admitido"
        type: "text"

  # ========== SI ESTÁ FUERA DE EE.UU. ==========
  - name: "fueraUSA"
    label: "¿Se encuentra actualmente fuera de Estados Unidos?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: false
  - name: "lugarNotificacion"
    label: "Si está fuera de EE.UU., seleccione dónde desea ser notificado"
    type: "select"
    options:
      - "Consulado o embajada americana"
      - "Inspección antes del vuelo/puerto de entrada"
      - "Otra dirección"
    required: false
  - name: "ciudadNotificacion"
    label: "Ciudad de notificación"
    type: "text"
    required: false
  - name: "estadoNotificacion"
    label: "Estado de notificación"
    type: "text"
    required: false
  - name: "paisNotificacion"
    label: "País de notificación"
    type: "text"
    required: false

  # ========== ANTECEDENTES CRIMINALES ==========
  - name: "cometioCrimenSinArresto"
    label: "¿Alguna vez ha cometido un crimen por el cual no fue arrestado?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "citadoDetenidoPorOficial"
    label: "¿Alguna vez ha sido citado o detenido por cualquier oficial incluyendo inmigración?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "cargosImputados"
    label: "¿Alguna vez le han impuesto cargos por cometer un crimen u ofensa?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "convictoCrimen"
    label: "¿Alguna vez ha sido convicto de un crimen u ofensa (aún si fue borrada o beneficiado por amnistía)?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "sentenciaAlternativa"
    label: "¿Ha recibido sentencia alternativa (rehabilitación, adjudicación diferida)?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "sentenciaSuspendida"
    label: "¿Ha recibido sentencia suspendida o probatoria?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "puestoEnPrision"
    label: "¿Ha sido puesto en prisión?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "amnistiaRehabilitacion"
    label: "¿Ha sido puesto en amnistía, rehabilitación u otra acción de clemencia similar?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true

  # ========== DETALLES DE ARRESTOS (si aplica) ==========
  - name: "detallesArrestos"
    label: "Si respondió Sí a alguna pregunta anterior, proporcione detalles de cada arresto"
    type: "table"
    required: false
    minRows: 0
    maxRows: 5
    columns:
      - name: "cargoArresto"
        label: "Cargo"
        type: "text"
      - name: "fechaArresto"
        label: "Fecha"
        type: "date"
      - name: "lugarArresto"
        label: "Ciudad/Estado/País"
        type: "text"
      - name: "resultadoArresto"
        label: "Resultado"
        type: "text"

  # ========== HISTORIAL MIGRATORIO ==========
  - name: "negadaAdmision"
    label: "¿Alguna vez le han negado la admisión a los Estados Unidos?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "negadaVisa"
    label: "¿Alguna vez le han negado una visa a los Estados Unidos?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "trabajadoSinAutorizacion"
    label: "¿Alguna vez ha trabajado en Estados Unidos sin autorización?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "violadoTerminosVisa"
    label: "¿Alguna vez ha violado los términos o condiciones de su visa de no inmigrante?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "ordenExclusion"
    label: "¿Alguna vez se le ha emitido una orden final de exclusión, deportación o remoción?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "residenciaRescindida"
    label: "¿Alguna vez ha tenido un estado de residencia permanente que fue rescindido?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "salidaVoluntaria"
    label: "¿Alguna vez le han concedido salida voluntaria pero no partió dentro del tiempo asignado?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "solicitadoAlivio"
    label: "¿Alguna vez ha solicitado alivio o protección contra la expulsión?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "entradaSinInspeccion"
    label: "¿Alguna vez ha entrado a Estados Unidos sin ser inspeccionado y admitido?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "presenciaIlegal180dias"
    label: "¿Desde abril 1997, ha estado ilegalmente presente por más de 180 días pero menos de un año?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "presenciaIlegal1ano"
    label: "¿Ha estado ilegalmente presente por un año o más?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true

  # ========== OTRAS PREGUNTAS DE ADMISIBILIDAD ==========
  - name: "documentacionFraudulenta"
    label: "¿Alguna vez ha presentado documentación fraudulenta para obtener beneficio migratorio?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "reclamadoCiudadaniaFalsa"
    label: "¿Alguna vez ha tratado falsamente de ser ciudadano estadounidense?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "polizon"
    label: "¿Alguna vez ha sido un polizón en un buque o avión?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "ayudadoEntrarIlegalmente"
    label: "¿Alguna vez ha ayudado a algún extranjero a entrar ilegalmente a Estados Unidos?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "poligamia"
    label: "¿Planea practicar la poligamia en los Estados Unidos?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "votadoIlegalmente"
    label: "¿Alguna vez ha votado en violación de cualquier ley en los Estados Unidos?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "renunciadoCiudadania"
    label: "¿Alguna vez renunció a la ciudadanía estadounidense para evitar impuestos?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true

  # ========== PREGUNTAS DE SEGURIDAD NACIONAL ==========
  - name: "actividadesIlegales"
    label: "¿Ha participado en actividades de espionaje, sabotaje o terrorismo?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "entrenamientoMilitar"
    label: "¿Alguna vez ha recibido entrenamiento militar, paramilitar o de armas?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "miembroGrupoArmado"
    label: "¿Ha sido miembro de algún grupo armado, milicia, unidad paramilitar o guerrillera?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "partidoComunista"
    label: "¿Ha sido miembro del Partido Comunista o cualquier partido totalitario?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "torturaGenocidio"
    label: "¿Ha participado en actos de tortura o genocidio?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "traficoPersonas"
    label: "¿Ha participado en tráfico de personas?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "lavadoDinero"
    label: "¿Ha estado involucrado en lavado de dinero?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true

  # ========== INFORMACIÓN SOBRE FAMILIARES ==========
  - name: "familiares"
    label: "Información sobre su cónyuge e hijos (si aplica)"
    type: "table"
    required: false
    minRows: 0
    maxRows: 10
    columns:
      - name: "nombreFamiliar"
        label: "Nombre completo"
        type: "text"
      - name: "fechaNacFamiliar"
        label: "Fecha nacimiento"
        type: "date"
      - name: "paisNacFamiliar"
        label: "País nacimiento"
        type: "text"
      - name: "relacionFamiliar"
        label: "Relación"
        type: "text"
      - name: "residenciaFamiliar"
        label: "Lugar residencia actual"
        type: "text"

  - name: "beneficiariosDerivados"
    label: "¿Hay miembros de la familia aplicando como beneficiarios derivados?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: false

  # ========== EXPLICACIONES ADICIONALES ==========
  - name: "explicacionesAdicionales"
    label: "Si respondió SÍ a cualquier pregunta, proporcione explicación detallada"
    type: "textarea"
    required: false

  - name: "declaracionVeracidad"
    label: "Declaro que toda la información proporcionada es correcta, completa y verdadera"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true

requiredFiles:
  - "1. Pasaporte (si lo tiene)"
  - "2. Acta de nacimiento (con traducción al inglés si está en otro idioma)"
  - "3. Identificación oficial (licencia, matrícula consular, etc.)"
  - "4. Acta de matrimonio (si aplica)"
  - "5. Prueba de buena fe del matrimonio (fotos, cuentas bancarias conjuntas, contratos, hijos en común, etc.)"
  - "6. Pruebas del abuso: reportes de policía, orden de protección, fotografías de lesiones, expedientes judiciales, testimonios de testigos, cartas de familiares/amigos/vecinos/líderes religiosos"
  - "7. Reporte médico u hospitalario (si hubo lesiones físicas)"
  - "8. Evaluación psicológica o carta de terapeuta"
  - "9. Declaración personal del solicitante describiendo el abuso"
  - "10. Actas de nacimiento de hijos (si aplica)"
  - "11. Pruebas de presencia física en EE.UU. (recibos de servicios, empleo, escuela, etc.)"
  - "12. Historial migratorio (entradas y salidas del país, si se tiene)"
  - "13. Copia de la I-94 (si la tiene)"
  - "14. Notificaciones de comparecencia en corte de inmigración - NTA (si aplica)"
  - "15. Órdenes de deportación (si existen)"
  - "16. Registros de detención por ICE o CBP (si aplica)"
  - "17. Permisos de trabajo anteriores (si los tuvo)"
  - "18. Documentos de trámites migratorios anteriores con USCIS (asilo, TPS, peticiones, etc.)"
  - "19. Prueba de que el abusador es ciudadano o residente permanente (copia de green card, certificado de naturalización, si tiene acceso)"
  - "20. Pruebas de cohabitación con el abusador (recibos, contratos, correspondencia dirigida a ambos, etc.)"
---

Formulario VAWA para víctimas de abuso por parte de cónyuge, padre o hijo ciudadano americano o residente permanente. Incluye información personal, documentos migratorios, historial criminal, preguntas de admisibilidad y datos de familiares.
