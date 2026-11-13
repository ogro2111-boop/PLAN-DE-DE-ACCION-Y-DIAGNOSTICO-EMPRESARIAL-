# MANUAL DE USUARIO Y GUÍA METODOLÓGICA
## PLAN DE ACCIÓN Y DIAGNÓSTICO ESTRATÉGICO EMPRESARIAL
### Servicio Nacional de Aprendizaje (SENA) - Gestión Organizacional y Empresarial para Mipymes

---

## 1. INTRODUCCIÓN Y PROPÓSITO DE LA HERRAMIENTA

La herramienta **Plan de Acción y Diagnóstico Estratégico Empresarial** es un simulador interactivo y pedagógico desarrollado bajo los lineamientos metodológicos del **SENA**, diseñado para aprendices, instructores, consultores y líderes de micro y pequeñas empresas (Mipymes) en Colombia.

Su objetivo principal es guiar, paso a paso, la estructuración de la dirección estratégica de una empresa:
1. Caracterización empresarial y horizonte corporativo (Misión, Visión, Valores, Objetivos).
2. Diagnóstico del entorno interno mediante la Matriz de **Perfil de Capacidad Interna (PCI)** y la **Matriz de Evaluación de Factores Internos (MEFI)**.
3. Diagnóstico del macroentorno externo mediante la Matriz **PESTEL** y la **Matriz de Evaluación de Factores Externos (MEFE)**.
4. Construcción y cruce estratégico en la **Matriz DOFA y DOFA Cruzada (TOWS: FO, DO, FA, DA)**.
5. Formulación del **Plan de Acción Operativo (5W2H)** con responsables, cronogramas, presupuesto e indicadores clave de desempeño (KPIs).
6. Monitoreo integral en el **Tablero de Control Estratégico y Análisis Asistido por Inteligencia Artificial**.

---

## 2. ESTRUCTURA Y NAVEGACIÓN DEL SISTEMA

La aplicación cuenta con una barra de navegación superior con 6 módulos interconectados secuencialmente:

| Módulo | Nombre | Finalidad Metodológica |
|---|---|---|
| **Pestaña 1** | **Empresa & Direccionamiento** | Registro de perfil empresarial, tamaño, representante y formulación de Misión, Visión, Valores y Objetivos. |
| **Pestaña 2** | **Diagnóstico Interno (PCI & MEFI)** | Evaluación de 5 capacidades internas (Directiva, Competitiva, Financiera, Tecnológica, Talento Humano), cálculo de promedios, gráficos radar/barras y matriz MEFI ponderada. |
| **Pestaña 3** | **Diagnóstico Externo (PESTEL & MEFE)** | Análisis de las 6 fuerzas macroambientales (Político, Económico, Social, Tecnológico, Ecológico, Legal) y consolidación ponderada en la matriz MEFE. |
| **Pestaña 4** | **Matriz DOFA & Cruzada** | Consolidación de Debilidades, Oportunidades, Fortalezas y Amenazas, con formulación de estrategias ofensivas (FO), de adaptación (DO), reactivas (FA) y defensivas (DA). |
| **Pestaña 5** | **Plan de Acción Operativo** | Desglose de actividades concretas, responsables, fechas de ejecución, asignación de recursos monetarios, métricas y estado de cumplimiento. |
| **Pestaña 6** | **Tablero & Análisis IA** | Cuadro de mando integral con indicadores de balance estratégico interno/externo, visualizaciones y generación automática de diagnóstico asistido por IA. |

---

## 3. GUÍA PASO A PASO POR MÓDULOS

### Pestaña 1: Empresa & Direccionamiento Estratégico
1. **Información General:** Ingrese el Nombre de la Empresa, NIT, Sector Económico, Ciudad, Tamaño (Microempresa: 1-10 trabajadores; Pequeña Empresa: 11-50 trabajadores) y Representante Legal.
2. **Direccionamiento Estratégico:**
   - **Misión:** Razón de ser, propuesta de valor, público objetivo y ventaja diferencial.
   - **Visión:** Meta a largo plazo (horizonte temporal de 3 a 5 años).
   - **Valores Corporativos:** Principios éticos que orientan la cultura del equipo.
   - **Objetivos Estratégicos:** Metas cuantitativas y cualitativas de crecimiento y sostenibilidad.

---

### Pestaña 2: Diagnóstico Interno (PCI & MEFI)

#### A. Perfil de Capacidad Interna (PCI)
Evalúa las capacidades clave en 5 áreas funcionales:
- **Capacidad Directiva:** Liderazgo, toma de decisiones, planeación y comunicación.
- **Capacidad Competitiva (Mercado):** Calidad de producto/servicio, servicio al cliente, canales de venta y fidelización.
- **Capacidad Financiera:** Liquidez, rentabilidad, control de costos y acceso a financiación.
- **Capacidad Tecnológica:** Equipamiento, automatización, apropiación digital y herramientas de gestión.
- **Capacidad de Talento Humano:** Capacitación, clima laboral, estabilidad del equipo y sentido de pertenencia.

**Escalas de Calificación:**
- **Impacto (Grado de repercusión en la empresa):**
  - `3 - Alto`: Afecta de forma crítica la supervivencia o rentabilidad.
  - `2 - Medio`: Impacto moderado en las operaciones regulares.
  - `1 - Bajo`: Poca incidencia directa en los resultados globales.
- **Capacidad (Estado actual del factor evaluado):**
  - `3 - Fuerte`: Fortaleza distintiva de la empresa frente a su mercado.
  - `2 - Regular`: Capacidad promedio o en nivel aceptable sin ser diferencial.
  - `1 - Débil`: Debilidad o deficiencia interna que compromete el desempeño.

#### B. Funcionalidades de Transferencia y Automatización Interna:
- **Botón "Pasar Fuertes a DOFA":** Transfiere de manera directa las fortalezas calificadas con Capacidad Fuerte (3) a la lista de **Fortalezas** de la DOFA, y las variables con Capacidad Débil (1) a la lista de **Debilidades**.
- **Botón "Pasar Críticas a MEFI":** Filtra las variables que tienen simultáneamente **Impacto Alto (3)** y **Capacidad Fuerte (3) o Débil (1)** y las incorpora a la Matriz MEFI.
- **Botón "Pasar TODAS a MEFI":** Transfiere todo el universo de variables del PCI a la Matriz MEFI asignando pesos proporcionales uniformes.
- **Casilla "Auto-Sincronización":** Si está activada, cualquier cambio en el PCI actualiza de forma automática la lista de factores críticos de la MEFI.

#### C. Matriz de Evaluación de Factores Internos (MEFI)
- Asigne un **Peso** a cada factor entre `0.00` y `1.00`, asegurando que la **suma de todos los pesos sea exactamente igual a 1.00 (100%)**.
- Calificación de la respuesta:
  - `4`: Fortaleza Mayor.
  - `3`: Fortaleza Menor.
  - `2`: Debilidad Menor.
  - `1`: Debilidad Mayor.
- **Interpretación del Puntaje Ponderado Total MEFI:**
  - `1.00 a 1.99`: Posición interna vulnerable / débil. Requiere reestructuración prioritaria.
  - `2.00 a 2.99`: Posición interna promedio / equilibrada.
  - `3.00 a 4.00`: Posición interna sólida y sobresaliente en el sector.
- **Botones de Transferencia MEFI → DOFA:**
  - **"Pasar Todas a DOFA":** Envía todos los factores de MEFI a Fortalezas y Debilidades de DOFA.
  - **"Pasar Fuertes a DOFA":** Filtra y envía únicamente las Fortalezas Mayores (calificación 4) y Debilidades Mayores (calificación 1).

---

### Pestaña 3: Diagnóstico Externo (PESTEL & MEFE)

#### A. Análisis PESTEL del Macroentorno
Analiza los factores externos no controlables agrupados en:
1. **Político:** Leyes, subsidios, programas gubernamentales (Fondo Emprender SENA, incentivos tributarios).
2. **Económico:** Inflación, tasas de interés, costo de materias primas, poder adquisitivo local.
3. **Social:** Hábitos de consumo saludable, preferencias locales, demografía.
4. **Tecnológico:** Pagos digitales (Nequi, Daviplata, transferencias), redes sociales, e-commerce.
5. **Ecológico / Ambiental:** Manejo de residuos, empaques biodegradables, consumo energético.
6. **Legal:** Normas sanitarias (INVIMA, secretarías de salud), formalización laboral, SST.

**Calificación PESTEL:**
- **Impacto:** Alto, Medio, Bajo.
- **Probabilidad de ocurrencia:** Alta, Media, Baja.
- **Naturaleza del Factor:** `Oportunidad` (favorable) o `Amenaza` (riesgo externo).

#### B. Funcionalidades de Transferencia y Automatización Externa:
- **Botón "Pasar Críticos a DOFA":** Envía directamente los factores externos con **Impacto Alto y Probabilidad Alta** a las columnas de **Oportunidades** o **Amenazas** de la Matriz DOFA.
- **Botón "Pasar Críticos a MEFE":** Integra los factores de mayor urgencia a la Matriz MEFE con normalización automática de pesos.
- **Casilla "Auto-Sincronización PESTEL → MEFE":** Mantiene actualizada la matriz de evaluación externa en tiempo real.

#### C. Matriz de Evaluación de Factores Externos (MEFE)
- Normalice los pesos para que sumen `1.00`.
- Calificación de respuesta de la empresa ante el entorno:
  - `4`: Respuesta superior de la empresa.
  - `3`: Respuesta por encima de la media.
  - `2`: Respuesta regular / promedio.
  - `1`: Respuesta deficiente o inexistente.
- **Interpretación del Puntaje Ponderado Total MEFE:**
  - `1.00 a 1.99`: La empresa no está respondiendo adecuadamente a las amenazas y oportunidades del sector.
  - `2.00 a 2.99`: Desempeño promedio en la gestión de variables externas.
  - `3.00 a 4.00`: Estrategia sobresaliente que capitaliza eficazmente las oportunidades y neutraliza las amenazas.
- **Botones de Transferencia MEFE → DOFA:**
  - **"Pasar Todas a DOFA":** Migra todas las oportunidades y amenazas a la DOFA.
  - **"Pasar Fuertes a DOFA":** Migra únicamente los factores donde la respuesta es Superior (4) o Mala (1).

---

### Pestaña 4: Matriz DOFA & Matriz Cruzada (TOWS)

#### A. DOFA Clásica
Reúne los cuatro cuadrantes básicos:
- **Fortalezas (F)**
- **Debilidades (D)**
- **Oportunidades (O)**
- **Amenazas (A)**

**Botón Maestro "Sincronizar con Diagnósticos":**
Ubicado en la parte superior derecha de la pantalla. Al hacer clic, ejecuta una importación completa y consolidada:
- Transfiere las fortalezas y debilidades críticas del **PCI**.
- Transfiere las oportunidades y amenazas de impacto alto de **PESTEL**.
- Evita entradas duplicadas de texto mediante algoritmos de normalización de cadenas.

#### B. Matriz DOFA Cruzada (Estrategias de Impacto)
Permite formular estrategias combinadas:
1. **Estrategias FO (Maxi - Maxi):** Utilizar fortalezas internas para aprovechar oportunidades del entorno.
2. **Estrategias DO (Mini - Maxi):** Superar debilidades internas aprovechando oportunidades externas.
3. **Estrategias FA (Maxi - Mini):** Usar fortalezas para mitigar o neutralizar amenazas externas.
4. **Estrategias DA (Mini - Mini):** Minimizar debilidades internas y eludir amenazas del entorno (estrategias de supervivencia).

---

### Pestaña 5: Plan de Acción Operativo (Metodología 5W2H)

Permite convertir las estrategias formuladas en la DOFA en compromisos operativos verificables.
Cada acción incluye:
- **Tipo de Estrategia:** FO, DO, FA o DA.
- **Objetivo Estratégico:** ¿Para qué se realiza la acción?
- **Actividad Concreta (Qué):** Descripción puntual de la tarea a ejecutar.
- **Responsable (Quién):** Cargo o persona encargada del cumplimiento.
- **Cronograma (Cuándo):** Fecha de inicio y fecha límite de entrega.
- **Recursos / Presupuesto (Cuánto):** Presupuesto financiero, insumos o herramientas requeridas.
- **Indicador de Medición (KPI):** Fórmula o métrica para medir el éxito del resultado.
- **Estado de Avance:** `Pendiente`, `En Proceso`, `Completado`.

---

### Pestaña 6: Tablero de Control & Análisis Asistido por Inteligencia Artificial

1. **Indicadores Clave en Tiempo Real:**
   - Puntaje total MEFI frente a la meta (umbral 2.50).
   - Puntaje total MEFE frente a la meta (umbral 2.50).
   - Número de acciones planificadas y porcentaje de ejecución.
   - Cantidad total de estrategias cruzadas activas.
2. **Gráficos de Capacidad Interna:**
   - Visualización por áreas funcionales para identificar qué capacidad requiere intervención inmediata.
3. **Generador de Diagnóstico Estratégico Asistido por IA:**
   - Mediante el botón de análisis inteligente, el sistema evalúa toda la información registrada (empresa, PCI, MEFI, PESTEL, MEFE, DOFA y Plan de Acción) y emite un informe estructurado con recomendaciones pedagógicas y operativas personalizadas para la empresa.

---

## 4. GESTIÓN DE ARCHIVOS, COPIAS DE SEGURIDAD E IMPRESIÓN

En la barra superior de la herramienta se disponen los siguientes controles:
- **Caso Modelo:** Restablece en un solo clic una empresa modelo del SENA con datos precargados para demostraciones o capacitación académica.
- **Exportar JSON:** Descarga un archivo digital con el 100% de la información ingresada (empresa, diagnósticos, calificaciones, estrategias y plan de acción). Permite conservar el trabajo sin riesgo de pérdida de datos.
- **Importar JSON:** Carga un archivo previamente exportado para retomar diagnósticos, actualizar avances o evaluar planes de acción de aprendices.
- **Imprimir / PDF:** Genera la vista lista para impresión o exportación a documento PDF formal de todo el estudio estratégico.
- **Modo Claro / Modo Oscuro:** Alterna la interfaz gráfica con transición suave para trabajar con comodidad en cualquier entorno de iluminación.

---

## 5. BENEFICIOS PEDAGÓGICOS PARA APRENDICES E INSTRUCTORES SENA

- **Consistencia Metodológica:** Enseña la secuencia lógica real de la administración estratégica: Diagnosticar antes de planear, cruzar variables antes de definir metas y fijar indicadores antes de ejecutar.
- **Ahorro de Tiempo y Cero Redundancia:** Las herramientas de transferencia evitan que el aprendiz deba transcribir manualmente los mismos textos entre formularios, reduciendo errores y acelerando el análisis.
- **Enfoque Práctico para Mipymes Colombianas:** Incluye variables reales ajustadas a la dinámica económica nacional (plataformas de pago QR, normatividad de manipulación sanitaria, Fondo Emprender, costos laborales de microempresa).

---
*Documento elaborado para el prototipo pedagógico SENA: Plan de Acción y Diagnóstico Estratégico Empresarial.*
