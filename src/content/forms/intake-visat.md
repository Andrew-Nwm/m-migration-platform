---
title: "INTAKE FORM VISA T"
description: "Formulario preliminar para sobrevivientes de trata de personas (Visa T)"
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
    label: "1. ¿Es víctima de actividad criminal según lo indica el acta nacional de inmigración en la sección 101(a)(15)(T)?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "sufridoAbusoFisicoMental"
    label: "2. ¿Ha sufrido abuso físico o mental sustancial como resultado de ser víctima de trata de personas?"
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
    label: "4. ¿Está sometiendo el suplemento 'B' firmado por una autoridad certificada involucrada en la investigación de su caso?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "crimenEnTerritorioUSA"
    label: "5. ¿El crimen del cual fue víctima ocurrió en territorio de Estados Unidos incluyendo condados indígenas o instalaciones militares?"
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
  - name: "direccionSeguraFuera"
    label: "Dirección segura fuera de Estados Unidos (si es diferente)"
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
    label: "¿Alguna vez ha sido citado o detenido por cualquier oficial incluyendo el Departamento de Seguridad Nacional o inmigración?"
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
  - name: "inmunidadDiplomatica"
    label: "¿Ha ejercido inmunidad diplomática para evitar pagar sentencia por un crimen en Estados Unidos?"
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
        label: "País/Ciudad/Estado"
        type: "text"
      - name: "resultadoArresto"
        label: "Resultado/Disposición"
        type: "text"

  # ========== HISTORIAL MIGRATORIO ==========
  - name: "negadaAdmision"
    label: "1. ¿Alguna vez le han negado la admisión a los Estados Unidos?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "negadaVisa"
    label: "2. ¿Alguna vez le han negado una visa a los Estados Unidos?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "trabajadoSinAutorizacion"
    label: "3. ¿Alguna vez ha trabajado en Estados Unidos sin autorización?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "violadoTerminosVisa"
    label: "4. ¿Alguna vez ha violado los términos o condiciones de su condición de no inmigrante?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "procesoRemocion"
    label: "5. ¿Está presente o ha estado alguna vez en remoción, exclusión, rescisión o decisión previa?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "ordenExclusion"
    label: "6. ¿Alguna vez se le ha emitido una orden final de exclusión, deportación o remoción?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "ordenReintegrada"
    label: "7. ¿Alguna vez ha tenido una orden final previa de exclusión, deportación o remoción reintegrada?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "residenciaRescindida"
    label: "8. ¿Alguna vez ha tenido un estado de residencia permanente que posteriormente fue rescindido?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "salidaVoluntaria"
    label: "9. ¿Alguna vez le han concedido salida voluntaria pero no pudo partir dentro del tiempo asignado?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "solicitadoAlivio"
    label: "10. ¿Alguna vez ha solicitado alguna clase de alivio o protección contra la expulsión, exclusión o deportación?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true

  # ========== PREGUNTAS ADICIONALES DE ADMISIBILIDAD ==========
  - name: "arrestadoCitado"
    label: "11. ¿Alguna vez ha sido arrestado, citado, acusado o detenido por cualquier motivo por algún oficial de la ley?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "cometidoCrimenSinJuzgar"
    label: "12. ¿Alguna vez ha cometido un crimen de cualquier tipo (incluso si no fue arrestado, citado, acusado o juzgado)?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "declaradoCulpable"
    label: "13. ¿Alguna vez ha declarado culpable de un delito (incluso si fue borrado, sellado o perdonado)?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "condicionesLibertad"
    label: "14. ¿Alguna vez le han impuesto condiciones que restringen su libertad (prisión, arresto domiciliario, libertad condicional, probation, servicio comunitario)?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "acusadoProcesoPenal"
    label: "15. ¿Alguna vez ha sido acusado en un proceso penal?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "violadoLeySustancias"
    label: "16. ¿Alguna vez ha violado alguna ley sobre sustancias controladas?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "condenadoDosDelitos"
    label: "17. ¿Alguna vez ha sido condenado por dos o más delitos con penas combinadas de cinco años o más?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "traficadoSustancias"
    label: "18. ¿Alguna vez ha traficado ilegalmente o se ha beneficiado del tráfico de sustancias controladas?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "ayudadoTraficoSustancias"
    label: "19. ¿Ha ayudado, asistido, conspirado en el tráfico ilícito de narcóticos u otras sustancias controladas?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "familiarTraficoSustancias"
    label: "20. ¿Es cónyuge, hijo o hija de un extranjero que traficó ilícitamente sustancias controladas y obtuvo beneficio de ello?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "involucradoProstitucion"
    label: "21. ¿Alguna vez ha estado involucrado en la prostitución o viene a EE.UU. para dedicarse a ella?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "procuradoProstitucion"
    label: "22. ¿Alguna vez ha procurado o importado personas con fines de prostitución?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "dineroProstitucion"
    label: "23. ¿Alguna vez recibió dinero de la prostitución?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "juegosAzarIlegales"
    label: "24. ¿Tiene intención de participar en juegos de azar ilegales, prostitución, contrabando o pornografía infantil?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "inmunidadEvitarProceso"
    label: "25. ¿Alguna vez ha ejercido inmunidad para evitar ser procesado por un delito en EE.UU.?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "violacionesLibertadReligiosa"
    label: "26. ¿Alguna vez, como funcionario del gobierno extranjero, ha sido responsable de violaciones de libertades religiosas?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "trataPersonasActosSexuales"
    label: "27. ¿Alguna vez ha inducido por fuerza, fraude o coerción la trata de personas por actos sexuales comerciales?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "traficadoPersonaServidumbre"
    label: "28. ¿Alguna vez ha traficado a una persona con servidumbre involuntaria, peonaje, esclavitud por deudas o esclavitud?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "ayudadoTraficoPersonas"
    label: "29. ¿Alguna vez ha ayudado, asistido, conspirado en tráfico de personas por actos sexuales comerciales o servidumbre?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "familiarTraficoPersonas"
    label: "30. ¿Es cónyuge, hijo o hija de un extranjero que se dedica al tráfico de personas y ha recibido beneficios de ello?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "lavadoDinero"
    label: "31. ¿Alguna vez ha estado involucrado en lavado de dinero o ha ayudado, conspirado en lavado de dinero?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true

  # ========== PREGUNTAS DE SEGURIDAD NACIONAL ==========
  - name: "actividadEspionaje"
    label: "32. ¿Ha participado en actividad que viole ley de espionaje o sabotaje en EE.UU.?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "exportacionIlegal"
    label: "33. ¿Ha participado en actividad que viole ley de exportación de bienes, tecnología o información sensible?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "oposicionGobierno"
    label: "34. ¿Ha participado en actividad cuyo propósito sea oponerse, controlar o derrocar al Gobierno de EE.UU. por fuerza?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "peligroSeguridad"
    label: "35. ¿Ha participado en actividad que pueda poner en peligro el bienestar o seguridad de EE.UU.?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "actividadIlegal"
    label: "36. ¿Ha participado en cualquier otra actividad ilegal?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "consecuenciasPoliticaExterior"
    label: "37. ¿Está involucrado o tiene intención de participar en actividad con consecuencias adversas para la política exterior de EE.UU.?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "actividadTerrorista"
    label: "38. ¿Ha cometido, amenazado, intentado o planeado secuestro, sabotaje, asesinato político o uso de armas/explosivos?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "miembroGrupoTerrorista"
    label: "39. ¿Ha participado o sido miembro de grupo u organización que realizó actividades descritas anteriormente?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "reclutadoMiembros"
    label: "40. ¿Ha reclutado miembros o pedido dinero para un grupo que realizó actividades ilegales?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "ofrecidoApoyo"
    label: "41. ¿Ha ofrecido dinero, servicios, trabajo u otra ayuda para actividades ilegales descritas?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "apoyoGrupoIlegal"
    label: "42. ¿Ha ofrecido dinero, servicios u otra ayuda a individuo, grupo u organización que hizo actividades ilegales?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "entrenamientoMilitar"
    label: "43. ¿Alguna vez ha recibido entrenamiento militar, paramilitar o de armas?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "intencionActividadesIlegales"
    label: "44. ¿Intenta participar en alguna de las actividades ilegales enumeradas?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "familiarActividadIlegal"
    label: "45-50. ¿Es cónyuge o hijo de persona que ha cometido, participado o apoyado actividades ilegales descritas?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "vendidoArmas"
    label: "51. ¿Ha ayudado o participado en vender, proveer o transportar armas a personas que las usaron contra otros?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "trabajadoPrision"
    label: "52. ¿Ha trabajado en alguna prisión, cárcel, campo de prisioneros, centro de detención o campo de trabajos forzados?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "miembroGrupoArmado"
    label: "53-54. ¿Ha sido miembro o participado en grupo armado, unidad militar, paramilitar, policía, guerrillero, milicia u otro?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "partidoComunista"
    label: "55. ¿Ha sido miembro del Partido Comunista o cualquier partido totalitario?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "persecucionNazi"
    label: "56. ¿Entre 1933 y 1945, participó en persecución por raza, religión u opinión política asociado al gobierno nazi?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "torturaGenocidio"
    label: "57. ¿Ha cometido actos de tortura o genocidio?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "matadoPersona"
    label: "58. ¿Ha matado a cualquier persona?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "heridoGravemente"
    label: "59. ¿Ha intencional y gravemente herido a cualquier persona?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "contactoSexualNoConsentido"
    label: "60. ¿Ha participado en contacto sexual con persona que no consintió, fue forzada o amenazada?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "negadoLibertadReligiosa"
    label: "61. ¿Ha limitado o negado a cualquier persona ejercer creencias religiosas?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "reclutadoMenores"
    label: "62-63. ¿Ha reclutado o usado menores de 15 años para servir a fuerza armada o participar en hostilidades?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true

  # ========== PREGUNTAS DE DOCUMENTACIÓN E INMIGRACIÓN ==========
  - name: "documentacionFraudulenta"
    label: "65. ¿Ha presentado documentación fraudulenta a funcionario del Gobierno de EE.UU. para obtener beneficio migratorio?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "mentidoSolicitud"
    label: "66. ¿Ha mentido, ocultado o tergiversado información en solicitud de visa o beneficio migratorio?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "reclamadoCiudadaniaFalsa"
    label: "67. ¿Ha tratado falsamente de ser ciudadano estadounidense?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "polizon"
    label: "68. ¿Ha sido polizón en un buque o avión que llega a Estados Unidos?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "ayudadoEntrarIlegalmente"
    label: "69. ¿Ha ayudado a cualquier extranjero a entrar o tratar de entrar ilegalmente a EE.UU.?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "ordenDocumentosFraudulentos"
    label: "70. ¿Está bajo orden judicial final por violar sección 274C del INA por uso de documentos fraudulentos?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "excluidoDeportado"
    label: "71. ¿Ha sido excluido, deportado o removido de EE.UU. o partido después de ser ordenado?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "entradaSinInspeccion"
    label: "72. ¿Ha entrado a EE.UU. sin ser inspeccionado y admitido o con libertad condicional?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "presenciaIlegal1997"
    label: "73. ¿Desde el 1 de abril de 1997, ha estado ilegalmente presente en Estados Unidos?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "presenciaIlegal180dias"
    label: "74. ¿Por más de 180 días pero menos de un año, y luego salió de Estados Unidos?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "presenciaIlegal1ano"
    label: "75. ¿Por un año o más y luego partió de Estados Unidos?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "presenciaIlegalTotal1ano"
    label: "76. ¿Ha estado ilegalmente presente en EE.UU. por más de un año en total?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "deportadoExcluidoRemovido"
    label: "77. ¿Ha sido deportado, excluido o removido de Estados Unidos?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "poligamia"
    label: "78. ¿Planea practicar la poligamia en Estados Unidos?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "acompanandoExtranjero"
    label: "79. ¿Está acompañando a otro extranjero que requiere su protección pero es inadmisible por enfermedad o incapacidad?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "custodiaIlegalNino"
    label: "80. ¿Ha ayudado a detener o retener custodia de un niño ciudadano estadounidense fuera de EE.UU.?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "votadoIlegalmente"
    label: "81. ¿Ha votado en violación de cualquier ley en Estados Unidos?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "renunciadoCiudadania"
    label: "82. ¿Ha renunciado a la ciudadanía estadounidense para evitar impuestos?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "exencionServicioMilitar"
    label: "83-84. ¿Ha solicitado exención del servicio militar de EE.UU. por ser extranjero o ha sido relevado por ello?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "desercionMilitar"
    label: "85. ¿Ha sido condenado por deserción de las fuerzas armadas estadounidenses?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "evadirServicioMilitar"
    label: "86. ¿Se ha marchado o quedado fuera de EE.UU. para evitar servicio militar en tiempo de guerra?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true
  - name: "estatusMigratorioAntesSalir"
    label: "87. Si respondió Sí a la pregunta anterior, ¿cuál era su nacionalidad o estatus migratorio antes de irse?"
    type: "text"
    required: false

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
    label: "¿Hay miembros de la familia aplicando como beneficiarios derivados de esta petición?"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: false

  # ========== EXPLICACIONES ADICIONALES ==========
  - name: "explicacionesAdicionales"
    label: "Si respondió SÍ a cualquier pregunta, proporcione explicación detallada incluyendo fechas y ubicación"
    type: "textarea"
    required: false

  - name: "declaracionVeracidad"
    label: "Declaro que toda la información que he proporcionado es correcta, completa y verdadera"
    type: "radio"
    options:
      - "Sí"
      - "No"
    required: true

requiredFiles:
  - "1. Pasaporte (si lo tiene)"
  - "2. Acta de nacimiento (con traducción al inglés si está en otro idioma)"
  - "3. Reporte de policía"
  - "4. Expedientes judiciales (si los hay)"
  - "5. Orden de protección o denuncia (si aplica)"
  - "6. Declaración personal del solicitante describiendo la situación de trata"
  - "7. Fotografías de lesiones o condiciones de abuso (si aplica)"
  - "8. Cartas o testimonios de testigos (si los hay)"
  - "9. Reporte médico u hospitalario"
  - "10. Evaluación psicológica o carta de terapeuta"
  - "11. Cartas o correos que evidencien colaboración con autoridades (si aplica)"
  - "12. Documentos de investigaciones abiertas o casos relacionados"
  - "13. Recibos de alquiler, servicios, empleo o escuela en EE.UU. (prueba de presencia física)"
  - "14. Cartas de organizaciones comunitarias, religiosas o sociales"
  - "15. Historial migratorio (entradas y salidas del país, si se tiene)"
  - "16. Copia de la I-94 (si la tiene)"
  - "17. Registros de detención por ICE o CBP (si existen)"
  - "18. Órdenes de deportación previas (si las hay)"
  - "19. Notificaciones de comparecencia en corte de inmigración - NTA (si aplica)"
  - "20. Permisos de trabajo anteriores (si los tuvo)"
  - "21. Actas de nacimiento de hijos, cónyuge o padres incluidos en la solicitud (si aplica)"
  - "22. Certificado de matrimonio (si aplica)"
  - "23. Pruebas de relación familiar (fotos, cartas, evidencia de dependencia económica)"
  - "24. Suplemento A para cada beneficiario derivado (si aplica)"
---

Formulario para víctimas de tráfico humano (Visa T). Incluye información personal, documentos migratorios, preguntas de admisibilidad, antecedentes criminales, historial migratorio, preguntas de seguridad nacional e información de familiares.
