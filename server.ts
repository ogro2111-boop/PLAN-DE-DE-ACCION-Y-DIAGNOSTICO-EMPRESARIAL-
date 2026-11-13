import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  app.use(express.json());

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });

  // API endpoint for AI Strategic Analysis
  app.post('/api/gemini/analyze', async (req, res) => {
    try {
      const { enterprise, pci, mefi, pestel, mefe, dofa } = req.body;

      const prompt = `Actúa como un Consultor Estratégico Experto y Asesor SENA en gestión y planeación estratégica para micro y pequeñas empresas.
Analiza la siguiente información y matrices estratégicas de la empresa "${enterprise.name || 'Empresa Analizada'}" (Sector: ${enterprise.sector || 'General'}):

1. **Información General y Direccionamiento**:
- Misión: ${enterprise.mission}
- Visión: ${enterprise.vision}
- Valores: ${enterprise.values}
- Objetivos: ${enterprise.objectives}

2. **Matriz PCI (Perfil de Capacidad Interna)**:
${JSON.stringify(pci, null, 2)}

3. **Matriz MEFI (Evaluación Factores Internos)**:
${JSON.stringify(mefi, null, 2)}

4. **Matriz PESTEL (Entorno Externo)**:
${JSON.stringify(pestel, null, 2)}

5. **Matriz MEFE (Evaluación Factores Externos)**:
${JSON.stringify(mefe, null, 2)}

6. **Matriz DOFA y Estrategias Cruzadas**:
${JSON.stringify(dofa, null, 2)}

Por favor, genera un informe técnico y pedagógico estructurado en formato Markdown con:
1. **Resumen Ejecutivo del Diagnóstico**.
2. **Evaluación de Capacidad Interna (PCI y MEFI)**: fortalezas críticas y debilidades a superar.
3. **Análisis del Entorno (PESTEL y MEFE)**: oportunidades y amenazas clave.
4. **Evaluación de las Estrategias DOFA Cruzadas (FO, DO, FA, DA)**.
5. **Recomendaciones Clave para el Plan de Acción Empresarial**.

Usa un tono profesional, académico (SENA), motivador y riguroso.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
      });

      res.json({ analysis: response.text });
    } catch (error: any) {
      console.error('Error in Gemini analysis:', error);
      res.status(500).json({ error: error.message || 'Error al procesar la solicitud con IA' });
    }
  });

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });

  app.use(vite.middlewares);

  const port = 3000;
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

startServer();
