/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  Building2,
  Compass,
  FileSpreadsheet,
  Globe,
  Grid,
  CheckSquare,
  BarChart3,
  Sparkles,
  Download,
  Upload,
  Printer,
  HelpCircle,
  Plus,
  Trash2,
  RefreshCw,
  Info,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Target,
  Award,
  Users,
  Briefcase,
  Sun,
  Moon,
  Zap,
  ArrowRight,
  ArrowDownToLine,
  PlayCircle,
  X,
  Maximize2,
  Minimize2,
  ExternalLink,
  RotateCcw,
  PictureInPicture2,
  MonitorPlay
} from 'lucide-react';


const SenaLogoSmall = () => (
  <img
    src="data:image/svg+xml,%3c?xml%20version=%271.0%27%20encoding=%27utf-8%27?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2026.0.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version=%271.1%27%20id=%27Capa_1%27%20xmlns=%27http://www.w3.org/2000/svg%27%20xmlns:xlink=%27http://www.w3.org/1999/xlink%27%20x=%270px%27%20y=%270px%27%20viewBox=%270%200%201000%201000%27%20style=%27enable-background:new%200%200%201000%201000;%27%20xml:space=%27preserve%27%3e%3cstyle%20type=%27text/css%27%3e%20.st0{fill:%2339a900;}%20%3c/style%3e%3cpath%20id=%27path47-5%27%20class=%27st0%27%20d=%27M504.2,20.5c-58.3,0.1-105.6,47.4-105.5,105.8c0.1,58.3,47.4,105.6,105.7,105.6%20c58.3,0,105.6-47.3,105.6-105.7V126C609.9,67.6,562.6,20.4,504.2,20.5z%20M155.6,264.6c-18.6,0.1-37.5,1.1-55.2,5.6%20c-11.7,3-23,7.8-30.3,15.4c-9.2,9.5-10.4,22.3-5.9,33.3c4,9.7,14.8,16.9,26.8,21.1c25.9,8.9,54.6,10.7,81.8,16.3%20c5,1.2,10.6,2.6,13.7,6c3.2,4.1,1.3,9.7-4,12.2c-8.8,4.5-20.1,4.5-30.4,4.4c-9.4-0.4-19.7-1.2-27.2-5.9c-5.5-3.4-6.5-9.1-5.2-14.1%20l-60.6,0c-0.2,9.2,1.6,18.9,8.4,26.8c5.6,6.8,14.8,11.5,24.6,14.4c15.7,4.6,32.7,6,49.4,6.4c22.7,0.4,45.8-0.3,67.6-5.4%20c13-3.2,25.8-8.3,34.1-16.6c14.8-14.8,11.3-38.3-8.3-49.8c-9.8-5.7-21.5-9.2-33.4-11.5c-17.5-3.6-35.3-6.3-52.9-9.2%20c-6.2-1.2-12.8-2.3-18-5.2c-5.5-2.9-5.9-9.8-0.3-12.9c7.2-4.1,16.8-4,25.4-4c9.1,0.2,19,0.7,26.5,5c4.2,2.3,5.9,6.3,5.9,10.1%20l57.6-0.1c-0.2-7.3-1.6-14.9-6.9-21.2c-6.2-7.8-17.1-12.7-28.3-15.5C192.8,265.6,174.1,264.7,155.6,264.6L155.6,264.6z%20M280.6,268.9%20l0,137.7l168.1,0l0-30H342.3v-26.7h94.9v-29.3h-94.9l0-21.9l102.6,0l-0.1-29.7L280.6,268.9z%20M557.5,269c0,0-51.9,0-77.9,0l0,137.7%20l59,0l0-92.7l80.8,92.6l81,0.1l0-137.7l-59.1,0l0.1,92L557.5,269z%20M805.6,269.2c0,0-63.6,91.9-95.6,137.7l61.9,0l14.9-24.8h95.7%20l13.9,24.9l68.8,0L874,269.2L805.6,269.2z%20M836.6,302.1l29.4,49.9l-60.7,0.1L836.6,302.1z%20M10.6,445.6l0.5,75l280.1-1%20c14.3,3.1,22.6,12.4,19.7,33.5L138.6,854.7l56.1,52.5l266.9-461.6L10.6,445.6z%20M545.2,446.2l262.4,459.6l58-52.1L691.3,552.9%20c-2.9-21.2,5.4-30.6,19.7-33.7l280.2,1l-0.1-73.7L545.2,446.2z%20M500.9,522.3L254.8,944.7l65.4,31.9L484.4,699%20c5.7-4.6,11.4-7.1,17.1-7.3c6-0.2,12.2,2,18.3,6.8l163.8,278.4l67.4-35.2L500.9,522.3z%27/%3e%3cg%20id=%27_x23_000000ff-2%27%20transform=%27matrix(0.31570611,0,0,0.23560774,-391.49698,-10.601126)%27%3e%3c/g%3e%3c/svg%3e"
    alt="SENA"
    className="w-5 h-5 inline-block object-contain"
  />
);

interface EnterpriseProfile {
  name: string;
  nit: string;
  sector: string;
  city: string;
  size: 'Microempresa' | 'Pequeña Empresa';
  manager: string;
  foundedYear: string;
  mission: string;
  vision: string;
  values: string;
  objectives: string;
}

interface PCIItem {
  id: string;
  category: 'Directiva' | 'Competitiva' | 'Financiera' | 'Tecnológica' | 'Talento Humano';
  name: string;
  impact: number; // 3: Alto, 2: Medio, 1: Bajo
  capacity: number; // 3: Fuerte, 2: Regular, 1: Débil
  observation: string;
}

interface MEFIItem {
  id: string;
  type: 'Fortaleza' | 'Debilidad';
  description: string;
  weight: number; // 0.0 to 1.0 (suma debe ser 1.0)
  rating: number; // 1 to 4 (1: Debilidad Mayor, 2: Debilidad Menor, 3: Fortaleza Menor, 4: Fortaleza Mayor)
}

interface PESTELItem {
  id: string;
  category: 'Político' | 'Económico' | 'Social' | 'Tecnológico' | 'Ecológico' | 'Legal';
  factor: string;
  impact: 'Alto' | 'Medio' | 'Bajo';
  probability: 'Alta' | 'Media' | 'Baja';
  nature?: 'Oportunidad' | 'Amenaza';
  implication: string;
}

interface MEFEItem {
  id: string;
  type: 'Oportunidad' | 'Amenaza';
  description: string;
  weight: number; // 0.0 to 1.0 (suma debe ser 1.0)
  rating: number; // 1 to 4 (1: Respuesta Mala, 2: Respuesta Regular, 3: Respuesta Buena, 4: Respuesta Superior)
}

interface DOFAData {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
  foStrategies: string[];
  doStrategies: string[];
  faStrategies: string[];
  daStrategies: string[];
}

interface ActionItem {
  id: string;
  strategyType: 'FO' | 'DO' | 'FA' | 'DA';
  objective: string;
  action: string;
  responsible: string;
  startDate: string;
  endDate: string;
  resources: string;
  kpi: string;
  status: 'Pendiente' | 'En Proceso' | 'Completado';
}

const INITIAL_ENTERPRISE: EnterpriseProfile = {
  name: "",
  nit: "",
  sector: "",
  city: "",
  size: "Microempresa",
  manager: "",
  foundedYear: "",
  mission: "",
  vision: "",
  values: "",
  objectives: ""
};

const INITIAL_PCI: PCIItem[] = [];

const DEFAULT_SENA_PCI_VARIABLES: PCIItem[] = [
  { id: 'pci-1', category: 'Directiva', name: 'Planificación estratégica y claridad en el direccionamiento', impact: 3, capacity: 2, observation: 'Posee visión clara pero requiere mayor seguimiento.' },
  { id: 'pci-2', category: 'Directiva', name: 'Flexibilidad organizacional y toma de decisiones', impact: 2, capacity: 3, observation: 'Estructura ágil para responder a cambios.' },
  { id: 'pci-3', category: 'Competitiva', name: 'Calidad del producto / servicio y propuesta de valor', impact: 3, capacity: 3, observation: 'Alta aceptación y diferenciación de calidad.' },
  { id: 'pci-4', category: 'Competitiva', name: 'Estrategias de mercadeo y canales de distribución', impact: 3, capacity: 1, observation: 'Canales tradicionales con poca presencia digital.' },
  { id: 'pci-5', category: 'Financiera', name: 'Nivel de liquidez y capital de trabajo disponible', impact: 3, capacity: 1, observation: 'Flujo de caja ajustado para expansión.' },
  { id: 'pci-6', category: 'Financiera', name: 'Control de costos y rentabilidad de operaciones', impact: 2, capacity: 2, observation: 'Márgenes estables con margen de optimización.' },
  { id: 'pci-7', category: 'Tecnológica', name: 'Nivel de automatización de procesos operativos', impact: 3, capacity: 2, observation: 'Maquinaria funcional pero susceptible a mejoras.' },
  { id: 'pci-8', category: 'Tecnológica', name: 'Apropiación digital y uso de software de gestión', impact: 2, capacity: 2, observation: 'Uso de herramientas ofimáticas básicas.' },
  { id: 'pci-9', category: 'Talento Humano', name: 'Competencias técnicas y habilidades del equipo', impact: 3, capacity: 3, observation: 'Personal comprometido y capacitado en su labor.' },
  { id: 'pci-10', category: 'Talento Humano', name: 'Clima laboral, motivación y sentido de pertenencia', impact: 2, capacity: 3, observation: 'Buen ambiente de trabajo y baja rotación.' }
];

const INITIAL_MEFI: MEFIItem[] = [];

const INITIAL_PESTEL: PESTELItem[] = [];

const DEFAULT_SENA_PESTEL_VARIABLES: PESTELItem[] = [
  {
    id: 'pestel-1',
    category: 'Político',
    factor: 'Políticas gubernamentales y subsidios a microempresas (Fondo Emprender SENA)',
    impact: 'Alto',
    probability: 'Alta',
    nature: 'Oportunidad',
    implication: 'Acceso a capital semilla no reembolsable y asesoría técnica especializada.'
  },
  {
    id: 'pestel-2',
    category: 'Político',
    factor: 'Cambios en normatividad laboral y costos de formalización empresarial',
    impact: 'Medio',
    probability: 'Media',
    nature: 'Amenaza',
    implication: 'Exige optimizar estructura de costos y asesorarse en contratación adecuada.'
  },
  {
    id: 'pestel-3',
    category: 'Económico',
    factor: 'Inflación en materias primas y variación de costos de insumos esenciales',
    impact: 'Alto',
    probability: 'Alta',
    nature: 'Amenaza',
    implication: 'Presiona el margen de ganancia; requiere alianzas directas con mayoristas.'
  },
  {
    id: 'pestel-4',
    category: 'Económico',
    factor: 'Preferencia creciente de la comunidad por compras de cercanía y comercio local',
    impact: 'Alto',
    probability: 'Alta',
    nature: 'Oportunidad',
    implication: 'Gran potencial de fidelizar clientes de la zona con trato cálido y personalizado.'
  },
  {
    id: 'pestel-5',
    category: 'Social',
    factor: 'Tendencia del consumidor hacia productos frescos, artesanales y saludables',
    impact: 'Alto',
    probability: 'Alta',
    nature: 'Oportunidad',
    implication: 'Permite posicionar líneas de mayor calidad y valor agregado.'
  },
  {
    id: 'pestel-6',
    category: 'Social',
    factor: 'Presupuesto familiar más racional y alta sensibilidad a promociones',
    impact: 'Medio',
    probability: 'Alta',
    nature: 'Amenaza',
    implication: 'Exige diseñar combos accesibles y ofertas especiales periódicas.'
  },
  {
    id: 'pestel-7',
    category: 'Tecnológico',
    factor: 'Masificación de transferencias y pagos móviles inmediatos (Nequi, Daviplata, QR)',
    impact: 'Alto',
    probability: 'Alta',
    nature: 'Oportunidad',
    implication: 'Agiliza transacciones, evita pérdidas de venta y minimiza uso de efectivo.'
  },
  {
    id: 'pestel-8',
    category: 'Tecnológico',
    factor: 'Uso comercial de WhatsApp Business y redes sociales para ventas directas',
    impact: 'Alto',
    probability: 'Alta',
    nature: 'Oportunidad',
    implication: 'Canal de atención y catálogo digital de bajo costo con alcance continuo.'
  },
  {
    id: 'pestel-9',
    category: 'Ecológico',
    factor: 'Regulaciones ambientales sobre empaques plásticos de un solo uso',
    impact: 'Medio',
    probability: 'Alta',
    nature: 'Amenaza',
    implication: 'Demanda sustitución progresiva por bolsas de papel y empaques compostables.'
  },
  {
    id: 'pestel-10',
    category: 'Legal',
    factor: 'Exigencias de normatividad sanitaria, BPM y visitas de inspección de Salud',
    impact: 'Alto',
    probability: 'Alta',
    nature: 'Amenaza',
    implication: 'Obliga a mantener protocolos higiénicos estrictos y registros vigentes.'
  },
  {
    id: 'pestel-11',
    category: 'Legal',
    factor: 'Régimen Simple de Tributación (RST) y facilidades de facturación electrónica',
    impact: 'Medio',
    probability: 'Media',
    nature: 'Oportunidad',
    implication: 'Facilita la formalización tributaria con menor carga administrativa.'
  }
];

const INITIAL_MEFE: MEFEItem[] = [];

const INITIAL_DOFA: DOFAData = {
  strengths: [],
  weaknesses: [],
  opportunities: [],
  threats: [],
  foStrategies: [],
  doStrategies: [],
  faStrategies: [],
  daStrategies: []
};

const INITIAL_ACTIONS: ActionItem[] = [];

export default function App() {
  const [activeTab, setActiveTab] = useState<'empresa' | 'interno' | 'externo' | 'dofa' | 'acciones' | 'tablero'>('empresa');
  
  // States
  const [enterprise, setEnterprise] = useState<EnterpriseProfile>(INITIAL_ENTERPRISE);
  const [pci, setPCI] = useState<PCIItem[]>(INITIAL_PCI);
  const [mefi, setMEFI] = useState<MEFIItem[]>(INITIAL_MEFI);
  const [pestel, setPESTEL] = useState<PESTELItem[]>(INITIAL_PESTEL);
  const [mefe, setMEFE] = useState<MEFEItem[]>(INITIAL_MEFE);
  const [dofa, setDOFA] = useState<DOFAData>(INITIAL_DOFA);
  const [actions, setActions] = useState<ActionItem[]>(INITIAL_ACTIONS);
  const [pciChartType, setPciChartType] = useState<'barras' | 'radar' | 'cuadrantes'>('barras');
  const [pestelChartType, setPestelChartType] = useState<'radar' | 'barras' | 'matriz'>('radar');

  // AI State
  const [aiAnalysis, setAiAnalysis] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [aiError, setAiError] = useState<string>('');

  // Notification Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Calculations for MEFI
  const totalMefiWeight = mefi.reduce((acc, item) => acc + item.weight, 0);
  const totalMefiScore = mefi.reduce((acc, item) => acc + (item.weight * item.rating), 0);

  // Calculations for MEFE
  const totalMefeWeight = mefe.reduce((acc, item) => acc + item.weight, 0);
  const totalMefeScore = mefe.reduce((acc, item) => acc + (item.weight * item.rating), 0);

  // Calculations for PCI Averages and Counts by category
  const categoriesPCI: Array<'Directiva' | 'Competitiva' | 'Financiera' | 'Tecnológica' | 'Talento Humano'> = [
    'Directiva', 'Competitiva', 'Financiera', 'Tecnológica', 'Talento Humano'
  ];

  const pciSummary = categoriesPCI.map(cat => {
    const items = pci.filter(i => i.category === cat);
    if (items.length === 0) {
      return {
        category: cat,
        avgCapacity: 0,
        avgImpact: 0,
        count: 0,
        fuertes: 0,
        regulares: 0,
        debiles: 0
      };
    }
    const avgCapacity = items.reduce((acc, i) => acc + i.capacity, 0) / items.length;
    const avgImpact = items.reduce((acc, i) => acc + i.impact, 0) / items.length;
    const fuertes = items.filter(i => i.capacity === 3).length;
    const regulares = items.filter(i => i.capacity === 2).length;
    const debiles = items.filter(i => i.capacity === 1).length;
    return {
      category: cat,
      avgCapacity: Number(avgCapacity.toFixed(2)),
      avgImpact: Number(avgImpact.toFixed(2)),
      count: items.length,
      fuertes,
      regulares,
      debiles
    };
  });

  const totalPciVariables = pci.length;
  const globalAvgCapacity = totalPciVariables > 0
    ? Number((pci.reduce((acc, i) => acc + i.capacity, 0) / totalPciVariables).toFixed(2))
    : 0;
  const globalAvgImpact = totalPciVariables > 0
    ? Number((pci.reduce((acc, i) => acc + i.impact, 0) / totalPciVariables).toFixed(2))
    : 0;
  const totalPciFuertes = pci.filter(i => i.capacity === 3).length;
  const totalPciRegulares = pci.filter(i => i.capacity === 2).length;
  const totalPciDebiles = pci.filter(i => i.capacity === 1).length;

  // Factores críticos de PCI (Impacto Alto y Capacidad Fuerte/Débil) para transferir a MEFI y DOFA
  const criticalPciItems = pci.filter(i => i.impact === 3 && (i.capacity === 3 || i.capacity === 1));
  const criticalFortalezas = criticalPciItems.filter(i => i.capacity === 3);
  const criticalDebilidades = criticalPciItems.filter(i => i.capacity === 1);

  const [autoSyncPciToMefi, setAutoSyncPciToMefi] = useState<boolean>(true);

  const handleTransferCriticalPciToMefi = (showNotification = true) => {
    const critical = pci.filter(i => i.impact === 3 && (i.capacity === 3 || i.capacity === 1));
    if (critical.length === 0) {
      if (showNotification) {
        showToast('No se encontraron fortalezas o debilidades con Impacto Alto y Capacidad Fuerte/Débil en PCI.');
      }
      return;
    }

    const n = critical.length;
    const baseWeight = Math.floor((100 / n)) / 100;
    const remainder = Number((1.0 - (baseWeight * n)).toFixed(2));

    const newMefiItems: MEFIItem[] = critical.map((item, idx) => {
      const isFortaleza = item.capacity === 3;
      const weight = idx === 0 ? Number((baseWeight + remainder).toFixed(2)) : baseWeight;
      const rating = isFortaleza ? 4 : 1;
      return {
        id: `mefi-pci-${item.id || idx}`,
        type: isFortaleza ? 'Fortaleza' : 'Debilidad',
        description: `[${item.category}] ${item.name}`,
        weight,
        rating
      };
    });

    setMEFI(newMefiItems);

    const newStrengths = critical
      .filter(i => i.capacity === 3)
      .map(i => `[${i.category}] ${i.name}`);
    const newWeaknesses = critical
      .filter(i => i.capacity === 1)
      .map(i => `[${i.category}] ${i.name}`);

    setDOFA(prev => ({
      ...prev,
      strengths: Array.from(new Set([...prev.strengths, ...newStrengths])),
      weaknesses: Array.from(new Set([...prev.weaknesses, ...newWeaknesses]))
    }));

    if (showNotification) {
      showToast(`¡${critical.length} fortalezas y debilidades críticas transferidas con éxito a la Matriz MEFI y DOFA!`);
    }
  };

  const handleTransferMefiToDofa = () => {
    const strengths = mefi.filter(i => i.type === 'Fortaleza').map(i => i.description);
    const weaknesses = mefi.filter(i => i.type === 'Debilidad').map(i => i.description);

    setDOFA(prev => ({
      ...prev,
      strengths: Array.from(new Set([...prev.strengths, ...strengths])),
      weaknesses: Array.from(new Set([...prev.weaknesses, ...weaknesses]))
    }));

    showToast(`¡${strengths.length + weaknesses.length} factores MEFI transferidos a la Matriz DOFA!`);
  };

  const handleTransferStrongStrengthsToDofa = () => {
    const strongStrengths = mefi.filter(i => i.type === 'Fortaleza' && i.rating === 4).map(i => i.description);
    const majorWeaknesses = mefi.filter(i => i.type === 'Debilidad' && i.rating === 1).map(i => i.description);

    setDOFA(prev => ({
      ...prev,
      strengths: Array.from(new Set([...prev.strengths, ...strongStrengths])),
      weaknesses: Array.from(new Set([...prev.weaknesses, ...majorWeaknesses]))
    }));

    showToast(`¡${strongStrengths.length} Fortalezas Fuertes y ${majorWeaknesses.length} Debilidades Mayores transferidas a DOFA!`);
  };

  const handleTransferStrongPciToDofa = () => {
    const strongStrengths = pci.filter(i => i.capacity === 3).map(i => `[${i.category}] ${i.name}`);
    const majorWeaknesses = pci.filter(i => i.capacity === 1).map(i => `[${i.category}] ${i.name}`);

    setDOFA(prev => ({
      ...prev,
      strengths: Array.from(new Set([...prev.strengths, ...strongStrengths])),
      weaknesses: Array.from(new Set([...prev.weaknesses, ...majorWeaknesses]))
    }));

    showToast(`¡${strongStrengths.length} Fortalezas (Fuertes) y ${majorWeaknesses.length} Debilidades (Débiles) de PCI transferidas a DOFA!`);
  };

  const handleTransferAllPciToMefi = (showNotification = true) => {
    if (pci.length === 0) {
      if (showNotification) showToast('No hay variables en PCI para transferir.');
      return;
    }
    const n = pci.length;
    const baseWeight = Math.floor((100 / n)) / 100;
    const remainder = Number((1.0 - (baseWeight * n)).toFixed(2));

    const newMefiItems: MEFIItem[] = pci.map((item, idx) => {
      const isFortaleza = item.capacity >= 2;
      const weight = idx === 0 ? Number((baseWeight + remainder).toFixed(2)) : baseWeight;
      // PCI: Capacity 1-3, Impact 1-3
      // Rating 1-4 (Fortaleza: 4-3, Debilidad: 2-1)
      const rating = isFortaleza
        ? (item.capacity === 3 && item.impact >= 2 ? 4 : 3)
        : (item.capacity === 1 && item.impact <= 2 ? 1 : 2);

      return {
        id: `mefi-pci-all-${item.id || idx}`,
        type: isFortaleza ? 'Fortaleza' : 'Debilidad',
        description: `[${item.category}] ${item.name}`,
        weight,
        rating
      };
    });

    setMEFI(newMefiItems);
    if (showNotification) showToast(`¡${pci.length} variables transferidas a la Matriz MEFI!`);
  };

  useEffect(() => {
    if (autoSyncPciToMefi && pci.length > 0) {
      const critical = pci.filter(i => i.impact === 3 && (i.capacity === 3 || i.capacity === 1));
      if (critical.length > 0) {
        const n = critical.length;
        const baseWeight = Math.floor((100 / n)) / 100;
        const remainder = Number((1.0 - (baseWeight * n)).toFixed(2));

        setMEFI(prevMefi => {
          return critical.map((item, idx) => {
            const isFortaleza = item.capacity === 3;
            const existing = prevMefi.find(m => m.description.includes(item.name));
            const weight = existing ? existing.weight : (idx === 0 ? Number((baseWeight + remainder).toFixed(2)) : baseWeight);
            const rating = existing ? existing.rating : (isFortaleza ? 4 : 1);
            return {
              id: existing?.id || `mefi-pci-${item.id || idx}`,
              type: isFortaleza ? 'Fortaleza' : 'Debilidad',
              description: `[${item.category}] ${item.name}`,
              weight,
              rating
            };
          });
        });
      }
    }
  }, [pci, autoSyncPciToMefi]);

  // Calculations for PESTEL
  const categoriesPESTEL: Array<'Político' | 'Económico' | 'Social' | 'Tecnológico' | 'Ecológico' | 'Legal'> = [
    'Político', 'Económico', 'Social', 'Tecnológico', 'Ecológico', 'Legal'
  ];

  const pestelImpactScore = (imp: 'Alto' | 'Medio' | 'Bajo') => (imp === 'Alto' ? 3 : imp === 'Medio' ? 2 : 1);
  const pestelProbScore = (prob: 'Alta' | 'Media' | 'Baja') => (prob === 'Alta' ? 3 : prob === 'Media' ? 2 : 1);

  const pestelSummary = categoriesPESTEL.map(cat => {
    const items = pestel.filter(i => i.category === cat);
    if (items.length === 0) {
      return {
        category: cat,
        count: 0,
        avgImpact: 0,
        avgProbability: 0,
        altos: 0,
        medios: 0,
        bajos: 0,
        oportunidades: 0,
        amenazas: 0
      };
    }
    const avgImpact = items.reduce((acc, i) => acc + pestelImpactScore(i.impact), 0) / items.length;
    const avgProbability = items.reduce((acc, i) => acc + pestelProbScore(i.probability), 0) / items.length;
    const altos = items.filter(i => i.impact === 'Alto').length;
    const medios = items.filter(i => i.impact === 'Medio').length;
    const bajos = items.filter(i => i.impact === 'Bajo').length;
    const oportunidades = items.filter(i => (i.nature || 'Oportunidad') === 'Oportunidad').length;
    const amenazas = items.filter(i => i.nature === 'Amenaza').length;
    return {
      category: cat,
      count: items.length,
      avgImpact: Number(avgImpact.toFixed(2)),
      avgProbability: Number(avgProbability.toFixed(2)),
      altos,
      medios,
      bajos,
      oportunidades,
      amenazas
    };
  });

  const totalPestelFactors = pestel.length;
  const totalPestelOportunidades = pestel.filter(i => (i.nature || 'Oportunidad') === 'Oportunidad').length;
  const totalPestelAmenazas = pestel.filter(i => i.nature === 'Amenaza').length;
  const globalAvgPestelImpact = totalPestelFactors > 0
    ? Number((pestel.reduce((acc, i) => acc + pestelImpactScore(i.impact), 0) / totalPestelFactors).toFixed(2))
    : 0;
  const globalAvgPestelProb = totalPestelFactors > 0
    ? Number((pestel.reduce((acc, i) => acc + pestelProbScore(i.probability), 0) / totalPestelFactors).toFixed(2))
    : 0;
  const totalPestelAltos = pestel.filter(i => i.impact === 'Alto').length;
  const totalPestelMedios = pestel.filter(i => i.impact === 'Medio').length;
  const totalPestelBajos = pestel.filter(i => i.impact === 'Bajo').length;

  // Factores críticos de PESTEL (Impacto Alto y Probabilidad Alta) para transferir a MEFE y DOFA
  const criticalPestelFactors = pestel.filter(f => f.impact === 'Alto' && f.probability === 'Alta');
  const criticalOportunidades = criticalPestelFactors.filter(f => (f.nature || 'Oportunidad') === 'Oportunidad');
  const criticalAmenazas = criticalPestelFactors.filter(f => f.nature === 'Amenaza');

  const [autoSyncPestelToMefe, setAutoSyncPestelToMefe] = useState<boolean>(true);

  const handleTransferCriticalPestelToMefe = (showNotification = true) => {
    const critical = pestel.filter(f => f.impact === 'Alto' && f.probability === 'Alta');
    if (critical.length === 0) {
      if (showNotification) {
        showToast('No se encontraron factores con Impacto Alto y Probabilidad Alta en PESTEL.');
      }
      return;
    }

    const n = critical.length;
    const baseWeight = Math.floor((100 / n)) / 100;
    const remainder = Number((1.0 - (baseWeight * n)).toFixed(2));

    const newMefeItems: MEFEItem[] = critical.map((f, idx) => {
      const isOportunidad = (f.nature || 'Oportunidad') === 'Oportunidad';
      const weight = idx === 0 ? Number((baseWeight + remainder).toFixed(2)) : baseWeight;
      const rating = isOportunidad ? 3 : 2;
      return {
        id: `mefe-pestel-${f.id || idx}`,
        type: isOportunidad ? 'Oportunidad' : 'Amenaza',
        description: `[${f.category}] ${f.factor}`,
        weight,
        rating
      };
    });

    setMEFE(newMefeItems);

    // Sincronizar también con Oportunidades y Amenazas de DOFA
    const newOportunidades = critical
      .filter(f => (f.nature || 'Oportunidad') === 'Oportunidad')
      .map(f => `[${f.category}] ${f.factor}`);
    const newAmenazas = critical
      .filter(f => f.nature === 'Amenaza')
      .map(f => `[${f.category}] ${f.factor}`);

    setDOFA(prev => ({
      ...prev,
      opportunities: Array.from(new Set([...prev.opportunities, ...newOportunidades])),
      threats: Array.from(new Set([...prev.threats, ...newAmenazas]))
    }));

    if (showNotification) {
      showToast(`¡${critical.length} factores críticos (Impacto Alto + Prob. Alta) transferidos con éxito a la Matriz MEFE y DOFA!`);
    }
  };

  // Sincronización automática de factores críticos de PESTEL hacia MEFE
  useEffect(() => {
    if (autoSyncPestelToMefe && pestel.length > 0) {
      const critical = pestel.filter(f => f.impact === 'Alto' && f.probability === 'Alta');
      if (critical.length > 0) {
        const n = critical.length;
        const baseWeight = Math.floor((100 / n)) / 100;
        const remainder = Number((1.0 - (baseWeight * n)).toFixed(2));

        setMEFE(prevMefe => {
          return critical.map((f, idx) => {
            const isOportunidad = (f.nature || 'Oportunidad') === 'Oportunidad';
            const existing = prevMefe.find(m => m.description.includes(f.factor));
            const weight = existing ? existing.weight : (idx === 0 ? Number((baseWeight + remainder).toFixed(2)) : baseWeight);
            const rating = existing ? existing.rating : (isOportunidad ? 3 : 2);
            return {
              id: existing?.id || `mefe-pestel-${f.id || idx}`,
              type: isOportunidad ? 'Oportunidad' : 'Amenaza',
              description: `[${f.category}] ${f.factor}`,
              weight,
              rating
            };
          });
        });
      }
    }
  }, [pestel, autoSyncPestelToMefe]);

  // AI Generator handler
  const handleGenerateAIAnalysis = async () => {
    setIsAnalyzing(true);
    setAiError('');
    try {
      const res = await fetch('/api/gemini/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ enterprise, pci, mefi, pestel, mefe, dofa })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al conectar con la IA');
      setAiAnalysis(data.analysis);
      showToast('¡Análisis estratégico generado con éxito por la IA!');
    } catch (err: any) {
      setAiError(err.message || 'Error desconocido');
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Export JSON
  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ enterprise, pci, mefi, pestel, mefe, dofa, actions }, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `plan_accion_${enterprise.name.replace(/[^a-zA-Z0-9]/g, '_')}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Proyecto exportado exitosamente en JSON');
  };

  // Import JSON
  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = event => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          if (parsed.enterprise) setEnterprise(parsed.enterprise);
          if (parsed.pci) setPCI(parsed.pci);
          if (parsed.mefi) setMEFI(parsed.mefi);
          if (parsed.pestel) setPESTEL(parsed.pestel);
          if (parsed.mefe) setMEFE(parsed.mefe);
          if (parsed.dofa) setDOFA(parsed.dofa);
          if (parsed.actions) setActions(parsed.actions);
          showToast('¡Proyecto importado correctamente!');
        } catch (err) {
          alert('El archivo JSON no tiene un formato válido.');
        }
      };
    }
  };

  const handleResetSample = () => {
    if (window.confirm('¿Desea restablecer los datos de ejemplo de la microempresa modelo?')) {
      setEnterprise(INITIAL_ENTERPRISE);
      setPCI(INITIAL_PCI);
      setMEFI(INITIAL_MEFI);
      setPESTEL(INITIAL_PESTEL);
      setMEFE(INITIAL_MEFE);
      setDOFA(INITIAL_DOFA);
      setActions(INITIAL_ACTIONS);
      setAiAnalysis('');
      showToast('Datos restablecidos al caso modelo SENA');
    }
  };

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isBlurring, setIsBlurring] = useState<boolean>(false);

  // Floating Video Manual Window State
  const VIDEO_MANUAL_ID = '1iU8q0qpcL6Xo-zP9DkMuIMQJa82zc9CrHlN169Pt24s';
  const VIDEO_MANUAL_SHARE_URL = `https://docs.google.com/videos/d/${VIDEO_MANUAL_ID}/edit?usp=sharing`;
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const [videoWindowMode, setVideoWindowMode] = useState<'normal' | 'expanded' | 'mini'>('normal');
  const [videoPlayerSource, setVideoPlayerSource] = useState<'preview' | 'vids'>('preview');
  const [videoReloadKey, setVideoReloadKey] = useState<number>(0);
  const [videoAutoplay, setVideoAutoplay] = useState<boolean>(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVideoModalOpen) {
        setIsVideoModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVideoModalOpen]);

  const handleOpenVideoManual = () => {
    setIsVideoModalOpen(true);
    setVideoWindowMode('normal');
    setVideoAutoplay(true);
  };

  const handleToggleVideoFullscreen = () => {
    const el = videoContainerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  const getVideoIframeSrc = () => {
    if (videoPlayerSource === 'vids') {
      return `https://docs.google.com/videos/d/${VIDEO_MANUAL_ID}/play`;
    }
    return `https://drive.google.com/file/d/${VIDEO_MANUAL_ID}/preview${videoAutoplay ? '?autoplay=1' : ''}`;
  };

  const toggleDarkMode = () => {
    setIsBlurring(true);
    setTimeout(() => {
      const newMode = !isDarkMode;
      setIsDarkMode(newMode);
      document.documentElement.classList.toggle('dark', newMode);
      setTimeout(() => {
        setIsBlurring(false);
      }, 400);
    }, 400);
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-500 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      {/* Blur Screen Transition Overlay */}
      {isBlurring && (
        <div className="fixed inset-0 z-50 backdrop-blur-2xl bg-black/60 transition-all duration-500 flex items-center justify-center animate-fadeIn">
          <div className="text-white font-extrabold text-lg flex items-center gap-3 bg-slate-900/90 px-8 py-5 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-md">
            <Sparkles className="w-6 h-6 text-[#39A900] animate-spin" />
            <span>Activando {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}...</span>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-[#39A900] text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce">
          <CheckCircle2 className="w-5 h-5" />
          <span className="font-medium text-sm">{toastMessage}</span>
        </div>
      )}

      {/* SENA Header Banner */}
      <header className="bg-[#00324D] text-white shadow-lg print:hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative min-h-[120px]">
          <div className="flex items-center gap-4 pr-28 md:pr-0">
            <div className="bg-white p-2.5 rounded-2xl shadow-inner flex items-center justify-center w-18 h-18 shrink-0">
              <img
                src="data:image/svg+xml,%3c?xml%20version=%271.0%27%20encoding=%27utf-8%27?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2026.0.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version=%271.1%27%20id=%27Capa_1%27%20xmlns=%27http://www.w3.org/2000/svg%27%20xmlns:xlink=%27http://www.w3.org/1999/xlink%27%20x=%270px%27%20y=%270px%27%20viewBox=%270%200%201000%201000%27%20style=%27enable-background:new%200%200%201000%201000;%27%20xml:space=%27preserve%27%3e%3cstyle%20type=%27text/css%27%3e%20.st0{fill:%2339a900;}%20%3c/style%3e%3cpath%20id=%27path47-5%27%20class=%27st0%27%20d=%27M504.2,20.5c-58.3,0.1-105.6,47.4-105.5,105.8c0.1,58.3,47.4,105.6,105.7,105.6%20c58.3,0,105.6-47.3,105.6-105.7V126C609.9,67.6,562.6,20.4,504.2,20.5z%20M155.6,264.6c-18.6,0.1-37.5,1.1-55.2,5.6%20c-11.7,3-23,7.8-30.3,15.4c-9.2,9.5-10.4,22.3-5.9,33.3c4,9.7,14.8,16.9,26.8,21.1c25.9,8.9,54.6,10.7,81.8,16.3%20c5,1.2,10.6,2.6,13.7,6c3.2,4.1,1.3,9.7-4,12.2c-8.8,4.5-20.1,4.5-30.4,4.4c-9.4-0.4-19.7-1.2-27.2-5.9c-5.5-3.4-6.5-9.1-5.2-14.1%20l-60.6,0c-0.2,9.2,1.6,18.9,8.4,26.8c5.6,6.8,14.8,11.5,24.6,14.4c15.7,4.6,32.7,6,49.4,6.4c22.7,0.4,45.8-0.3,67.6-5.4%20c13-3.2,25.8-8.3,34.1-16.6c14.8-14.8,11.3-38.3-8.3-49.8c-9.8-5.7-21.5-9.2-33.4-11.5c-17.5-3.6-35.3-6.3-52.9-9.2%20c-6.2-1.2-12.8-2.3-18-5.2c-5.5-2.9-5.9-9.8-0.3-12.9c7.2-4.1,16.8-4,25.4-4c9.1,0.2,19,0.7,26.5,5c4.2,2.3,5.9,6.3,5.9,10.1%20l57.6-0.1c-0.2-7.3-1.6-14.9-6.9-21.2c-6.2-7.8-17.1-12.7-28.3-15.5C192.8,265.6,174.1,264.7,155.6,264.6L155.6,264.6z%20M280.6,268.9%20l0,137.7l168.1,0l0-30H342.3v-26.7h94.9v-29.3h-94.9l0-21.9l102.6,0l-0.1-29.7L280.6,268.9z%20M557.5,269c0,0-51.9,0-77.9,0l0,137.7%20l59,0l0-92.7l80.8,92.6l81,0.1l0-137.7l-59.1,0l0.1,92L557.5,269z%20M805.6,269.2c0,0-63.6,91.9-95.6,137.7l61.9,0l14.9-24.8h95.7%20l13.9,24.9l68.8,0L874,269.2L805.6,269.2z%20M836.6,302.1l29.4,49.9l-60.7,0.1L836.6,302.1z%20M10.6,445.6l0.5,75l280.1-1%20c14.3,3.1,22.6,12.4,19.7,33.5L138.6,854.7l56.1,52.5l266.9-461.6L10.6,445.6z%20M545.2,446.2l262.4,459.6l58-52.1L691.3,552.9%20c-2.9-21.2,5.4-30.6,19.7-33.7l280.2,1l-0.1-73.7L545.2,446.2z%20M500.9,522.3L254.8,944.7l65.4,31.9L484.4,699%20c5.7-4.6,11.4-7.1,17.1-7.3c6-0.2,12.2,2,18.3,6.8l163.8,278.4l67.4-35.2L500.9,522.3z%27/%3e%3cg%20id=%27_x23_000000ff-2%27%20transform=%27matrix(0.31570611,0,0,0.23560774,-391.49698,-10.601126)%27%3e%3c/g%3e%3c/svg%3e"
                alt="SENA Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-[#39A900]/20 text-[#39A900] text-xs px-2.5 py-0.5 rounded-full font-semibold border border-[#39A900]/30">
                  Prototipo Pedagógico
                </span>
                <span className="text-xs text-slate-300">Gestión Organizacional</span>
              </div>
              <h1 className="text-2xl font-extrabold tracking-tight text-white mt-0.5">
                Plan de Acción y Diagnóstico Estratégico Empresarial
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pr-0 md:pr-32">
            <button
              onClick={handleOpenVideoManual}
              className="px-3 py-2 bg-amber-400 hover:bg-amber-300 text-[#00324D] text-xs font-bold rounded-lg flex items-center gap-1.5 transition shadow-md"
              title="Ver Video Manual de la Plataforma"
            >
              <PlayCircle className="w-4 h-4" /> Video Manual
            </button>
            <button
              onClick={handleResetSample}
              className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition shadow"
              title="Restablecer caso modelo"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Caso Modelo
            </button>
            <label className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition shadow cursor-pointer">
              <Upload className="w-3.5 h-3.5" /> Importar JSON
              <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
            </label>
            <button
              onClick={handleExportJSON}
              className="px-3 py-2 bg-[#39A900] hover:bg-[#329600] text-xs font-semibold rounded-lg flex items-center gap-1.5 transition shadow"
            >
              <Download className="w-3.5 h-3.5" /> Exportar JSON
            </button>
            <button
              onClick={() => window.print()}
              className="px-3 py-2 bg-white/10 hover:bg-white/20 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition shadow"
            >
              <Printer className="w-3.5 h-3.5" /> Imprimir / PDF
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2.5 bg-slate-700 hover:bg-slate-600 text-amber-300 rounded-lg flex items-center justify-center transition shadow ml-1"
              title={isDarkMode ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-amber-300" />}
            </button>
            <div className="absolute top-2.5 right-4 sm:right-6 lg:right-8 bg-transparent p-0 rounded-2xl shadow-2xl border border-emerald-500/30 ring-1 ring-white/10 flex items-center justify-center w-[105px] h-[105px] shrink-0 z-20 overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHEYk0WIT2lHD9TMOPRqfediyfffsTUPMz-liAWqun_g&s=10"
                alt="SENA Sede"
                className="w-full h-full object-cover rounded-2xl bg-transparent"
              />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-[#002233] border-t border-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex overflow-x-auto no-scrollbar">
            {[
              { id: 'empresa', label: '1. Empresa & Direccionamiento', icon: Building2 },
              { id: 'interno', label: '2. Diagnóstico Interno (PCI & MEFI)', icon: FileSpreadsheet },
              { id: 'externo', label: '3. Diagnóstico Externo (PESTEL & MEFE)', icon: Globe },
              { id: 'dofa', label: '4. Matriz DOFA & Cruzada', icon: Grid },
              { id: 'acciones', label: '5. Plan de Acción Operativo', icon: CheckSquare },
              { id: 'tablero', label: '6. Tablero & Análisis IA', icon: BarChart3 },
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
                    isActive
                      ? 'border-[#39A900] text-[#39A900] bg-[#00324D]/50'
                      : 'border-transparent text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#39A900]' : 'text-slate-400'}`} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* TAB 1: EMPRESA & DIRECCIONAMIENTO */}
        {activeTab === 'empresa' && (
          <div className="space-y-6 animate-fadeIn">
            <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'} rounded-2xl p-6 shadow-sm border`}>
              <div className={`flex items-center justify-between pb-4 border-b ${isDarkMode ? 'border-slate-800' : 'border-slate-100'} mb-6`}>
                <div>
                  <h2 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-[#00324D]'} flex items-center gap-2`}>
                    <SenaLogoSmall />
                    Información General de la Micro / Pequeña Empresa
                  </h2>
                  <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mt-0.5`}>
                    Defina los datos básicos del negocio analizado por el aprendiz SENA.
                  </p>
                </div>
                <span className="text-xs bg-emerald-50 text-emerald-700 font-semibold px-3 py-1 rounded-full border border-emerald-200">
                  {enterprise.size}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className={`block text-xs font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} mb-1`}>Nombre de la Empresa</label>
                  <input
                    type="text"
                    value={enterprise.name}
                    onChange={e => setEnterprise({...enterprise, name: e.target.value})}
                    className={`w-full px-3.5 py-2.5 text-sm ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-400' : 'bg-slate-50 border-slate-300 text-slate-800'} border rounded-xl focus:ring-2 focus:ring-[#39A900] outline-none transition`}
                  />
                </div>
                <div>
                  <label className={`block text-xs font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} mb-1`}>NIT / Identificación</label>
                  <input
                    type="text"
                    value={enterprise.nit}
                    onChange={e => setEnterprise({...enterprise, nit: e.target.value})}
                    className={`w-full px-3.5 py-2.5 text-sm ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-400' : 'bg-slate-50 border-slate-300 text-slate-800'} border rounded-xl focus:ring-2 focus:ring-[#39A900] outline-none transition`}
                  />
                </div>
                <div>
                  <label className={`block text-xs font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} mb-1`}>Sector Económico</label>
                  <input
                    type="text"
                    value={enterprise.sector}
                    onChange={e => setEnterprise({...enterprise, sector: e.target.value})}
                    className={`w-full px-3.5 py-2.5 text-sm ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-400' : 'bg-slate-50 border-slate-300 text-slate-800'} border rounded-xl focus:ring-2 focus:ring-[#39A900] outline-none transition`}
                  />
                </div>
                <div>
                  <label className={`block text-xs font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} mb-1`}>Ciudad / Ubicación</label>
                  <input
                    type="text"
                    value={enterprise.city}
                    onChange={e => setEnterprise({...enterprise, city: e.target.value})}
                    className={`w-full px-3.5 py-2.5 text-sm ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-400' : 'bg-slate-50 border-slate-300 text-slate-800'} border rounded-xl focus:ring-2 focus:ring-[#39A900] outline-none transition`}
                  />
                </div>
                <div>
                  <label className={`block text-xs font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} mb-1`}>Tamaño de Empresa</label>
                  <select
                    value={enterprise.size}
                    onChange={e => setEnterprise({...enterprise, size: e.target.value as any})}
                    className={`w-full px-3.5 py-2.5 text-sm ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-800'} border rounded-xl focus:ring-2 focus:ring-[#39A900] outline-none transition`}
                  >
                    <option value="Microempresa">Microempresa (1-10 trabajadores)</option>
                    <option value="Pequeña Empresa">Pequeña Empresa (11-50 trabajadores)</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-xs font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} mb-1`}>Representante / Gerente</label>
                  <input
                    type="text"
                    value={enterprise.manager}
                    onChange={e => setEnterprise({...enterprise, manager: e.target.value})}
                    className={`w-full px-3.5 py-2.5 text-sm ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-400' : 'bg-slate-50 border-slate-300 text-slate-800'} border rounded-xl focus:ring-2 focus:ring-[#39A900] outline-none transition`}
                  />
                </div>
              </div>
            </div>

            {/* Direccionamiento Estratégico */}
            <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'} rounded-2xl p-6 shadow-sm border`}>
              <div className={`flex items-center justify-between pb-4 border-b ${isDarkMode ? 'border-slate-800' : 'border-slate-100'} mb-6`}>
                <div>
                  <h2 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-[#00324D]'} flex items-center gap-2`}>
                    <SenaLogoSmall />
                    Direccionamiento Estratégico
                  </h2>
                  <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mt-0.5`}>
                    Misión, Visión, Valores y Objetivos Estratégicos de la organización.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-xs font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} mb-1 flex items-center gap-1.5`}>
                    <Target className="w-4 h-4 text-[#39A900]" /> Misión (¿Quiénes somos, qué hacemos y para quién?)
                  </label>
                  <textarea
                    rows={4}
                    value={enterprise.mission}
                    onChange={e => setEnterprise({...enterprise, mission: e.target.value})}
                    className={`w-full px-3.5 py-2.5 text-sm ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-400' : 'bg-slate-50 border-slate-300 text-slate-800'} border rounded-xl focus:ring-2 focus:ring-[#39A900] outline-none transition`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} mb-1 flex items-center gap-1.5`}>
                    <Award className="w-4 h-4 text-[#39A900]" /> Visión (¿A dónde queremos llegar en el futuro?)
                  </label>
                  <textarea
                    rows={4}
                    value={enterprise.vision}
                    onChange={e => setEnterprise({...enterprise, vision: e.target.value})}
                    className={`w-full px-3.5 py-2.5 text-sm ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-400' : 'bg-slate-50 border-slate-300 text-slate-800'} border rounded-xl focus:ring-2 focus:ring-[#39A900] outline-none transition`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} mb-1 flex items-center gap-1.5`}>
                    <Users className="w-4 h-4 text-[#39A900]" /> Valores Corporativos
                  </label>
                  <textarea
                    rows={3}
                    value={enterprise.values}
                    onChange={e => setEnterprise({...enterprise, values: e.target.value})}
                    className={`w-full px-3.5 py-2.5 text-sm ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-400' : 'bg-slate-50 border-slate-300 text-slate-800'} border rounded-xl focus:ring-2 focus:ring-[#39A900] outline-none transition`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} mb-1 flex items-center gap-1.5`}>
                    <Briefcase className="w-4 h-4 text-[#39A900]" /> Objetivos Estratégicos Principales
                  </label>
                  <textarea
                    rows={3}
                    value={enterprise.objectives}
                    onChange={e => setEnterprise({...enterprise, objectives: e.target.value})}
                    className={`w-full px-3.5 py-2.5 text-sm ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-400' : 'bg-slate-50 border-slate-300 text-slate-800'} border rounded-xl focus:ring-2 focus:ring-[#39A900] outline-none transition`}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setActiveTab('interno')}
                className="px-6 py-3 bg-[#00324D] hover:bg-[#002233] text-white text-sm font-semibold rounded-xl shadow transition flex items-center gap-2"
              >
                Siguiente: Diagnóstico Interno &rarr;
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: DIAGNÓSTICO INTERNO (PCI & MEFI) */}
        {activeTab === 'interno' && (
          <div className="space-y-8 animate-fadeIn">
            {/* SECCIÓN PCI */}
            <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'} rounded-2xl p-6 shadow-sm border space-y-8`}>
              {/* Encabezado PCI */}
              <div className={`flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b ${isDarkMode ? 'border-slate-800' : 'border-slate-100'} gap-4`}>
                <div>
                  <h2 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-[#00324D]'} flex items-center gap-2`}>
                    <SenaLogoSmall />
                    Matriz de Perfil de Capacidad Interna (PCI)
                  </h2>
                  <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mt-0.5`}>
                    Diagnóstico y valoración de las 5 capacidades internas clave de la micro o pequeña empresa.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {pci.length === 0 ? (
                    <button
                      onClick={() => {
                        setPCI(DEFAULT_SENA_PCI_VARIABLES);
                        showToast('Variables modelo SENA cargadas en el PCI');
                      }}
                      className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition shadow"
                    >
                      <RefreshCw className="w-4 h-4" /> Cargar 10 Variables SENA
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        if (window.confirm('¿Desea limpiar todas las variables del PCI?')) {
                          setPCI([]);
                          showToast('Variables de PCI limpiadas');
                        }
                      }}
                      className="px-3 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-xl transition"
                    >
                      Limpiar
                    </button>
                  )}
                  <button
                    onClick={() => {
                      const newItem: PCIItem = {
                        id: Date.now().toString(),
                        category: 'Competitiva',
                        name: 'Nueva capacidad o proceso',
                        impact: 2,
                        capacity: 2,
                        observation: 'Describir hallazgo'
                      };
                      setPCI([...pci, newItem]);
                    }}
                    className="px-3.5 py-2 bg-[#39A900] hover:bg-[#329600] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition shadow"
                  >
                    <Plus className="w-4 h-4" /> Agregar Variable PCI
                  </button>
                  <button
                    onClick={() => handleTransferAllPciToMefi(true)}
                    className="px-3 py-1.5 bg-[#00324D] hover:bg-[#002233] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition shadow"
                    title="Transferir todas las variables del PCI a la Matriz MEFI"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                    Pasar TODAS a MEFI ({pci.length})
                  </button>
                  <button
                    onClick={() => handleTransferCriticalPciToMefi(true)}
                    className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition shadow border border-emerald-500/50"
                    title="Transferir fortalezas y debilidades con Impacto Alto y Capacidad Fuerte/Débil a la Matriz MEFI"
                  >
                    <Zap className="w-3.5 h-3.5 text-amber-300" />
                    Pasar Críticas a MEFI ({criticalPciItems.length})
                  </button>
                  <button
                    onClick={handleTransferStrongPciToDofa}
                    className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition shadow border border-indigo-500/50"
                    title="Transferir directamente las fortalezas fuertes y debilidades a la pestaña DOFA"
                  >
                    <Grid className="w-3.5 h-3.5" />
                    Pasar Fuertes a DOFA
                  </button>
                </div>
              </div>

              {/* 1. Tabla de Registro y Calificación de Variables */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-[#00324D]'} flex items-center gap-1.5`}>
                    <FileSpreadsheet className="w-4 h-4 text-[#39A900]" />
                    1. Formulario de Variables y Calificación del PCI
                  </h3>
                  <div className="flex items-center gap-3">
                    <label className="text-xs flex items-center gap-1.5 cursor-pointer font-medium select-none text-slate-700 dark:text-slate-300">
                      <input
                        type="checkbox"
                        checked={autoSyncPciToMefi}
                        onChange={e => {
                          const val = e.target.checked;
                          setAutoSyncPciToMefi(val);
                          if (val) handleTransferCriticalPciToMefi(true);
                        }}
                        className="w-4 h-4 accent-[#39A900] rounded"
                      />
                      Auto-Sincronización
                    </label>
                    <span className={`text-xs px-2.5 py-1 rounded-lg font-semibold ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                      Total: {totalPciVariables} variables evaluadas
                    </span>
                  </div>
                </div>

                {pci.length === 0 ? (
                  <div className={`p-8 text-center rounded-2xl border-2 border-dashed ${isDarkMode ? 'border-slate-800 bg-slate-900/50' : 'border-slate-200 bg-slate-50'}`}>
                    <FileSpreadsheet className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                    <p className={`text-sm font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                      No hay variables registradas en el Perfil de Capacidad Interna
                    </p>
                    <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto mb-4">
                      Comienza agregando variables personalizadas o carga el banco modelo de 10 variables SENA para evaluar la empresa.
                    </p>
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => {
                          setPCI(DEFAULT_SENA_PCI_VARIABLES);
                          showToast('Variables modelo SENA cargadas en el PCI');
                        }}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition flex items-center gap-2"
                      >
                        <RefreshCw className="w-4 h-4" /> Cargar Variables Ejemplo SENA
                      </button>
                      <button
                        onClick={() => {
                          const newItem: PCIItem = {
                            id: Date.now().toString(),
                            category: 'Directiva',
                            name: 'Capacidad inicial',
                            impact: 2,
                            capacity: 2,
                            observation: ''
                          };
                          setPCI([newItem]);
                        }}
                        className="px-4 py-2 bg-[#39A900] hover:bg-[#329600] text-white text-xs font-semibold rounded-xl transition flex items-center gap-2"
                      >
                        <Plus className="w-4 h-4" /> Agregar Variable
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className={`${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'} text-xs uppercase tracking-wider`}>
                          <th className="p-3 rounded-l-xl">Categoría</th>
                          <th className="p-3">Variable / Capacidad</th>
                          <th className="p-3 text-center">Impacto (1-3)</th>
                          <th className="p-3 text-center">Capacidad (1-3)</th>
                          <th className="p-3">Observación / Diagnóstico</th>
                          <th className="p-3 rounded-r-xl text-center">Acción</th>
                        </tr>
                      </thead>
                      <tbody className={`divide-y ${isDarkMode ? 'divide-slate-800 text-slate-200' : 'divide-slate-100 text-slate-800'} text-sm`}>
                        {pci.map((item) => (
                          <tr key={item.id} className={`${isDarkMode ? 'hover:bg-slate-800/50' : 'hover:bg-slate-50/80'} transition`}>
                            <td className="p-3 font-medium">
                              <select
                                value={item.category}
                                onChange={e => {
                                  const updated = pci.map(i => i.id === item.id ? { ...i, category: e.target.value as any } : i);
                                  setPCI(updated);
                                }}
                                className={`${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-800'} border rounded-lg px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-[#39A900]`}
                              >
                                {categoriesPCI.map(c => <option key={c} value={c}>{c}</option>)}
                              </select>
                            </td>
                            <td className="p-3">
                              <input
                                type="text"
                                value={item.name}
                                onChange={e => {
                                  const updated = pci.map(i => i.id === item.id ? { ...i, name: e.target.value } : i);
                                  setPCI(updated);
                                }}
                                className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-400' : 'bg-slate-50 border-slate-300 text-slate-800'} border rounded-lg px-2.5 py-1.5 text-xs outline-none focus:ring-1 focus:ring-[#39A900]`}
                              />
                            </td>
                            <td className="p-3 text-center">
                              <select
                                value={item.impact}
                                onChange={e => {
                                  const updated = pci.map(i => i.id === item.id ? { ...i, impact: Number(e.target.value) } : i);
                                  setPCI(updated);
                                }}
                                className={`${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-800'} border rounded-lg px-2 py-1 text-xs text-center outline-none`}
                              >
                                <option value={3}>3 - Alto</option>
                                <option value={2}>2 - Medio</option>
                                <option value={1}>1 - Bajo</option>
                              </select>
                            </td>
                            <td className="p-3 text-center">
                              <select
                                value={item.capacity}
                                onChange={e => {
                                  const updated = pci.map(i => i.id === item.id ? { ...i, capacity: Number(e.target.value) } : i);
                                  setPCI(updated);
                                }}
                                className={`${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-[#00324D]'} border rounded-lg px-2 py-1 text-xs text-center outline-none font-semibold`}
                              >
                                <option value={3}>3 - Fuerte</option>
                                <option value={2}>2 - Regular</option>
                                <option value={1}>1 - Débil</option>
                              </select>
                            </td>
                            <td className="p-3">
                              <input
                                type="text"
                                value={item.observation}
                                onChange={e => {
                                  const updated = pci.map(i => i.id === item.id ? { ...i, observation: e.target.value } : i);
                                  setPCI(updated);
                                }}
                                className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-400' : 'bg-slate-50 border-slate-300 text-slate-800'} border rounded-lg px-2.5 py-1.5 text-xs outline-none focus:ring-1 focus:ring-[#39A900]`}
                              />
                            </td>
                            <td className="p-3 text-center">
                              <button
                                onClick={() => setPCI(pci.filter(i => i.id !== item.id))}
                                className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg transition"
                                title="Eliminar variable"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* 2. Tabla Consolidada de Resultados de la Matriz PCI */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-[#00324D]'} flex items-center gap-2`}>
                      <BarChart3 className="w-4 h-4 text-[#39A900]" />
                      2. Tabla Resumen y Consolidado del Perfil PCI
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Cálculo de fortalezas, debilidades y promedios cuantitativos por cada dimensión estratégica.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-semibold">
                    <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                      Fuertes (3): {totalPciFuertes}
                    </span>
                    <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span>
                      Regulares (2): {totalPciRegulares}
                    </span>
                    <span className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                      Débiles (1): {totalPciDebiles}
                    </span>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className={`${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'} text-xs uppercase tracking-wider`}>
                        <th className="p-3 rounded-l-xl">Capacidad Organizacional</th>
                        <th className="p-3 text-center">N° Variables</th>
                        <th className="p-3 text-center">Fuertes (3)</th>
                        <th className="p-3 text-center">Regulares (2)</th>
                        <th className="p-3 text-center">Débiles (1)</th>
                        <th className="p-3 text-center">Capacidad Promedio</th>
                        <th className="p-3 text-center">Impacto Promedio</th>
                        <th className="p-3 rounded-r-xl text-center">Diagnóstico SENA</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y ${isDarkMode ? 'divide-slate-800 text-slate-200' : 'divide-slate-100 text-slate-800'} text-xs`}>
                      {pciSummary.map(item => {
                        const isFortaleza = item.avgCapacity >= 2.2;
                        const isEquilibrado = item.avgCapacity >= 1.8 && item.avgCapacity < 2.2;
                        const isDebilidad = item.avgCapacity > 0 && item.avgCapacity < 1.8;

                        return (
                          <tr key={item.category} className={`${isDarkMode ? 'hover:bg-slate-800/40' : 'hover:bg-slate-50/70'} transition`}>
                            <td className="p-3 font-bold text-sm">
                              {item.category === 'Directiva' && 'Capacidad Directiva'}
                              {item.category === 'Competitiva' && 'Capacidad Competitiva (Mercado)'}
                              {item.category === 'Financiera' && 'Capacidad Financiera'}
                              {item.category === 'Tecnológica' && 'Capacidad Tecnológica'}
                              {item.category === 'Talento Humano' && 'Capacidad del Talento Humano'}
                            </td>
                            <td className="p-3 text-center font-semibold">{item.count}</td>
                            <td className="p-3 text-center text-emerald-600 dark:text-emerald-400 font-bold">{item.fuertes}</td>
                            <td className="p-3 text-center text-blue-600 dark:text-blue-400 font-bold">{item.regulares}</td>
                            <td className="p-3 text-center text-rose-600 dark:text-rose-400 font-bold">{item.debiles}</td>
                            <td className="p-3 text-center">
                              <div className="flex items-center justify-center gap-2">
                                <span className="font-extrabold text-sm">{item.avgCapacity}</span>
                                <div className="w-16 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                                  <div
                                    className="bg-[#39A900] h-full rounded-full transition-all duration-500"
                                    style={{ width: `${(item.avgCapacity / 3) * 100}%` }}
                                  ></div>
                                </div>
                              </div>
                            </td>
                            <td className="p-3 text-center">
                              <div className="flex items-center justify-center gap-2">
                                <span className="font-extrabold text-sm text-sky-600 dark:text-sky-400">{item.avgImpact}</span>
                                <div className="w-16 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                                  <div
                                    className="bg-sky-500 h-full rounded-full transition-all duration-500"
                                    style={{ width: `${(item.avgImpact / 3) * 100}%` }}
                                  ></div>
                                </div>
                              </div>
                            </td>
                            <td className="p-3 text-center">
                              {item.count === 0 ? (
                                <span className="text-slate-400 italic">Sin datos</span>
                              ) : isFortaleza ? (
                                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 rounded-full font-bold">
                                  Fortaleza Interna
                                </span>
                              ) : isEquilibrado ? (
                                <span className="px-2.5 py-1 bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 rounded-full font-bold">
                                  Capacidad Regular
                                </span>
                              ) : (
                                <span className="px-2.5 py-1 bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 rounded-full font-bold">
                                  Debilidad Crítica
                                </span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr className={`${isDarkMode ? 'bg-slate-800/80 font-bold text-white' : 'bg-slate-100 font-bold text-slate-800'} text-xs`}>
                        <td className="p-3">TOTALES / PROMEDIO GENERAL</td>
                        <td className="p-3 text-center">{totalPciVariables}</td>
                        <td className="p-3 text-center text-emerald-600 dark:text-emerald-400">{totalPciFuertes}</td>
                        <td className="p-3 text-center text-blue-600 dark:text-blue-400">{totalPciRegulares}</td>
                        <td className="p-3 text-center text-rose-600 dark:text-rose-400">{totalPciDebiles}</td>
                        <td className="p-3 text-center text-[#39A900] text-sm font-extrabold">{globalAvgCapacity} / 3.0</td>
                        <td className="p-3 text-center text-sky-600 dark:text-sky-400 text-sm font-extrabold">{globalAvgImpact} / 3.0</td>
                        <td className="p-3 text-center">
                          <span className={`px-2.5 py-1 rounded-full font-extrabold text-xs ${
                            globalAvgCapacity >= 2.2
                              ? 'bg-[#39A900] text-white'
                              : globalAvgCapacity >= 1.8
                              ? 'bg-blue-600 text-white'
                              : 'bg-amber-600 text-white'
                          }`}>
                            {globalAvgCapacity >= 2.2
                              ? 'Organización Fuerte'
                              : globalAvgCapacity >= 1.8
                              ? 'Organización Equilibrada'
                              : 'Atención Requerida'}
                          </span>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              {/* 3. Gráfica Interactiva del Perfil de Capacidad Interna */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-[#00324D]'} flex items-center gap-2`}>
                      <BarChart3 className="w-4 h-4 text-[#39A900]" />
                      3. Gráfica y Visualización Interactiva del Perfil PCI
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Visualiza el balance estratégico entre el nivel de Capacidad y el grado de Impacto.
                    </p>
                  </div>

                  <div className={`flex rounded-xl p-1 border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'}`}>
                    <button
                      onClick={() => setPciChartType('barras')}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                        pciChartType === 'barras'
                          ? 'bg-[#39A900] text-white shadow'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                      }`}
                    >
                      Barras Comparativas
                    </button>
                    <button
                      onClick={() => setPciChartType('radar')}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                        pciChartType === 'radar'
                          ? 'bg-[#39A900] text-white shadow'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                      }`}
                    >
                      Telaraña / Radar
                    </button>
                    <button
                      onClick={() => setPciChartType('cuadrantes')}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                        pciChartType === 'cuadrantes'
                          ? 'bg-[#39A900] text-white shadow'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                      }`}
                    >
                      Matriz Cuadrantes
                    </button>
                  </div>
                </div>

                {/* Vista A: Barras Comparativas */}
                {pciChartType === 'barras' && (
                  <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50/70 border-slate-200'} space-y-6`}>
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 font-semibold text-[#39A900]">
                          <span className="w-3 h-3 rounded bg-[#39A900] inline-block"></span>
                          Nivel de Capacidad (1 = Débil, 2 = Regular, 3 = Fuerte)
                        </span>
                        <span className="flex items-center gap-1.5 font-semibold text-sky-600 dark:text-sky-400">
                          <span className="w-3 h-3 rounded bg-sky-500 inline-block"></span>
                          Grado de Impacto (1 = Bajo, 2 = Medio, 3 = Alto)
                        </span>
                      </div>
                      <span className="text-slate-400 italic text-[11px]">Escala de 0.0 a 3.0</span>
                    </div>

                    <div className="space-y-5">
                      {pciSummary.map(item => (
                        <div key={item.category} className="space-y-1.5">
                          <div className="flex justify-between items-center text-xs font-bold">
                            <span className={isDarkMode ? 'text-white' : 'text-slate-800'}>{item.category}</span>
                            <div className="flex gap-4 text-[11px]">
                              <span className="text-[#39A900]">Cap: {item.avgCapacity} / 3.0</span>
                              <span className="text-sky-600 dark:text-sky-400">Imp: {item.avgImpact} / 3.0</span>
                            </div>
                          </div>
                          {/* Barra de Capacidad */}
                          <div className="relative w-full bg-slate-200 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
                            <div
                              className="bg-[#39A900] h-full rounded-full transition-all duration-700"
                              style={{ width: `${(item.avgCapacity / 3) * 100}%` }}
                            ></div>
                          </div>
                          {/* Barra de Impacto */}
                          <div className="relative w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                            <div
                              className="bg-sky-500 h-full rounded-full transition-all duration-700"
                              style={{ width: `${(item.avgImpact / 3) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Vista B: Telaraña / Radar SVG */}
                {pciChartType === 'radar' && (
                  <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50/70 border-slate-200'} flex flex-col items-center justify-center`}>
                    <div className="flex items-center gap-4 text-xs mb-4">
                      <span className="flex items-center gap-1.5 font-semibold text-[#39A900]">
                        <span className="w-3 h-3 rounded-full bg-[#39A900] inline-block"></span>
                        Polígono de Capacidad Interna
                      </span>
                      <span className="flex items-center gap-1.5 font-semibold text-sky-600 dark:text-sky-400">
                        <span className="w-3 h-1 bg-sky-500 inline-block"></span>
                        Nivel de Impacto
                      </span>
                      <span className="flex items-center gap-1.5 font-semibold text-slate-400">
                        <span className="w-3 h-1 border-t-2 border-dashed border-slate-400 inline-block"></span>
                        Umbral Equilibrado (2.0)
                      </span>
                    </div>

                    <svg viewBox="0 0 400 340" className="w-full max-w-md h-auto">
                      {/* Círculos concéntricos y polígonos guía */}
                      {[1, 2, 3].map(level => {
                        const pts = categoriesPCI.map((_, i) => {
                          const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
                          const r = (level / 3) * 110;
                          return `${200 + r * Math.cos(angle)},${165 + r * Math.sin(angle)}`;
                        }).join(' ');
                        return (
                          <g key={level}>
                            <polygon
                              points={pts}
                              fill="none"
                              stroke={level === 2 ? '#94a3b8' : isDarkMode ? '#334155' : '#cbd5e1'}
                              strokeWidth={level === 2 ? '1.5' : '1'}
                              strokeDasharray={level === 2 ? '4 3' : 'none'}
                            />
                            <text
                              x={200 + 4}
                              y={165 - (level / 3) * 110 + 12}
                              fontSize="9"
                              fill="#64748b"
                              fontWeight="bold"
                            >
                              {level === 1 ? '1 - Débil' : level === 2 ? '2 - Regular' : '3 - Fuerte'}
                            </text>
                          </g>
                        );
                      })}

                      {/* Ejes radiales */}
                      {categoriesPCI.map((cat, i) => {
                        const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
                        const x = 200 + 110 * Math.cos(angle);
                        const y = 165 + 110 * Math.sin(angle);
                        const lx = 200 + 135 * Math.cos(angle);
                        const ly = 165 + 135 * Math.sin(angle);
                        const textAnchor = Math.cos(angle) > 0.2 ? 'start' : Math.cos(angle) < -0.2 ? 'end' : 'middle';

                        return (
                          <g key={cat}>
                            <line
                              x1="200"
                              y1="165"
                              x2={x}
                              y2={y}
                              stroke={isDarkMode ? '#334155' : '#e2e8f0'}
                              strokeWidth="1.5"
                            />
                            <text
                              x={lx}
                              y={ly}
                              textAnchor={textAnchor}
                              fontSize="11"
                              fontWeight="bold"
                              fill={isDarkMode ? '#e2e8f0' : '#1e293b'}
                            >
                              {cat}
                            </text>
                          </g>
                        );
                      })}

                      {/* Polígono de Impacto (Azul) */}
                      {pci.length > 0 && (
                        <polygon
                          points={pciSummary.map((item, i) => {
                            const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
                            const r = ((item.avgImpact || 0.1) / 3) * 110;
                            return `${200 + r * Math.cos(angle)},${165 + r * Math.sin(angle)}`;
                          }).join(' ')}
                          fill="none"
                          stroke="#0284c7"
                          strokeWidth="2"
                        />
                      )}

                      {/* Polígono de Capacidad (Verde SENA) */}
                      {pci.length > 0 && (
                        <polygon
                          points={pciSummary.map((item, i) => {
                            const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
                            const r = ((item.avgCapacity || 0.1) / 3) * 110;
                            return `${200 + r * Math.cos(angle)},${165 + r * Math.sin(angle)}`;
                          }).join(' ')}
                          fill="rgba(57, 169, 0, 0.35)"
                          stroke="#39A900"
                          strokeWidth="2.5"
                        />
                      )}

                      {/* Nodos de datos */}
                      {pciSummary.map((item, i) => {
                        const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
                        const r = ((item.avgCapacity || 0.1) / 3) * 110;
                        const x = 200 + r * Math.cos(angle);
                        const y = 165 + r * Math.sin(angle);
                        return (
                          <circle
                            key={i}
                            cx={x}
                            cy={y}
                            r="4"
                            fill="#39A900"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                          />
                        );
                      })}
                    </svg>
                  </div>
                )}

                {/* Vista C: Matriz de Cuadrantes */}
                {pciChartType === 'cuadrantes' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Cuadrante II: Alto Impacto & Baja Capacidad */}
                    <div className="p-4 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 rounded-2xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase text-rose-800 dark:text-rose-300">
                          Cuadrante II: Debilidades Críticas (Atención Inmediata)
                        </span>
                        <span className="text-[10px] bg-rose-200 dark:bg-rose-900 text-rose-900 dark:text-rose-200 px-2 py-0.5 rounded-full font-bold">
                          Capacidad &lt; 2.0 | Impacto &ge; 2.0
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mb-3">
                        Factores internos deficientes que tienen un alto impacto en la competitividad. Deben incluirse con urgencia en el plan de acción.
                      </p>
                      <div className="space-y-1.5">
                        {pciSummary.filter(c => c.count > 0 && c.avgCapacity < 2.0 && c.avgImpact >= 2.0).length === 0 ? (
                          <span className="text-xs text-slate-400 italic">No hay dimensiones en este cuadrante.</span>
                        ) : (
                          pciSummary.filter(c => c.count > 0 && c.avgCapacity < 2.0 && c.avgImpact >= 2.0).map(c => (
                            <div key={c.category} className="px-3 py-1.5 bg-white dark:bg-slate-900 rounded-lg text-xs font-semibold text-rose-700 dark:text-rose-300 flex justify-between">
                              <span>Capacidad {c.category}</span>
                              <span>Cap: {c.avgCapacity} | Imp: {c.avgImpact}</span>
                            </div>
                          ))
                        )}
                      </div>
                    </div>

                    {/* Cuadrante I: Alto Impacto & Alta Capacidad */}
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 rounded-2xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase text-emerald-800 dark:text-emerald-300">
                          Cuadrante I: Fortalezas Clave (Apalancar)
                        </span>
                        <span className="text-[10px] bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200 px-2 py-0.5 rounded-full font-bold">
                          Capacidad &ge; 2.0 | Impacto &ge; 2.0
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mb-3">
                        Ventajas competitivas distintivas de alto impacto para capitalizar en el mercado y aprovechar oportunidades.
                      </p>
                      <div className="space-y-1.5">
                        {pciSummary.filter(c => c.count > 0 && c.avgCapacity >= 2.0 && c.avgImpact >= 2.0).length === 0 ? (
                          <span className="text-xs text-slate-400 italic">No hay dimensiones en este cuadrante.</span>
                        ) : (
                          pciSummary.filter(c => c.count > 0 && c.avgCapacity >= 2.0 && c.avgImpact >= 2.0).map(c => (
                            <div key={c.category} className="px-3 py-1.5 bg-white dark:bg-slate-900 rounded-lg text-xs font-semibold text-emerald-700 dark:text-emerald-300 flex justify-between">
                              <span>Capacidad {c.category}</span>
                              <span>Cap: {c.avgCapacity} | Imp: {c.avgImpact}</span>
                            </div>
                          ))
                        )}
                      </div>
                    </div>

                    {/* Cuadrante III: Bajo Impacto & Baja Capacidad */}
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-2xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase text-amber-800 dark:text-amber-300">
                          Cuadrante III: Debilidades Secundarias
                        </span>
                        <span className="text-[10px] bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200 px-2 py-0.5 rounded-full font-bold">
                          Capacidad &lt; 2.0 | Impacto &lt; 2.0
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mb-3">
                        Aspectos a mejorar pero con menor repercusión en la operación principal del negocio. Monitorear gradualmente.
                      </p>
                      <div className="space-y-1.5">
                        {pciSummary.filter(c => c.count > 0 && c.avgCapacity < 2.0 && c.avgImpact < 2.0).length === 0 ? (
                          <span className="text-xs text-slate-400 italic">No hay dimensiones en este cuadrante.</span>
                        ) : (
                          pciSummary.filter(c => c.count > 0 && c.avgCapacity < 2.0 && c.avgImpact < 2.0).map(c => (
                            <div key={c.category} className="px-3 py-1.5 bg-white dark:bg-slate-900 rounded-lg text-xs font-semibold text-amber-700 dark:text-amber-300 flex justify-between">
                              <span>Capacidad {c.category}</span>
                              <span>Cap: {c.avgCapacity} | Imp: {c.avgImpact}</span>
                            </div>
                          ))
                        )}
                      </div>
                    </div>

                    {/* Cuadrante IV: Bajo Impacto & Alta Capacidad */}
                    <div className="p-4 bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-900/50 rounded-2xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase text-sky-800 dark:text-sky-300">
                          Cuadrante IV: Fortalezas Complementarias
                        </span>
                        <span className="text-[10px] bg-sky-200 dark:bg-sky-900 text-sky-900 dark:text-sky-200 px-2 py-0.5 rounded-full font-bold">
                          Capacidad &ge; 2.0 | Impacto &lt; 2.0
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mb-3">
                        Capacidades bien desarrolladas pero cuyo impacto actual es moderado. Evaluar cómo aumentar su valor agregado.
                      </p>
                      <div className="space-y-1.5">
                        {pciSummary.filter(c => c.count > 0 && c.avgCapacity >= 2.0 && c.avgImpact < 2.0).length === 0 ? (
                          <span className="text-xs text-slate-400 italic">No hay dimensiones en este cuadrante.</span>
                        ) : (
                          pciSummary.filter(c => c.count > 0 && c.avgCapacity >= 2.0 && c.avgImpact < 2.0).map(c => (
                            <div key={c.category} className="px-3 py-1.5 bg-white dark:bg-slate-900 rounded-lg text-xs font-semibold text-sky-700 dark:text-sky-300 flex justify-between">
                              <span>Capacidad {c.category}</span>
                              <span>Cap: {c.avgCapacity} | Imp: {c.avgImpact}</span>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 4. Interpretación Técnica y Conclusiones SENA */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className={`p-4 rounded-xl border text-xs flex items-start gap-3 ${
                  globalAvgCapacity >= 2.2
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-200'
                    : globalAvgCapacity >= 1.8
                    ? 'bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950/40 dark:border-blue-800 dark:text-blue-200'
                    : 'bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-950/40 dark:border-amber-800 dark:text-amber-200'
                }`}>
                  <Info className="w-5 h-5 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold text-sm">
                      Conclusión y Orientación Pedagógica SENA (Diagnóstico PCI):
                    </p>
                    <p>
                      {totalPciVariables === 0
                        ? 'Ingrese las variables de la empresa o use el botón "Cargar 10 Variables SENA" para visualizar el diagnóstico integral.'
                        : `El promedio de capacidad interna de la empresa es de ${globalAvgCapacity} / 3.0 con un nivel de impacto promedio de ${globalAvgImpact} / 3.0. ` +
                          (globalAvgCapacity >= 2.2
                            ? 'La organización presenta una posición interna sólida y favorable. Las fortalezas identificadas deben ser aprovechadas en la formulación de estrategias ofensivas (FO).'
                            : globalAvgCapacity >= 1.8
                            ? 'La empresa tiene un desempeño interno equilibrado con áreas sólidas y oportunidades puntuales de optimización.'
                            : 'La organización refleja vulnerabilidades internas considerables. Se recomienda priorizar en el Plan de Acción aquellas debilidades con impacto alto (Cuadrante II).')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SECCIÓN MEFI */}
            <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'} rounded-2xl p-6 shadow-sm border`}>
              <div className={`flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b ${isDarkMode ? 'border-slate-800' : 'border-slate-100'} gap-4 mb-6`}>
                <div>
                  <h2 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-[#00324D]'} flex items-center gap-2`}>
                    <SenaLogoSmall />
                    Matriz de Evaluación de Factores Internos (MEFI)
                  </h2>
                  <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mt-0.5`}>
                    Resuma Fortalezas y Debilidades clave. El peso total debe sumar exactamente 1.0 (100%). Calificación: 1 a 4.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className={`text-xs px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 ${Math.abs(totalMefiWeight - 1.0) < 0.01 ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'}`}>
                    <span>Peso Total: {totalMefiWeight.toFixed(2)}</span>
                    {Math.abs(totalMefiWeight - 1.0) >= 0.01 && <AlertTriangle className="w-3.5 h-3.5" />}
                  </div>
                  <button
                    onClick={() => handleTransferMefiToDofa()}
                    className="px-3 py-1.5 bg-[#00324D] hover:bg-[#002233] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition shadow"
                    title="Transferir todas las Fortalezas y Debilidades de esta Matriz MEFI a la Matriz DOFA"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                    Pasar Todas a DOFA
                  </button>
                  <button
                    onClick={() => handleTransferStrongStrengthsToDofa()}
                    className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition shadow border border-emerald-500/30"
                    title="Transferir solo las Fortalezas Fuertes (Calificación 4) y Debilidades Mayores (Calificación 1) a la Matriz DOFA"
                  >
                    <Zap className="w-3.5 h-3.5 text-amber-300" />
                    Pasar Fuertes a DOFA
                  </button>
                  <button
                    onClick={() => handleTransferCriticalPciToMefi(true)}
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition shadow"
                    title="Importar fortalezas y debilidades con Impacto Alto y Capacidad Fuerte/Débil de la Matriz PCI"
                  >
                    <ArrowDownToLine className="w-3.5 h-3.5 text-emerald-200" />
                    Importar de PCI ({criticalPciItems.length})
                  </button>
                  <button
                    onClick={() => {
                      const newItem: MEFIItem = {
                        id: Date.now().toString(),
                        type: 'Fortaleza',
                        description: 'Nueva fortaleza o debilidad',
                        weight: 0.10,
                        rating: 3
                      };
                      setMEFI([...mefi, newItem]);
                    }}
                    className="px-3.5 py-2 bg-[#39A900] hover:bg-[#329600] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition shadow"
                  >
                    <Plus className="w-4 h-4" /> Agregar Factor MEFI
                  </button>
                </div>
              </div>

              {/* Banner de Vinculación Metodológica PCI -> MEFI */}
              <div className={`p-4 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 ${
                isDarkMode ? 'bg-slate-800/60 border-slate-700 text-slate-200' : 'bg-emerald-50/80 border-emerald-200 text-slate-800'
              }`}>
                <div className="flex items-start gap-2.5">
                  <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="text-emerald-900 dark:text-emerald-200 font-bold block text-sm">
                      Vinculación Metodológica: Fortalezas y Debilidades Críticas de PCI
                    </strong>
                    <p className="text-slate-600 dark:text-slate-300 mt-0.5">
                      Se han calificado <strong>{criticalPciItems.length} variables en PCI</strong> con <strong>Impacto Alto y Capacidad Fuerte/Débil</strong> ({criticalFortalezas.length} Fortalezas y {criticalDebilidades.length} Debilidades).
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <label className="text-xs flex items-center gap-1.5 cursor-pointer font-medium select-none text-slate-700 dark:text-slate-300">
                    <input
                      type="checkbox"
                      checked={autoSyncPciToMefi}
                      onChange={e => {
                        const val = e.target.checked;
                        setAutoSyncPciToMefi(val);
                        if (val) handleTransferCriticalPciToMefi(true);
                      }}
                      className="w-4 h-4 accent-[#39A900] rounded"
                    />
                    Auto-Sincronización
                  </label>
                  <button
                    onClick={() => handleTransferCriticalPciToMefi(true)}
                    className="px-3 py-1.5 bg-[#39A900] hover:bg-[#329600] text-white text-xs font-bold rounded-lg transition shadow flex items-center gap-1"
                  >
                    <ArrowDownToLine className="w-3.5 h-3.5" />
                    Cargar a MEFI Ahora
                  </button>
                </div>
              </div>

              {mefi.length === 0 ? (
                <div className={`p-8 text-center rounded-2xl border border-dashed ${isDarkMode ? 'bg-slate-900/50 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-300 text-slate-500'}`}>
                  <FileSpreadsheet className="w-12 h-12 mx-auto mb-3 text-slate-400 opacity-60" />
                  <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">La Matriz MEFI no tiene factores cargados</h4>
                  <p className="text-xs max-w-md mx-auto mb-4">
                    {criticalPciItems.length > 0
                      ? `Haga clic abajo para importar automáticamente los ${criticalPciItems.length} factores con Impacto Alto y Capacidad Fuerte/Débil de la Matriz PCI con pesos normalizados a 1.00.`
                      : 'Agregue fortalezas y debilidades o configure factores con Impacto Alto y Capacidad Fuerte/Débil en PCI.'}
                  </p>
                  {criticalPciItems.length > 0 && (
                    <button
                      onClick={() => handleTransferCriticalPciToMefi(true)}
                      className="px-4 py-2 bg-[#39A900] hover:bg-[#329600] text-white text-xs font-semibold rounded-xl inline-flex items-center gap-1.5 transition shadow"
                    >
                      <ArrowDownToLine className="w-4 h-4" /> Importar {criticalPciItems.length} Factores de PCI
                    </button>
                  )}
                </div>
              ) : (
                <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                  <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider">
                      <th className="p-3 rounded-l-xl">Tipo</th>
                      <th className="p-3">Factor Clave Interno</th>
                      <th className="p-3 text-center">Peso (0.0 - 1.0)</th>
                      <th className="p-3 text-center">Calificación (1-4)</th>
                      <th className="p-3 text-center">Valor Ponderado</th>
                      <th className="p-3 rounded-r-xl text-center">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {mefi.map((item) => {
                      const weightedScore = item.weight * item.rating;
                      return (
                        <tr key={item.id} className="hover:bg-slate-50/80 transition">
                          <td className="p-3 font-medium">
                            <select
                              value={item.type}
                              onChange={e => {
                                const updated = mefi.map(i => i.id === item.id ? { ...i, type: e.target.value as any } : i);
                                setMEFI(updated);
                              }}
                              className={`border rounded-lg px-2 py-1 text-xs font-semibold ${item.type === 'Fortaleza' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-rose-50 text-rose-700 border-rose-200'}`}
                            >
                              <option value="Fortaleza">Fortaleza</option>
                              <option value="Debilidad">Debilidad</option>
                            </select>
                          </td>
                          <td className="p-3">
                            <input
                              type="text"
                              value={item.description}
                              onChange={e => {
                                const updated = mefi.map(i => i.id === item.id ? { ...i, description: e.target.value } : i);
                                setMEFI(updated);
                              }}
                              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs outline-none focus:bg-white focus:ring-1 focus:ring-[#39A900]"
                            />
                          </td>
                          <td className="p-3 text-center">
                            <input
                              type="number"
                              step="0.01"
                              min="0"
                              max="1"
                              value={item.weight}
                              onChange={e => {
                                const updated = mefi.map(i => i.id === item.id ? { ...i, weight: Number(e.target.value) } : i);
                                setMEFI(updated);
                              }}
                              className="w-20 text-center bg-slate-50 border border-slate-300 rounded-lg px-2 py-1 text-xs outline-none"
                            />
                          </td>
                          <td className="p-3 text-center">
                            <select
                              value={item.rating}
                              onChange={e => {
                                const updated = mefi.map(i => i.id === item.id ? { ...i, rating: Number(e.target.value) } : i);
                                setMEFI(updated);
                              }}
                              className="bg-slate-50 border border-slate-300 rounded-lg px-2 py-1 text-xs text-center outline-none font-semibold"
                            >
                              <option value={4}>4 - Fortaleza Mayor</option>
                              <option value={3}>3 - Fortaleza Menor</option>
                              <option value={2}>2 - Debilidad Menor</option>
                              <option value={1}>1 - Debilidad Mayor</option>
                            </select>
                          </td>
                          <td className="p-3 text-center font-bold text-[#00324D]">
                            {weightedScore.toFixed(2)}
                          </td>
                          <td className="p-3 text-center">
                            <button
                              onClick={() => setMEFI(mefi.filter(i => i.id !== item.id))}
                              className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr className="bg-slate-100 font-bold text-xs text-slate-700">
                      <td colSpan={2} className="p-3">TOTALES MEFI</td>
                      <td className="p-3 text-center">{totalMefiWeight.toFixed(2)}</td>
                      <td className="p-3"></td>
                      <td className="p-3 text-center text-base text-[#39A900]">{totalMefiScore.toFixed(2)}</td>
                      <td></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            )}
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-800 flex items-start gap-2">
                <Info className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold">Interpretación MEFI:</span> El puntaje ponderado total es <strong className="text-blue-900">{totalMefiScore.toFixed(2)}</strong>.
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-left border border-blue-200">
                      <thead>
                        <tr className="bg-blue-100 text-blue-900 text-[10px] uppercase">
                          <th className="p-1.5 border-b border-blue-200">Rango</th>
                          <th className="p-1.5 border-b border-blue-200">Interpretación</th>
                        </tr>
                      </thead>
                      <tbody className="text-[11px] text-blue-900">
                        <tr>
                          <td className="p-1.5 border-r border-blue-200 font-bold">1.0 - 1.99</td>
                          <td className="p-1.5">Posición interna débil. Requiere reestructuración inmediata.</td>
                        </tr>
                        <tr>
                          <td className="p-1.5 border-r border-blue-200 font-bold">2.0 - 2.99</td>
                          <td className="p-1.5">Posición interna media. Oportunidades de mejora operativa.</td>
                        </tr>
                        <tr>
                          <td className="p-1.5 border-r border-blue-200 font-bold">3.0 - 4.0</td>
                          <td className="p-1.5">Posición interna fuerte. Aprovechar fortalezas para expansión.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setActiveTab('empresa')}
                className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 text-sm font-semibold rounded-xl transition"
              >
                &larr; Anterior
              </button>
              <button
                onClick={() => setActiveTab('externo')}
                className="px-6 py-3 bg-[#00324D] hover:bg-[#002233] text-white text-sm font-semibold rounded-xl shadow transition"
              >
                Siguiente: Diagnóstico Externo &rarr;
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: DIAGNÓSTICO EXTERNO (PESTEL & MEFE) */}
        {activeTab === 'externo' && (
          <div className="space-y-8 animate-fadeIn">
            {/* SECCIÓN PESTEL */}
            <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'} rounded-2xl p-6 shadow-sm border space-y-8`}>
              {/* Encabezado y acciones */}
              <div className={`flex flex-col lg:flex-row lg:items-center justify-between pb-4 border-b ${isDarkMode ? 'border-slate-800' : 'border-slate-100'} gap-4`}>
                <div>
                  <h2 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-[#00324D]'} flex items-center gap-2`}>
                    <SenaLogoSmall />
                    Matriz de Análisis del Macroentorno (PESTEL)
                  </h2>
                  <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mt-0.5`}>
                    Evalúa las 6 fuerzas externas (Políticas, Económicas, Sociales, Tecnológicas, Ecológicas y Legales) que generan Oportunidades o Amenazas para la microempresa.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    onClick={() => {
                      setPESTEL(DEFAULT_SENA_PESTEL_VARIABLES);
                      showToast('Caso modelo SENA de 11 factores PESTEL cargado exitosamente');
                    }}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition border ${
                      isDarkMode
                        ? 'bg-emerald-950/50 hover:bg-emerald-900/60 text-emerald-300 border-emerald-800'
                        : 'bg-emerald-50 hover:bg-emerald-100 text-[#39A900] border-emerald-200'
                    }`}
                    title="Carga 11 factores reales de microempresas en Colombia"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Cargar Ejemplo Modelo SENA
                  </button>
                  <button
                    onClick={() => {
                      const newItem: PESTELItem = {
                        id: Date.now().toString(),
                        category: 'Económico',
                        factor: 'Nuevo factor del macroentorno',
                        impact: 'Alto',
                        probability: 'Media',
                        nature: 'Oportunidad',
                        implication: 'Implicación estratégica para el negocio'
                      };
                      setPESTEL([...pestel, newItem]);
                    }}
                    className="px-3.5 py-2 bg-[#39A900] hover:bg-[#329600] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition shadow"
                  >
                    <Plus className="w-4 h-4" /> Agregar Factor PESTEL
                  </button>
                  <button
                    onClick={() => handleTransferCriticalPestelToMefe(true)}
                    className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition shadow border border-emerald-500/50"
                    title="Transferir oportunidades y amenazas con Impacto Alto y Probabilidad Alta a la Matriz MEFE"
                  >
                    <Zap className="w-3.5 h-3.5 text-amber-300" />
                    Pasar Críticos a MEFE ({criticalPestelFactors.length})
                  </button>
                  <button
                    onClick={() => {
                      const newOportunidades = criticalOportunidades.map(f => `[${f.category}] ${f.factor}`);
                      const newAmenazas = criticalAmenazas.map(f => `[${f.category}] ${f.factor}`);
                      setDOFA(prev => ({
                        ...prev,
                        opportunities: Array.from(new Set([...prev.opportunities, ...newOportunidades])),
                        threats: Array.from(new Set([...prev.threats, ...newAmenazas]))
                      }));
                      showToast(`¡${newOportunidades.length + newAmenazas.length} factores críticos de PESTEL transferidos a DOFA!`);
                    }}
                    className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition shadow border border-indigo-500/50"
                    title="Transferir directamente los factores críticos a la pestaña DOFA"
                  >
                    <Grid className="w-3.5 h-3.5" />
                    Pasar Críticos a DOFA
                  </button>
                  {pestel.length > 0 && (
                    <button
                      onClick={() => {
                        if (window.confirm('¿Desea limpiar todos los factores de la Matriz PESTEL?')) {
                          setPESTEL([]);
                          showToast('Matriz PESTEL reiniciada');
                        }
                      }}
                      className={`px-3 py-2 text-xs font-semibold rounded-xl transition ${
                        isDarkMode
                          ? 'bg-slate-800 hover:bg-rose-950/40 text-slate-400 hover:text-rose-400'
                          : 'bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-600'
                      }`}
                      title="Limpiar todos los factores"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Badges de Resumen Rápido PESTEL */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                <div className={`p-3.5 rounded-xl border ${isDarkMode ? 'bg-slate-800/60 border-slate-700/60' : 'bg-slate-50 border-slate-200'}`}>
                  <span className={`text-[11px] font-semibold uppercase ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Factores Evaluados</span>
                  <div className="text-xl font-black text-[#00324D] dark:text-white mt-0.5">{totalPestelFactors}</div>
                </div>
                <div className={`p-3.5 rounded-xl border ${isDarkMode ? 'bg-emerald-950/40 border-emerald-900/60' : 'bg-emerald-50 border-emerald-200'}`}>
                  <span className="text-[11px] font-semibold uppercase text-emerald-700 dark:text-emerald-400">Oportunidades</span>
                  <div className="text-xl font-black text-emerald-700 dark:text-emerald-300 mt-0.5">{totalPestelOportunidades}</div>
                </div>
                <div className={`p-3.5 rounded-xl border ${isDarkMode ? 'bg-rose-950/40 border-rose-900/60' : 'bg-rose-50 border-rose-200'}`}>
                  <span className="text-[11px] font-semibold uppercase text-rose-700 dark:text-rose-400">Amenazas</span>
                  <div className="text-xl font-black text-rose-700 dark:text-rose-300 mt-0.5">{totalPestelAmenazas}</div>
                </div>
                <div className={`p-3.5 rounded-xl border ${isDarkMode ? 'bg-sky-950/40 border-sky-900/60' : 'bg-sky-50 border-sky-200'}`}>
                  <span className="text-[11px] font-semibold uppercase text-sky-700 dark:text-sky-400">Impacto Promedio</span>
                  <div className="text-xl font-black text-sky-700 dark:text-sky-300 mt-0.5">
                    {globalAvgPestelImpact > 0 ? `${globalAvgPestelImpact.toFixed(2)} / 3.0` : '0.00'}
                  </div>
                </div>
                <div className={`p-3.5 rounded-xl border ${isDarkMode ? 'bg-purple-950/40 border-purple-900/60' : 'bg-purple-50 border-purple-200'}`}>
                  <span className="text-[11px] font-semibold uppercase text-purple-700 dark:text-purple-400">Probabilidad Prom.</span>
                  <div className="text-xl font-black text-purple-700 dark:text-purple-300 mt-0.5">
                    {globalAvgPestelProb > 0 ? `${globalAvgPestelProb.toFixed(2)} / 3.0` : '0.00'}
                  </div>
                </div>
              </div>

              {/* 1. TABLA EDITABLE DE FACTORES PESTEL */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-sm font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'} flex items-center gap-1.5`}>
                    <Globe className="w-4 h-4 text-[#39A900]" />
                    Registro de Factores del Macroentorno
                  </h3>
                  <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {pestel.length} {pestel.length === 1 ? 'factor registrado' : 'factores registrados'}
                  </span>
                </div>

                {pestel.length === 0 ? (
                  <div className={`p-8 text-center rounded-2xl border border-dashed ${isDarkMode ? 'bg-slate-900/50 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-300 text-slate-500'}`}>
                    <Globe className="w-12 h-12 mx-auto mb-3 text-slate-400 opacity-60" />
                    <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">No hay factores del macroentorno registrados</h4>
                    <p className="text-xs max-w-md mx-auto mb-4">
                      Comience agregando factores manualmente o cargue el caso modelo SENA para analizar un entorno microempresarial real en Colombia.
                    </p>
                    <button
                      onClick={() => setPESTEL(DEFAULT_SENA_PESTEL_VARIABLES)}
                      className="px-4 py-2 bg-[#39A900] hover:bg-[#329600] text-white text-xs font-semibold rounded-xl inline-flex items-center gap-1.5 transition shadow"
                    >
                      <RefreshCw className="w-3.5 h-3.5" /> Cargar 11 Factores Modelo SENA
                    </button>
                  </div>
                ) : (
                  <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className={`${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'} text-xs uppercase tracking-wider font-bold`}>
                          <th className="p-3">Dimensión</th>
                          <th className="p-3">Factor Externo</th>
                          <th className="p-3 text-center">Naturaleza</th>
                          <th className="p-3 text-center">Impacto</th>
                          <th className="p-3 text-center">Probabilidad</th>
                          <th className="p-3">Implicación / Efecto en el Negocio</th>
                          <th className="p-3 text-center">Acción</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                        {pestel.map((item) => {
                          const isCritical = item.impact === 'Alto' && item.probability === 'Alta';
                          return (
                            <tr
                              key={item.id}
                              className={`${
                                isDarkMode ? 'hover:bg-slate-800/40' : 'hover:bg-slate-50/80'
                              } ${
                                isCritical ? 'bg-emerald-50/50 dark:bg-emerald-950/20' : ''
                              } transition`}
                            >
                              <td className="p-3 font-medium whitespace-nowrap">
                                <select
                                  value={item.category}
                                  onChange={e => {
                                    const updated = pestel.map(i => i.id === item.id ? { ...i, category: e.target.value as any } : i);
                                    setPESTEL(updated);
                                  }}
                                  className={`border rounded-lg px-2.5 py-1.5 text-xs font-semibold outline-none ${
                                    isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-white border-slate-300 text-slate-800'
                                  }`}
                                >
                                  {categoriesPESTEL.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                              </td>
                              <td className="p-3 min-w-[220px]">
                                <input
                                  type="text"
                                  value={item.factor}
                                  onChange={e => {
                                    const updated = pestel.map(i => i.id === item.id ? { ...i, factor: e.target.value } : i);
                                    setPESTEL(updated);
                                  }}
                                  className={`w-full border rounded-lg px-2.5 py-1.5 text-xs outline-none focus:ring-1 focus:ring-[#39A900] ${
                                    isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-100 focus:bg-slate-900' : 'bg-slate-50 border-slate-300 text-slate-900 focus:bg-white'
                                  }`}
                                  placeholder="Describa el factor externo..."
                                />
                              </td>
                              <td className="p-3 text-center whitespace-nowrap">
                                <select
                                  value={item.nature || 'Oportunidad'}
                                  onChange={e => {
                                    const updated = pestel.map(i => i.id === item.id ? { ...i, nature: e.target.value as any } : i);
                                    setPESTEL(updated);
                                  }}
                                  className={`border rounded-lg px-2.5 py-1 text-xs font-bold outline-none cursor-pointer ${
                                    (item.nature || 'Oportunidad') === 'Oportunidad'
                                      ? 'bg-emerald-50 text-emerald-700 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800'
                                      : 'bg-rose-50 text-rose-700 border-rose-300 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800'
                                  }`}
                                >
                                  <option value="Oportunidad">🟢 Oportunidad</option>
                                  <option value="Amenaza">🔴 Amenaza</option>
                                </select>
                              </td>
                              <td className="p-3 text-center whitespace-nowrap">
                                <select
                                  value={item.impact}
                                  onChange={e => {
                                    const updated = pestel.map(i => i.id === item.id ? { ...i, impact: e.target.value as any } : i);
                                    setPESTEL(updated);
                                  }}
                                  className={`border rounded-lg px-2 py-1 text-xs font-bold outline-none ${
                                    item.impact === 'Alto'
                                      ? 'bg-red-50 text-red-700 border-red-300 dark:bg-red-950/40 dark:text-red-300'
                                      : item.impact === 'Medio'
                                      ? 'bg-amber-50 text-amber-700 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300'
                                      : 'bg-slate-50 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300'
                                  }`}
                                >
                                  <option value="Alto">Alto (3)</option>
                                  <option value="Medio">Medio (2)</option>
                                  <option value="Bajo">Bajo (1)</option>
                                </select>
                              </td>
                              <td className="p-3 text-center whitespace-nowrap">
                                <select
                                  value={item.probability}
                                  onChange={e => {
                                    const updated = pestel.map(i => i.id === item.id ? { ...i, probability: e.target.value as any } : i);
                                    setPESTEL(updated);
                                  }}
                                  className={`border rounded-lg px-2 py-1 text-xs font-medium outline-none ${
                                    item.probability === 'Alta' && item.impact === 'Alto'
                                      ? 'bg-emerald-50 text-emerald-800 border-emerald-400 dark:bg-emerald-950 dark:text-emerald-200 dark:border-emerald-700 font-bold'
                                      : isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'
                                  }`}
                                >
                                  <option value="Alta">Alta (3)</option>
                                  <option value="Media">Media (2)</option>
                                  <option value="Baja">Baja (1)</option>
                                </select>
                                {isCritical && (
                                  <div className="mt-1 flex items-center justify-center">
                                    <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 rounded px-1.5 py-0.5 shadow-xs">
                                      <Zap className="w-2.5 h-2.5 text-amber-500 fill-amber-500" /> Pasa a MEFE
                                    </span>
                                  </div>
                                )}
                              </td>
                            <td className="p-3 min-w-[200px]">
                              <input
                                type="text"
                                value={item.implication}
                                onChange={e => {
                                  const updated = pestel.map(i => i.id === item.id ? { ...i, implication: e.target.value } : i);
                                  setPESTEL(updated);
                                }}
                                className={`w-full border rounded-lg px-2.5 py-1.5 text-xs outline-none focus:ring-1 focus:ring-[#39A900] ${
                                  isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-100 focus:bg-slate-900' : 'bg-slate-50 border-slate-300 text-slate-900 focus:bg-white'
                                }`}
                                placeholder="Efecto o implicación directa..."
                              />
                            </td>
                            <td className="p-3 text-center whitespace-nowrap">
                              <button
                                onClick={() => setPESTEL(pestel.filter(i => i.id !== item.id))}
                                className="p-1.5 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg transition"
                                title="Eliminar factor"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* 2. TABLA CONSOLIDADA DE RESULTADOS PESTEL */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className={`text-base font-bold ${isDarkMode ? 'text-white' : 'text-[#00324D]'} flex items-center gap-2`}>
                      <FileSpreadsheet className="w-4 h-4 text-[#39A900]" />
                      Tabla Consolidada de Resultados de la Matriz PESTEL
                    </h3>
                    <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mt-0.5`}>
                      Consolidado por dimensiones macroambientales, promedios ponderados y diagnóstico estratégico SENA.
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Escala analítica: 1.0 (Bajo) a 3.0 (Alto)
                  </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className={`${isDarkMode ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-700'} text-xs uppercase tracking-wider font-bold`}>
                        <th className="p-3.5">Dimensión PESTEL</th>
                        <th className="p-3.5 text-center">Factores</th>
                        <th className="p-3.5 text-center">Balance Oportunidad / Amenaza</th>
                        <th className="p-3.5">Impacto Promedio (1.0 - 3.0)</th>
                        <th className="p-3.5 text-center">Probabilidad Prom.</th>
                        <th className="p-3.5 text-center">Índice Severidad</th>
                        <th className="p-3.5">Diagnóstico Estratégico SENA</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                      {pestelSummary.map((s) => {
                        const hasItems = s.count > 0;
                        const severityIndex = hasItems ? ((s.avgImpact * s.avgProbability) / 3).toFixed(2) : '0.00';
                        
                        let diagnosisText = 'Sin factores analizados';
                        let diagnosisColor = 'text-slate-400 dark:text-slate-500';
                        if (hasItems) {
                          if (s.amenazas > s.oportunidades && s.avgImpact >= 2.2) {
                            diagnosisText = '🚨 Amenaza Crítica / Contingencia Prioritaria';
                            diagnosisColor = 'text-rose-600 dark:text-rose-400 font-bold';
                          } else if (s.oportunidades > s.amenazas && s.avgImpact >= 2.2) {
                            diagnosisText = '🌟 Viento a Favor / Alta Oportunidad de Crecimiento';
                            diagnosisColor = 'text-emerald-600 dark:text-emerald-400 font-bold';
                          } else if (s.oportunidades > s.amenazas) {
                            diagnosisText = '✅ Entorno Favorable / Aprovechar en Mercadeo';
                            diagnosisColor = 'text-emerald-600 dark:text-emerald-400';
                          } else if (s.amenazas > s.oportunidades) {
                            diagnosisText = '⚠️ Vigilancia Activa / Riesgo Moderado';
                            diagnosisColor = 'text-amber-600 dark:text-amber-400';
                          } else {
                            diagnosisText = '⚖️ Balance Neutro / Seguimiento Rutinario';
                            diagnosisColor = 'text-slate-600 dark:text-slate-300';
                          }
                        }

                        // Icon per dimension
                        const iconMap: Record<string, string> = {
                          'Político': '🏛️',
                          'Económico': '📈',
                          'Social': '👥',
                          'Tecnológico': '💻',
                          'Ecológico': '🌿',
                          'Legal': '⚖️'
                        };

                        return (
                          <tr key={s.category} className={`${isDarkMode ? 'hover:bg-slate-800/40' : 'hover:bg-slate-50/80'} transition`}>
                            <td className="p-3.5 font-bold">
                              <span className="flex items-center gap-2">
                                <span className="text-base">{iconMap[s.category] || '🌐'}</span>
                                <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>{s.category}</span>
                              </span>
                            </td>
                            <td className="p-3.5 text-center">
                              <span className={`inline-block px-2.5 py-0.5 rounded-full font-bold text-xs ${
                                hasItems
                                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200'
                                  : 'text-slate-400'
                              }`}>
                                {s.count}
                              </span>
                            </td>
                            <td className="p-3.5 text-center">
                              {hasItems ? (
                                <div className="flex items-center justify-center gap-1.5">
                                  <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold">
                                    +{s.oportunidades} Oport.
                                  </span>
                                  <span className="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 text-[11px] font-bold">
                                    -{s.amenazas} Amen.
                                  </span>
                                </div>
                              ) : (
                                <span className="text-slate-400">-</span>
                              )}
                            </td>
                            <td className="p-3.5">
                              {hasItems ? (
                                <div className="space-y-1 min-w-[130px]">
                                  <div className="flex items-center justify-between text-[11px]">
                                    <span className="font-bold text-[#00324D] dark:text-slate-200">{s.avgImpact.toFixed(2)}</span>
                                    <span className="text-slate-500 font-medium">
                                      {s.avgImpact >= 2.5 ? 'Alto' : s.avgImpact >= 1.8 ? 'Medio' : 'Bajo'}
                                    </span>
                                  </div>
                                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                                    <div
                                      className={`h-full rounded-full transition-all duration-300 ${
                                        s.avgImpact >= 2.5 ? 'bg-red-500' : s.avgImpact >= 1.8 ? 'bg-amber-500' : 'bg-emerald-500'
                                      }`}
                                      style={{ width: `${(s.avgImpact / 3) * 100}%` }}
                                    ></div>
                                  </div>
                                </div>
                              ) : (
                                <span className="text-slate-400">-</span>
                              )}
                            </td>
                            <td className="p-3.5 text-center">
                              {hasItems ? (
                                <span className="font-bold text-slate-700 dark:text-slate-300">
                                  {s.avgProbability.toFixed(2)}
                                </span>
                              ) : (
                                <span className="text-slate-400">-</span>
                              )}
                            </td>
                            <td className="p-3.5 text-center">
                              {hasItems ? (
                                <span className={`font-mono font-bold px-2 py-0.5 rounded text-xs ${
                                  Number(severityIndex) >= 2.2
                                    ? 'bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300'
                                    : Number(severityIndex) >= 1.5
                                    ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300'
                                    : 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                                }`}>
                                  {severityIndex}
                                </span>
                              ) : (
                                <span className="text-slate-400">-</span>
                              )}
                            </td>
                            <td className={`p-3.5 ${diagnosisColor}`}>
                              {diagnosisText}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr className={`${isDarkMode ? 'bg-slate-800/90 text-white' : 'bg-slate-100 text-slate-800'} font-bold text-xs`}>
                        <td className="p-3.5">CONSOLIDADO GLOBAL PESTEL</td>
                        <td className="p-3.5 text-center">{totalPestelFactors}</td>
                        <td className="p-3.5 text-center">
                          <span className="text-emerald-600 dark:text-emerald-400">+{totalPestelOportunidades} Oport.</span>
                          {' / '}
                          <span className="text-rose-600 dark:text-rose-400">-{totalPestelAmenazas} Amen.</span>
                        </td>
                        <td className="p-3.5">
                          <span className="text-sky-600 dark:text-sky-400 font-extrabold text-sm">
                            {globalAvgPestelImpact > 0 ? `${globalAvgPestelImpact.toFixed(2)} / 3.0` : '-'}
                          </span>
                        </td>
                        <td className="p-3.5 text-center">
                          <span className="text-purple-600 dark:text-purple-400 font-extrabold text-sm">
                            {globalAvgPestelProb > 0 ? `${globalAvgPestelProb.toFixed(2)} / 3.0` : '-'}
                          </span>
                        </td>
                        <td className="p-3.5 text-center font-mono font-bold text-sm text-[#39A900]">
                          {totalPestelFactors > 0 ? ((globalAvgPestelImpact * globalAvgPestelProb) / 3).toFixed(2) : '-'}
                        </td>
                        <td className="p-3.5 text-[#39A900]">
                          {totalPestelOportunidades >= totalPestelAmenazas
                            ? 'Balance Macro Favorable (+Oportunidades)'
                            : 'Balance Macro Exigente (+Amenazas a mitigar)'}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              {/* 3. GRÁFICA DINÁMICA DE LA MATRIZ PESTEL */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                  <div>
                    <h3 className={`text-base font-bold ${isDarkMode ? 'text-white' : 'text-[#00324D]'} flex items-center gap-2`}>
                      <BarChart3 className="w-4 h-4 text-[#39A900]" />
                      Gráfica Dinámica del Perfil PESTEL
                    </h3>
                    <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mt-0.5`}>
                      Visualización multivariable de impacto, probabilidad y distribución de riesgos vs. oportunidades.
                    </p>
                  </div>

                  {/* Selector de Tipo de Gráfica */}
                  <div className={`flex rounded-xl p-1 border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'}`}>
                    <button
                      onClick={() => setPestelChartType('radar')}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                        pestelChartType === 'radar'
                          ? 'bg-[#39A900] text-white shadow'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                      }`}
                    >
                      Telaraña / Radar (6 Ejes)
                    </button>
                    <button
                      onClick={() => setPestelChartType('barras')}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                        pestelChartType === 'barras'
                          ? 'bg-[#39A900] text-white shadow'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                      }`}
                    >
                      Barras Comparativas
                    </button>
                    <button
                      onClick={() => setPestelChartType('matriz')}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                        pestelChartType === 'matriz'
                          ? 'bg-[#39A900] text-white shadow'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                      }`}
                    >
                      Matriz Priorización 3x3
                    </button>
                  </div>
                </div>

                {/* VISTA 1: TELARAÑA / RADAR PESTEL (6 EJES) */}
                {pestelChartType === 'radar' && (
                  <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50/70 border-slate-200'} flex flex-col items-center justify-center`}>
                    <div className="flex flex-wrap items-center justify-center gap-4 text-xs mb-4">
                      <span className="flex items-center gap-1.5 font-semibold text-[#39A900]">
                        <span className="w-3 h-3 rounded-full bg-[#39A900] inline-block"></span>
                        Polígono de Impacto en el Negocio (1.0 - 3.0)
                      </span>
                      <span className="flex items-center gap-1.5 font-semibold text-sky-600 dark:text-sky-400">
                        <span className="w-3 h-1 bg-sky-500 inline-block"></span>
                        Polígono de Probabilidad de Ocurrencia (1.0 - 3.0)
                      </span>
                      <span className="flex items-center gap-1.5 font-semibold text-slate-400">
                        <span className="w-3 h-1 border-t-2 border-dashed border-slate-400 inline-block"></span>
                        Nivel Medio (2.0)
                      </span>
                    </div>

                    <svg viewBox="0 0 460 380" className="w-full max-w-lg h-auto">
                      {/* Hexágonos concéntricos guía (Nivel 1, 2, 3) */}
                      {[1, 2, 3].map(level => {
                        const pts = categoriesPESTEL.map((_, i) => {
                          const angle = (i * 2 * Math.PI) / 6 - Math.PI / 2;
                          const r = (level / 3) * 125;
                          return `${230 + r * Math.cos(angle)},${185 + r * Math.sin(angle)}`;
                        }).join(' ');
                        return (
                          <g key={level}>
                            <polygon
                              points={pts}
                              fill="none"
                              stroke={level === 2 ? '#94a3b8' : isDarkMode ? '#334155' : '#cbd5e1'}
                              strokeWidth={level === 2 ? '1.5' : '1'}
                              strokeDasharray={level === 2 ? '4 3' : 'none'}
                            />
                            <text
                              x={230 + 4}
                              y={185 - (level / 3) * 125 + 12}
                              fontSize="9"
                              fill="#64748b"
                              fontWeight="bold"
                            >
                              {level === 1 ? '1 - Bajo' : level === 2 ? '2 - Medio' : '3 - Alto'}
                            </text>
                          </g>
                        );
                      })}

                      {/* Ejes radiales para las 6 dimensiones */}
                      {categoriesPESTEL.map((cat, i) => {
                        const angle = (i * 2 * Math.PI) / 6 - Math.PI / 2;
                        const x = 230 + 125 * Math.cos(angle);
                        const y = 185 + 125 * Math.sin(angle);
                        const lx = 230 + 152 * Math.cos(angle);
                        const ly = 185 + 152 * Math.sin(angle);
                        const textAnchor = Math.cos(angle) > 0.2 ? 'start' : Math.cos(angle) < -0.2 ? 'end' : 'middle';
                        const summary = pestelSummary.find(s => s.category === cat);

                        return (
                          <g key={cat}>
                            <line
                              x1={230}
                              y1={185}
                              x2={x}
                              y2={y}
                              stroke={isDarkMode ? '#334155' : '#e2e8f0'}
                              strokeWidth="1.5"
                            />
                            <text
                              x={lx}
                              y={ly}
                              textAnchor={textAnchor}
                              dominantBaseline="central"
                              fontSize="11"
                              fontWeight="bold"
                              fill={isDarkMode ? '#f1f5f9' : '#00324D'}
                            >
                              {cat}
                            </text>
                            <text
                              x={lx}
                              y={ly + 12}
                              textAnchor={textAnchor}
                              dominantBaseline="central"
                              fontSize="9"
                              fill="#64748b"
                            >
                              Imp: {summary?.avgImpact ? summary.avgImpact.toFixed(1) : '-'} | {summary?.count || 0} fact.
                            </text>
                          </g>
                        );
                      })}

                      {/* Polígono de Probabilidad (Cian) */}
                      {totalPestelFactors > 0 && (
                        <polygon
                          points={categoriesPESTEL.map((cat, i) => {
                            const angle = (i * 2 * Math.PI) / 6 - Math.PI / 2;
                            const s = pestelSummary.find(item => item.category === cat);
                            const val = s?.avgProbability || 0;
                            const r = (val / 3) * 125;
                            return `${230 + r * Math.cos(angle)},${185 + r * Math.sin(angle)}`;
                          }).join(' ')}
                          fill="#0284c7"
                          fillOpacity="0.15"
                          stroke="#0284c7"
                          strokeWidth="2"
                          strokeDasharray="4 2"
                        />
                      )}

                      {/* Polígono de Impacto (Verde SENA) */}
                      {totalPestelFactors > 0 && (
                        <polygon
                          points={categoriesPESTEL.map((cat, i) => {
                            const angle = (i * 2 * Math.PI) / 6 - Math.PI / 2;
                            const s = pestelSummary.find(item => item.category === cat);
                            const val = s?.avgImpact || 0;
                            const r = (val / 3) * 125;
                            return `${230 + r * Math.cos(angle)},${185 + r * Math.sin(angle)}`;
                          }).join(' ')}
                          fill="#39A900"
                          fillOpacity="0.30"
                          stroke="#39A900"
                          strokeWidth="2.5"
                        />
                      )}

                      {/* Puntos y Vértices Interactivos */}
                      {totalPestelFactors > 0 && categoriesPESTEL.map((cat, i) => {
                        const angle = (i * 2 * Math.PI) / 6 - Math.PI / 2;
                        const s = pestelSummary.find(item => item.category === cat);
                        const valImpact = s?.avgImpact || 0;
                        const rImpact = (valImpact / 3) * 125;
                        const xi = 230 + rImpact * Math.cos(angle);
                        const yi = 185 + rImpact * Math.sin(angle);

                        return (
                          <g key={`pts-${cat}`}>
                            <circle
                              cx={xi}
                              cy={yi}
                              r="5"
                              fill="#39A900"
                              stroke="#ffffff"
                              strokeWidth="2"
                              className="cursor-pointer transition-transform hover:scale-125"
                            >
                              <title>{`${cat}: Impacto Promedio ${s?.avgImpact.toFixed(2)} (${s?.count} factores)`}</title>
                            </circle>
                          </g>
                        );
                      })}
                    </svg>

                    <div className="mt-3 text-center text-xs text-slate-500 max-w-md">
                      Un área verde amplia indica que esa dimensión externa ejerce alta presión estratégica en la microempresa y debe ser atendida en la DOFA.
                    </div>
                  </div>
                )}

                {/* VISTA 2: BARRAS COMPARATIVAS */}
                {pestelChartType === 'barras' && (
                  <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50/70 border-slate-200'} space-y-6`}>
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400">
                          <span className="w-3 h-3 rounded bg-emerald-500 inline-block"></span>
                          Oportunidades
                        </span>
                        <span className="flex items-center gap-1.5 font-semibold text-rose-600 dark:text-rose-400">
                          <span className="w-3 h-3 rounded bg-rose-500 inline-block"></span>
                          Amenazas
                        </span>
                      </div>
                      <span className="text-slate-500 font-medium">Desglose de Oportunidades vs. Amenazas por Dimensión</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {pestelSummary.map((s) => {
                        const total = s.count;
                        const iconMap: Record<string, string> = {
                          'Político': '🏛️',
                          'Económico': '📈',
                          'Social': '👥',
                          'Tecnológico': '💻',
                          'Ecológico': '🌿',
                          'Legal': '⚖️'
                        };
                        return (
                          <div
                            key={s.category}
                            className={`p-4 rounded-xl border ${
                              isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                            } shadow-sm space-y-3`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-sm text-[#00324D] dark:text-white flex items-center gap-1.5">
                                <span>{iconMap[s.category]}</span>
                                {s.category}
                              </span>
                              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
                                {total} {total === 1 ? 'factor' : 'factores'}
                              </span>
                            </div>

                            {/* Barras de Oportunidades vs Amenazas */}
                            <div className="space-y-1.5">
                              <div className="flex items-center justify-between text-xs">
                                <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Oportunidades: {s.oportunidades}</span>
                                <span className="text-rose-700 dark:text-rose-400 font-semibold">Amenazas: {s.amenazas}</span>
                              </div>
                              <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex">
                                <div
                                  className="bg-emerald-500 h-full transition-all duration-300"
                                  style={{ width: total > 0 ? `${(s.oportunidades / total) * 100}%` : '0%' }}
                                  title={`${s.oportunidades} Oportunidades`}
                                ></div>
                                <div
                                  className="bg-rose-500 h-full transition-all duration-300"
                                  style={{ width: total > 0 ? `${(s.amenazas / total) * 100}%` : '0%' }}
                                  title={`${s.amenazas} Amenazas`}
                                ></div>
                              </div>
                            </div>

                            {/* Nivel de Impacto Promedio */}
                            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                              <span className="text-slate-500">Impacto Promedio:</span>
                              <span className="font-bold text-[#39A900]">
                                {s.avgImpact > 0 ? `${s.avgImpact.toFixed(2)} / 3.0` : 'Sin datos'}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* VISTA 3: MATRIZ DE PRIORIZACIÓN (IMPACTO VS. PROBABILIDAD 3x3) */}
                {pestelChartType === 'matriz' && (
                  <div className="space-y-4">
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Clasificación de factores en matriz 3x3 según <strong>Impacto en el Negocio</strong> (eje vertical) y <strong>Probabilidad de Ocurrencia</strong> (eje horizontal).
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Cuadrante Rojo: ALTA PRIORIDAD (Alto Impacto + Alta Probabilidad) */}
                      <div className="p-4 rounded-2xl border-2 border-rose-300 dark:border-rose-900 bg-rose-50/60 dark:bg-rose-950/30 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-black uppercase text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
                              <AlertTriangle className="w-4 h-4 text-rose-600" />
                              🚨 Zona Crítica (Alta Prioridad)
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-200 dark:bg-rose-900 text-rose-900 dark:text-rose-100">
                              Impacto Alto & Prob. Alta
                            </span>
                          </div>
                          <p className="text-[11px] text-rose-700 dark:text-rose-400 mb-3">
                            Factores inminentes que exigen acción inmediata en el Plan de Acción (contingencias para amenazas y captura urgente de oportunidades).
                          </p>

                          <div className="space-y-2">
                            {pestel.filter(f => f.impact === 'Alto' && f.probability === 'Alta').map(item => (
                              <div
                                key={item.id}
                                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900/60 shadow-xs text-xs space-y-1"
                              >
                                <div className="flex items-center justify-between gap-1">
                                  <span className="font-bold text-[#00324D] dark:text-white">[{item.category}]</span>
                                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                                    (item.nature || 'Oportunidad') === 'Oportunidad'
                                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300'
                                      : 'bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300'
                                  }`}>
                                    {item.nature || 'Oportunidad'}
                                  </span>
                                </div>
                                <div className="text-slate-700 dark:text-slate-300 font-medium">{item.factor}</div>
                              </div>
                            ))}
                            {pestel.filter(f => f.impact === 'Alto' && f.probability === 'Alta').length === 0 && (
                              <div className="text-center py-4 text-xs text-slate-400 italic">No hay factores en esta zona</div>
                            )}
                          </div>
                          {criticalPestelFactors.length > 0 && (
                            <button
                              onClick={() => handleTransferCriticalPestelToMefe(true)}
                              className="mt-3.5 w-full py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition shadow"
                            >
                              <Zap className="w-3.5 h-3.5 text-amber-300" />
                              Transferir estos {criticalPestelFactors.length} factores a la Matriz MEFE
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Cuadrante Amarillo: ATENCIÓN ESTRATÉGICA (Alto/Medio o Medio/Alta) */}
                      <div className="p-4 rounded-2xl border border-amber-300 dark:border-amber-900 bg-amber-50/60 dark:bg-amber-950/30 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-black uppercase text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                              <Target className="w-4 h-4 text-amber-600" />
                              ⚠️ Atención Estratégica
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-100">
                              Impacto o Prob. Moderada
                            </span>
                          </div>
                          <p className="text-[11px] text-amber-700 dark:text-amber-400 mb-3">
                            Factores con potencial de alterar el negocio. Requieren planes preventivos y seguimiento en los comités de gestión.
                          </p>

                          <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
                            {pestel.filter(f => (f.impact === 'Alto' && f.probability === 'Media') || (f.impact === 'Medio' && f.probability === 'Alta')).map(item => (
                              <div
                                key={item.id}
                                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/60 shadow-xs text-xs space-y-1"
                              >
                                <div className="flex items-center justify-between gap-1">
                                  <span className="font-bold text-[#00324D] dark:text-white">[{item.category}]</span>
                                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                                    (item.nature || 'Oportunidad') === 'Oportunidad'
                                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300'
                                      : 'bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300'
                                  }`}>
                                    {item.nature || 'Oportunidad'}
                                  </span>
                                </div>
                                <div className="text-slate-700 dark:text-slate-300 font-medium">{item.factor}</div>
                              </div>
                            ))}
                            {pestel.filter(f => (f.impact === 'Alto' && f.probability === 'Media') || (f.impact === 'Medio' && f.probability === 'Alta')).length === 0 && (
                              <div className="text-center py-4 text-xs text-slate-400 italic">No hay factores en esta zona</div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Cuadrante Azul/Verde: MONITOREO PREVENTIVO (Baja incidencia) */}
                      <div className="p-4 rounded-2xl border border-slate-300 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-black uppercase text-slate-800 dark:text-slate-300 flex items-center gap-1.5">
                              <Info className="w-4 h-4 text-sky-600" />
                              ℹ️ Monitoreo Periódico
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                              Baja Incidencia Relativa
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-3">
                            Factores de bajo impacto o probabilidad lejana. Se mantienen en el radar sin demandar recursos directos del plan operativo.
                          </p>

                          <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
                            {pestel.filter(f => !(f.impact === 'Alto' && f.probability === 'Alta') && !((f.impact === 'Alto' && f.probability === 'Media') || (f.impact === 'Medio' && f.probability === 'Alta'))).map(item => (
                              <div
                                key={item.id}
                                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs text-xs space-y-1"
                              >
                                <div className="flex items-center justify-between gap-1">
                                  <span className="font-bold text-[#00324D] dark:text-white">[{item.category}]</span>
                                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                                    (item.nature || 'Oportunidad') === 'Oportunidad'
                                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300'
                                      : 'bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300'
                                  }`}>
                                    {item.nature || 'Oportunidad'}
                                  </span>
                                </div>
                                <div className="text-slate-700 dark:text-slate-300 font-medium">{item.factor}</div>
                              </div>
                            ))}
                            {pestel.filter(f => !(f.impact === 'Alto' && f.probability === 'Alta') && !((f.impact === 'Alto' && f.probability === 'Media') || (f.impact === 'Medio' && f.probability === 'Alta'))).length === 0 && (
                              <div className="text-center py-4 text-xs text-slate-400 italic">No hay factores en esta zona</div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 4. SÍNTESIS FORMATIVA SENA */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#39A900]" />
                  Conclusiones y Recomendaciones Estratégicas SENA
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
                  <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 rounded-xl">
                    <strong className="text-emerald-800 dark:text-emerald-300 block mb-1">Dimensión con Mayor Oportunidad:</strong>
                    <span className="text-emerald-700 dark:text-emerald-400">
                      {(() => {
                        const best = [...pestelSummary].sort((a, b) => b.oportunidades - a.oportunidades)[0];
                        return best && best.oportunidades > 0
                          ? `${best.category} (${best.oportunidades} oportunidades detectadas)`
                          : 'Cargue factores para identificar oportunidades clave.';
                      })()}
                    </span>
                  </div>
                  <div className="p-3.5 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 rounded-xl">
                    <strong className="text-rose-800 dark:text-rose-300 block mb-1">Dimensión con Mayor Amenaza / Riesgo:</strong>
                    <span className="text-rose-700 dark:text-rose-400">
                      {(() => {
                        const worst = [...pestelSummary].sort((a, b) => b.amenazas - a.amenazas)[0];
                        return worst && worst.amenazas > 0
                          ? `${worst.category} (${worst.amenazas} amenazas a vigilar)`
                          : 'Cargue factores para evaluar amenazas.';
                      })()}
                    </span>
                  </div>
                  <div className="p-3.5 bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-900/60 rounded-xl">
                    <strong className="text-sky-800 dark:text-sky-300 block mb-1">Articulación Metodológica SENA:</strong>
                    <span className="text-sky-700 dark:text-sky-400">
                      Los factores identificados en PESTEL alimentan automáticamente la <strong>Matriz MEFE</strong> y las <strong>Oportunidades y Amenazas de la DOFA</strong>.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* SECCIÓN MEFE */}
            <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'} rounded-2xl p-6 shadow-sm border`}>
              <div className={`flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b ${isDarkMode ? 'border-slate-800' : 'border-slate-100'} gap-4 mb-6`}>
                <div>
                  <h2 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-[#00324D]'} flex items-center gap-2`}>
                    <SenaLogoSmall />
                    Matriz de Evaluación de Factores Externos (MEFE)
                  </h2>
                  <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mt-0.5`}>
                    Resuma Oportunidades y Amenazas clave del sector. El peso total debe sumar exactamente 1.0. Calificación: 1 a 4.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className={`text-xs px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 ${Math.abs(totalMefeWeight - 1.0) < 0.01 ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'}`}>
                    <span>Peso Total: {totalMefeWeight.toFixed(2)}</span>
                    {Math.abs(totalMefeWeight - 1.0) >= 0.01 && <AlertTriangle className="w-3.5 h-3.5" />}
                  </div>
                  <button
                    onClick={() => {
                      const opportunities = mefe.filter(i => i.type === 'Oportunidad').map(i => i.description);
                      const threats = mefe.filter(i => i.type === 'Amenaza').map(i => i.description);
                      setDOFA(prev => ({
                        ...prev,
                        opportunities: Array.from(new Set([...prev.opportunities, ...opportunities])),
                        threats: Array.from(new Set([...prev.threats, ...threats]))
                      }));
                      showToast(`¡${opportunities.length + threats.length} factores MEFE transferidos a la Matriz DOFA!`);
                    }}
                    className="px-3 py-1.5 bg-[#00324D] hover:bg-[#002233] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition shadow"
                    title="Transferir todas las Oportunidades y Amenazas de esta Matriz MEFE a la Matriz DOFA"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                    Pasar Todas a DOFA
                  </button>
                  <button
                    onClick={() => {
                      const superiorResponses = mefe.filter(i => i.type === 'Oportunidad' && i.rating === 4).map(i => i.description);
                      const poorResponses = mefe.filter(i => i.type === 'Amenaza' && i.rating === 1).map(i => i.description);
                      setDOFA(prev => ({
                        ...prev,
                        opportunities: Array.from(new Set([...prev.opportunities, ...superiorResponses])),
                        threats: Array.from(new Set([...prev.threats, ...poorResponses]))
                      }));
                      showToast(`¡${superiorResponses.length} Respuestas Superiores y ${poorResponses.length} Respuestas Malas transferidas a DOFA!`);
                    }}
                    className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition shadow border border-emerald-500/30"
                    title="Transferir solo las Respuestas Superiores (Calificación 4) y Malas (Calificación 1) a la Matriz DOFA"
                  >
                    <Zap className="w-3.5 h-3.5 text-amber-300" />
                    Pasar Fuertes a DOFA
                  </button>
                  <button
                    onClick={() => handleTransferCriticalPestelToMefe(true)}
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition shadow"
                    title="Importar oportunidades y amenazas con Impacto Alto y Probabilidad Alta de la Matriz PESTEL"
                  >
                    <ArrowDownToLine className="w-3.5 h-3.5 text-emerald-200" />
                    Importar de PESTEL ({criticalPestelFactors.length})
                  </button>
                  <button
                    onClick={() => {
                      const newItem: MEFEItem = {
                        id: Date.now().toString(),
                        type: 'Oportunidad',
                        description: 'Nueva oportunidad o amenaza',
                        weight: 0.10,
                        rating: 3
                      };
                      setMEFE([...mefe, newItem]);
                    }}
                    className="px-3.5 py-2 bg-[#39A900] hover:bg-[#329600] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition shadow"
                  >
                    <Plus className="w-4 h-4" /> Agregar Factor MEFE
                  </button>
                </div>
              </div>

              {/* Banner de Vinculación Metodológica PESTEL -> MEFE */}
              <div className={`p-4 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 ${
                isDarkMode ? 'bg-slate-800/60 border-slate-700 text-slate-200' : 'bg-emerald-50/80 border-emerald-200 text-slate-800'
              }`}>
                <div className="flex items-start gap-2.5">
                  <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="text-emerald-900 dark:text-emerald-200 font-bold block text-sm">
                      Vinculación Metodológica: Oportunidades y Amenazas Críticas de PESTEL
                    </strong>
                    <p className="text-slate-600 dark:text-slate-300 mt-0.5">
                      Se han calificado <strong>{criticalPestelFactors.length} factores en PESTEL</strong> con <strong>Impacto Alto y Probabilidad Alta</strong> ({criticalOportunidades.length} Oportunidades y {criticalAmenazas.length} Amenazas).
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <label className="text-xs flex items-center gap-1.5 cursor-pointer font-medium select-none text-slate-700 dark:text-slate-300">
                    <input
                      type="checkbox"
                      checked={autoSyncPestelToMefe}
                      onChange={e => {
                        const val = e.target.checked;
                        setAutoSyncPestelToMefe(val);
                        if (val) handleTransferCriticalPestelToMefe(true);
                      }}
                      className="w-4 h-4 accent-[#39A900] rounded"
                    />
                    Sincronización Automática
                  </label>
                  <button
                    onClick={() => handleTransferCriticalPestelToMefe(true)}
                    className="px-3 py-1.5 bg-[#39A900] hover:bg-[#329600] text-white text-xs font-bold rounded-lg transition shadow flex items-center gap-1"
                  >
                    <ArrowDownToLine className="w-3.5 h-3.5" />
                    Cargar a MEFE Ahora
                  </button>
                </div>
              </div>

              {mefe.length === 0 ? (
                <div className={`p-8 text-center rounded-2xl border border-dashed ${isDarkMode ? 'bg-slate-900/50 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-300 text-slate-500'}`}>
                  <FileSpreadsheet className="w-12 h-12 mx-auto mb-3 text-slate-400 opacity-60" />
                  <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">La Matriz MEFE no tiene factores cargados</h4>
                  <p className="text-xs max-w-md mx-auto mb-4">
                    {criticalPestelFactors.length > 0
                      ? `Haga clic abajo para importar automáticamente los ${criticalPestelFactors.length} factores con Impacto Alto y Probabilidad Alta de la Matriz PESTEL con pesos normalizados a 1.00.`
                      : 'Agregue factores de Oportunidad y Amenaza o configure factores con Impacto Alto y Probabilidad Alta en PESTEL.'}
                  </p>
                  {criticalPestelFactors.length > 0 && (
                    <button
                      onClick={() => handleTransferCriticalPestelToMefe(true)}
                      className="px-4 py-2 bg-[#39A900] hover:bg-[#329600] text-white text-xs font-semibold rounded-xl inline-flex items-center gap-1.5 transition shadow"
                    >
                      <ArrowDownToLine className="w-4 h-4" /> Importar {criticalPestelFactors.length} Factores de PESTEL
                    </button>
                  )}
                </div>
              ) : (
                <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                  <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider">
                      <th className="p-3 rounded-l-xl">Tipo</th>
                      <th className="p-3">Factor Clave Externo</th>
                      <th className="p-3 text-center">Peso (0.0 - 1.0)</th>
                      <th className="p-3 text-center">Calificación (1-4)</th>
                      <th className="p-3 text-center">Valor Ponderado</th>
                      <th className="p-3 rounded-r-xl text-center">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {mefe.map((item) => {
                      const weightedScore = item.weight * item.rating;
                      return (
                        <tr key={item.id} className="hover:bg-slate-50/80 transition">
                          <td className="p-3 font-medium">
                            <select
                              value={item.type}
                              onChange={e => {
                                const updated = mefe.map(i => i.id === item.id ? { ...i, type: e.target.value as any } : i);
                                setMEFE(updated);
                              }}
                              className={`border rounded-lg px-2 py-1 text-xs font-semibold ${item.type === 'Oportunidad' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}
                            >
                              <option value="Oportunidad">Oportunidad</option>
                              <option value="Amenaza">Amenaza</option>
                            </select>
                          </td>
                          <td className="p-3">
                            <input
                              type="text"
                              value={item.description}
                              onChange={e => {
                                const updated = mefe.map(i => i.id === item.id ? { ...i, description: e.target.value } : i);
                                setMEFE(updated);
                              }}
                              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs outline-none focus:bg-white focus:ring-1 focus:ring-[#39A900]"
                            />
                          </td>
                          <td className="p-3 text-center">
                            <input
                              type="number"
                              step="0.01"
                              min="0"
                              max="1"
                              value={item.weight}
                              onChange={e => {
                                const updated = mefe.map(i => i.id === item.id ? { ...i, weight: Number(e.target.value) } : i);
                                setMEFE(updated);
                              }}
                              className="w-20 text-center bg-slate-50 border border-slate-300 rounded-lg px-2 py-1 text-xs outline-none"
                            />
                          </td>
                          <td className="p-3 text-center">
                            <select
                              value={item.rating}
                              onChange={e => {
                                const updated = mefe.map(i => i.id === item.id ? { ...i, rating: Number(e.target.value) } : i);
                                setMEFE(updated);
                              }}
                              className="bg-slate-50 border border-slate-300 rounded-lg px-2 py-1 text-xs text-center outline-none font-semibold"
                            >
                              <option value={4}>4 - Respuesta Superior</option>
                              <option value={3}>3 - Respuesta Superior al Promedio</option>
                              <option value={2}>2 - Respuesta Promedio</option>
                              <option value={1}>1 - Respuesta Mala</option>
                            </select>
                          </td>
                          <td className="p-3 text-center font-bold text-[#00324D]">
                            {weightedScore.toFixed(2)}
                          </td>
                          <td className="p-3 text-center">
                            <button
                              onClick={() => setMEFE(mefe.filter(i => i.id !== item.id))}
                              className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr className="bg-slate-100 font-bold text-xs text-slate-700">
                      <td colSpan={2} className="p-3">TOTALES MEFE</td>
                      <td className="p-3 text-center">{totalMefeWeight.toFixed(2)}</td>
                      <td className="p-3"></td>
                      <td className="p-3 text-center text-base text-[#39A900]">{totalMefeScore.toFixed(2)}</td>
                      <td></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            )}
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-800 flex items-start gap-2">
                <Info className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold">Interpretación MEFE:</span> El puntaje ponderado total es <strong className="text-blue-900">{totalMefeScore.toFixed(2)}</strong>.
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-left border border-blue-200">
                      <thead>
                        <tr className="bg-blue-100 text-blue-900 text-[10px] uppercase">
                          <th className="p-1.5 border-b border-blue-200">Rango</th>
                          <th className="p-1.5 border-b border-blue-200">Interpretación</th>
                        </tr>
                      </thead>
                      <tbody className="text-[11px] text-blue-900">
                        <tr>
                          <td className="p-1.5 border-r border-blue-200 font-bold">1.0 - 1.99</td>
                          <td className="p-1.5">Respuesta débil. La empresa no aprovecha oportunidades ni mitiga amenazas eficazmente.</td>
                        </tr>
                        <tr>
                          <td className="p-1.5 border-r border-blue-200 font-bold">2.0 - 2.99</td>
                          <td className="p-1.5">Respuesta promedio. Existe un equilibrio básico en la gestión del entorno externo.</td>
                        </tr>
                        <tr>
                          <td className="p-1.5 border-r border-blue-200 font-bold">3.0 - 4.0</td>
                          <td className="p-1.5">Respuesta superior. La organización compite con éxito aprovechando el entorno macro.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setActiveTab('interno')}
                className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 text-sm font-semibold rounded-xl transition"
              >
                &larr; Anterior
              </button>
              <button
                onClick={() => setActiveTab('dofa')}
                className="px-6 py-3 bg-[#00324D] hover:bg-[#002233] text-white text-sm font-semibold rounded-xl shadow transition"
              >
                Siguiente: Matriz DOFA &rarr;
              </button>
            </div>
          </div>
        )}

        {/* TAB 4: MATRIZ DOFA & CRUZADA */}
        {activeTab === 'dofa' && (
          <div className="space-y-8 animate-fadeIn">
            {/* 4.1 DOFA Clásica */}
            <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'} rounded-2xl p-6 shadow-sm border`}>
              <div className={`pb-4 border-b ${isDarkMode ? 'border-slate-800' : 'border-slate-100'} mb-6`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-[#00324D]'} flex items-center gap-2`}>
                      <SenaLogoSmall />
                      Matriz DOFA (Debilidades, Oportunidades, Fortalezas, Amenazas)
                    </h2>
                    <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mt-0.5`}>
                      Sintetice los hallazgos de los diagnósticos interno y externo.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      handleTransferStrongPciToDofa();
                      const newOportunidades = criticalOportunidades.map(f => `[${f.category}] ${f.factor}`);
                      const newAmenazas = criticalAmenazas.map(f => `[${f.category}] ${f.factor}`);
                      setDOFA(prev => ({
                        ...prev,
                        opportunities: Array.from(new Set([...prev.opportunities, ...newOportunidades])),
                        threats: Array.from(new Set([...prev.threats, ...newAmenazas]))
                      }));
                      showToast('¡Información de diagnósticos importada a DOFA!');
                    }}
                    className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl flex items-center gap-2 transition shadow shrink-0"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Sincronizar con Diagnósticos
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Fortalezas */}
                <div className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-extrabold text-emerald-800 uppercase tracking-wider flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-600" /> Fortalezas (F)
                    </h3>
                    <button
                      onClick={() => setDOFA({...dofa, strengths: [...dofa.strengths, 'Nueva fortaleza']})}
                      className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    {dofa.strengths.map((str, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={str}
                          onChange={e => {
                            const updated = [...dofa.strengths];
                            updated[idx] = e.target.value;
                            setDOFA({...dofa, strengths: updated});
                          }}
                          className="w-full bg-white border border-emerald-200 rounded-xl px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                        <button
                          onClick={() => setDOFA({...dofa, strengths: dofa.strengths.filter((_, i) => i !== idx)})}
                          className="text-red-500 hover:bg-red-50 p-1.5 rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Debilidades */}
                <div className="bg-rose-50/50 border border-rose-200 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-extrabold text-rose-800 uppercase tracking-wider flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-rose-600" /> Debilidades (D)
                    </h3>
                    <button
                      onClick={() => setDOFA({...dofa, weaknesses: [...dofa.weaknesses, 'Nueva debilidad']})}
                      className="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-lg transition"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    {dofa.weaknesses.map((weak, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={weak}
                          onChange={e => {
                            const updated = [...dofa.weaknesses];
                            updated[idx] = e.target.value;
                            setDOFA({...dofa, weaknesses: updated});
                          }}
                          className="w-full bg-white border border-rose-200 rounded-xl px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-rose-500"
                        />
                        <button
                          onClick={() => setDOFA({...dofa, weaknesses: dofa.weaknesses.filter((_, i) => i !== idx)})}
                          className="text-red-500 hover:bg-red-50 p-1.5 rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Oportunidades */}
                <div className="bg-blue-50/50 border border-blue-200 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-extrabold text-blue-800 uppercase tracking-wider flex items-center gap-2">
                      <Globe className="w-4 h-4 text-blue-600" /> Oportunidades (O)
                    </h3>
                    <button
                      onClick={() => setDOFA({...dofa, opportunities: [...dofa.opportunities, 'Nueva oportunidad']})}
                      className="px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    {dofa.opportunities.map((opp, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={opp}
                          onChange={e => {
                            const updated = [...dofa.opportunities];
                            updated[idx] = e.target.value;
                            setDOFA({...dofa, opportunities: updated});
                          }}
                          className="w-full bg-white border border-blue-200 rounded-xl px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        <button
                          onClick={() => setDOFA({...dofa, opportunities: dofa.opportunities.filter((_, i) => i !== idx)})}
                          className="text-red-500 hover:bg-red-50 p-1.5 rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenazas */}
                <div className="bg-amber-50/50 border border-amber-200 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-extrabold text-amber-800 uppercase tracking-wider flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600" /> Amenazas (A)
                    </h3>
                    <button
                      onClick={() => setDOFA({...dofa, threats: [...dofa.threats, 'Nueva amenaza']})}
                      className="px-2.5 py-1 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-lg transition"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    {dofa.threats.map((thr, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={thr}
                          onChange={e => {
                            const updated = [...dofa.threats];
                            updated[idx] = e.target.value;
                            setDOFA({...dofa, threats: updated});
                          }}
                          className="w-full bg-white border border-amber-200 rounded-xl px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-amber-500"
                        />
                        <button
                          onClick={() => setDOFA({...dofa, threats: dofa.threats.filter((_, i) => i !== idx)})}
                          className="text-red-500 hover:bg-red-50 p-1.5 rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 4.2 Matriz DOFA Cruzada (TOWS) */}
            <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'} rounded-2xl p-6 shadow-sm border`}>
              <div className={`pb-4 border-b ${isDarkMode ? 'border-slate-800' : 'border-slate-100'} mb-6`}>
                <h2 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-[#00324D]'} flex items-center gap-2`}>
                  <SenaLogoSmall />
                  Matriz DOFA Cruzada (Estrategias FO, DO, FA, DA)
                </h2>
                <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mt-0.5`}>
                  Formule estrategias cruzando factores internos y externos para orientar el plan de acción.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Estrategias FO */}
                <div className="bg-emerald-50/40 border border-emerald-200 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">
                      Estrategias FO (Maxi - Maxi)
                    </h3>
                    <button
                      onClick={() => setDOFA({...dofa, foStrategies: [...dofa.foStrategies, 'Nueva estrategia FO']})}
                      className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-600 mb-3">Usar fortalezas para aprovechar oportunidades.</p>
                  <div className="space-y-2">
                    {dofa.foStrategies.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={item}
                          onChange={e => {
                            const updated = [...dofa.foStrategies];
                            updated[idx] = e.target.value;
                            setDOFA({...dofa, foStrategies: updated});
                          }}
                          className="w-full bg-white border border-emerald-200 rounded-xl px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                        <button
                          onClick={() => setDOFA({...dofa, foStrategies: dofa.foStrategies.filter((_, i) => i !== idx)})}
                          className="text-red-500 hover:bg-red-50 p-1.5 rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Estrategias DO */}
                <div className="bg-blue-50/40 border border-blue-200 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs font-extrabold text-blue-800 uppercase tracking-wider">
                      Estrategias DO (Mini - Maxi)
                    </h3>
                    <button
                      onClick={() => setDOFA({...dofa, doStrategies: [...dofa.doStrategies, 'Nueva estrategia DO']})}
                      className="px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-600 mb-3">Superar debilidades aprovechando oportunidades.</p>
                  <div className="space-y-2">
                    {dofa.doStrategies.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={item}
                          onChange={e => {
                            const updated = [...dofa.doStrategies];
                            updated[idx] = e.target.value;
                            setDOFA({...dofa, doStrategies: updated});
                          }}
                          className="w-full bg-white border border-blue-200 rounded-xl px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        <button
                          onClick={() => setDOFA({...dofa, doStrategies: dofa.doStrategies.filter((_, i) => i !== idx)})}
                          className="text-red-500 hover:bg-red-50 p-1.5 rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Estrategias FA */}
                <div className="bg-amber-50/40 border border-amber-200 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs font-extrabold text-amber-800 uppercase tracking-wider">
                      Estrategias FA (Maxi - Mini)
                    </h3>
                    <button
                      onClick={() => setDOFA({...dofa, faStrategies: [...dofa.faStrategies, 'Nueva estrategia FA']})}
                      className="px-2.5 py-1 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-lg transition"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-600 mb-3">Usar fortalezas para evitar amenazas.</p>
                  <div className="space-y-2">
                    {dofa.faStrategies.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={item}
                          onChange={e => {
                            const updated = [...dofa.faStrategies];
                            updated[idx] = e.target.value;
                            setDOFA({...dofa, faStrategies: updated});
                          }}
                          className="w-full bg-white border border-amber-200 rounded-xl px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-amber-500"
                        />
                        <button
                          onClick={() => setDOFA({...dofa, faStrategies: dofa.faStrategies.filter((_, i) => i !== idx)})}
                          className="text-red-500 hover:bg-red-50 p-1.5 rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Estrategias DA */}
                <div className="bg-rose-50/40 border border-rose-200 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs font-extrabold text-rose-800 uppercase tracking-wider">
                      Estrategias DA (Mini - Mini)
                    </h3>
                    <button
                      onClick={() => setDOFA({...dofa, daStrategies: [...dofa.daStrategies, 'Nueva estrategia DA']})}
                      className="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-lg transition"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-600 mb-3">Reducir debilidades y evitar amenazas.</p>
                  <div className="space-y-2">
                    {dofa.daStrategies.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={item}
                          onChange={e => {
                            const updated = [...dofa.daStrategies];
                            updated[idx] = e.target.value;
                            setDOFA({...dofa, daStrategies: updated});
                          }}
                          className="w-full bg-white border border-rose-200 rounded-xl px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-rose-500"
                        />
                        <button
                          onClick={() => setDOFA({...dofa, daStrategies: dofa.daStrategies.filter((_, i) => i !== idx)})}
                          className="text-red-500 hover:bg-red-50 p-1.5 rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setActiveTab('externo')}
                className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 text-sm font-semibold rounded-xl transition"
              >
                &larr; Anterior
              </button>
              <button
                onClick={() => setActiveTab('acciones')}
                className="px-6 py-3 bg-[#00324D] hover:bg-[#002233] text-white text-sm font-semibold rounded-xl shadow transition"
              >
                Siguiente: Plan de Acción &rarr;
              </button>
            </div>
          </div>
        )}

        {/* TAB 5: PLAN DE ACCIÓN OPERATIVO */}
        {activeTab === 'acciones' && (
          <div className="space-y-6 animate-fadeIn">
            <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'} rounded-2xl p-6 shadow-sm border`}>
              <div className={`flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b ${isDarkMode ? 'border-slate-800' : 'border-slate-100'} gap-4 mb-6`}>
                <div>
                  <h2 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-[#00324D]'} flex items-center gap-2`}>
                    <SenaLogoSmall />
                    Plan de Acción Empresarial
                  </h2>
                  <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mt-0.5`}>
                    Defina las actividades operativas, responsables, fechas, recursos e indicadores (KPI) para implementar las estrategias.
                  </p>
                </div>
                <button
                  onClick={() => {
                    const newAct: ActionItem = {
                      id: Date.now().toString(),
                      strategyType: 'FO',
                      objective: 'Nuevo objetivo táctico',
                      action: 'Descripción de la acción concreta',
                      responsible: 'Cargo responsable',
                      startDate: '2026-03-01',
                      endDate: '2026-06-30',
                      resources: 'Recursos necesarios',
                      kpi: 'Indicador de cumplimiento',
                      status: 'Pendiente'
                    };
                    setActions([...actions, newAct]);
                  }}
                  className="px-3.5 py-2 bg-[#39A900] hover:bg-[#329600] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition shadow"
                >
                  <Plus className="w-4 h-4" /> Agregar Acción
                </button>
              </div>

              <div className="space-y-4">
                {actions.map((act, index) => (
                  <div key={act.id} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4 hover:border-slate-300 transition">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                      <div className="flex items-center gap-3">
                        <span className="bg-[#00324D] text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                          Acción #{index + 1}
                        </span>
                        <select
                          value={act.strategyType}
                          onChange={e => {
                            const updated = actions.map(a => a.id === act.id ? { ...a, strategyType: e.target.value as any } : a);
                            setActions(updated);
                          }}
                          className="bg-white border border-slate-300 text-xs font-semibold px-2 py-1 rounded-lg outline-none"
                        >
                          <option value="FO">Estrategia FO</option>
                          <option value="DO">Estrategia DO</option>
                          <option value="FA">Estrategia FA</option>
                          <option value="DA">Estrategia DA</option>
                        </select>
                        <select
                          value={act.status}
                          onChange={e => {
                            const updated = actions.map(a => a.id === act.id ? { ...a, status: e.target.value as any } : a);
                            setActions(updated);
                          }}
                          className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${
                            act.status === 'Completado' ? 'bg-emerald-100 text-emerald-800 border-emerald-200' :
                            act.status === 'En Proceso' ? 'bg-blue-100 text-blue-800 border-blue-200' :
                            'bg-amber-100 text-amber-800 border-amber-200'
                          }`}
                        >
                          <option value="Pendiente">Pendiente</option>
                          <option value="En Proceso">En Proceso</option>
                          <option value="Completado">Completado</option>
                        </select>
                      </div>
                      <button
                        onClick={() => setActions(actions.filter(a => a.id !== act.id))}
                        className="text-red-500 hover:bg-red-50 p-1.5 rounded-lg transition"
                        title="Eliminar acción"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">Objetivo Táctico / Propósito</label>
                        <input
                          type="text"
                          value={act.objective}
                          onChange={e => {
                            const updated = actions.map(a => a.id === act.id ? { ...a, objective: e.target.value } : a);
                            setActions(updated);
                          }}
                          className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-[#39A900]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">Acción Concreta (¿Qué se hará?)</label>
                        <input
                          type="text"
                          value={act.action}
                          onChange={e => {
                            const updated = actions.map(a => a.id === act.id ? { ...a, action: e.target.value } : a);
                            setActions(updated);
                          }}
                          className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-[#39A900]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">Responsable</label>
                        <input
                          type="text"
                          value={act.responsible}
                          onChange={e => {
                            const updated = actions.map(a => a.id === act.id ? { ...a, responsible: e.target.value } : a);
                            setActions(updated);
                          }}
                          className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-[#39A900]"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">Fecha Inicio</label>
                          <input
                            type="date"
                            value={act.startDate}
                            onChange={e => {
                              const updated = actions.map(a => a.id === act.id ? { ...a, startDate: e.target.value } : a);
                              setActions(updated);
                            }}
                            className="w-full bg-white border border-slate-300 rounded-xl px-2 py-2 text-xs outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">Fecha Fin</label>
                          <input
                            type="date"
                            value={act.endDate}
                            onChange={e => {
                              const updated = actions.map(a => a.id === act.id ? { ...a, endDate: e.target.value } : a);
                              setActions(updated);
                            }}
                            className="w-full bg-white border border-slate-300 rounded-xl px-2 py-2 text-xs outline-none"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">Recursos Necesarios</label>
                        <input
                          type="text"
                          value={act.resources}
                          onChange={e => {
                            const updated = actions.map(a => a.id === act.id ? { ...a, resources: e.target.value } : a);
                            setActions(updated);
                          }}
                          className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">Indicador de Éxito (KPI)</label>
                        <input
                          type="text"
                          value={act.kpi}
                          onChange={e => {
                            const updated = actions.map(a => a.id === act.id ? { ...a, kpi: e.target.value } : a);
                            setActions(updated);
                          }}
                          className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs outline-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setActiveTab('dofa')}
                className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 text-sm font-semibold rounded-xl transition"
              >
                &larr; Anterior
              </button>
              <button
                onClick={() => setActiveTab('tablero')}
                className="px-6 py-3 bg-[#00324D] hover:bg-[#002233] text-white text-sm font-semibold rounded-xl shadow transition"
              >
                Siguiente: Tablero & Análisis IA &rarr;
              </button>
            </div>
          </div>
        )}

        {/* TAB 6: TABLERO DE RESULTADOS & IA */}
        {activeTab === 'tablero' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Resumen de Puntajes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-500">Puntaje MEFI (Interno)</p>
                  <h3 className="text-3xl font-extrabold text-[#00324D] mt-1">{totalMefiScore.toFixed(2)}</h3>
                  <span className="text-[11px] text-emerald-600 font-semibold mt-1 inline-block">Meta: &gt; 2.50</span>
                </div>
                <div className="p-3 bg-emerald-50 text-[#39A900] rounded-2xl">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-500">Puntaje MEFE (Externo)</p>
                  <h3 className="text-3xl font-extrabold text-[#00324D] mt-1">{totalMefeScore.toFixed(2)}</h3>
                  <span className="text-[11px] text-blue-600 font-semibold mt-1 inline-block">Meta: &gt; 2.50</span>
                </div>
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                  <Globe className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-500">Acciones Planificadas</p>
                  <h3 className="text-3xl font-extrabold text-[#00324D] mt-1">{actions.length}</h3>
                  <span className="text-[11px] text-purple-600 font-semibold mt-1 inline-block">
                    {actions.filter(a => a.status === 'Completado').length} completadas
                  </span>
                </div>
                <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl">
                  <CheckSquare className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-500">Estrategias DOFA</p>
                  <h3 className="text-3xl font-extrabold text-[#00324D] mt-1">
                    {dofa.foStrategies.length + dofa.doStrategies.length + dofa.faStrategies.length + dofa.daStrategies.length}
                  </h3>
                  <span className="text-[11px] text-amber-600 font-semibold mt-1 inline-block">Cruzadas (TOWS)</span>
                </div>
                <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl">
                  <Grid className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* PCI Gráfico de Barras por Categoría */}
            <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'} rounded-2xl p-6 shadow-sm border`}>
              <h3 className={`text-base font-bold ${isDarkMode ? 'text-white' : 'text-[#00324D]'} mb-4 flex items-center gap-2`}>
                <SenaLogoSmall /> Perfil de Capacidad Interna (PCI) - Promedios por Área
              </h3>
              <div className="space-y-4">
                {pciSummary.map(item => (
                  <div key={item.category}>
                    <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                      <span>{item.category}</span>
                      <span>Capacidad Promedio: {item.avgCapacity} / 3.0</span>
                    </div>
                    <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                      <div
                        className="bg-[#39A900] h-full rounded-full transition-all duration-500"
                        style={{ width: `${(item.avgCapacity / 3) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Strategic Advisor Section */}
            <div className="bg-gradient-to-br from-[#00324D] to-[#002233] text-white rounded-2xl p-6 shadow-xl border border-slate-700">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 text-[#39A900] text-xs font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-4 h-4" /> Asistente de Inteligencia Artificial SENA
                  </div>
                  <h3 className="text-xl font-extrabold text-white">
                    Consultor Estratégico Experto (Gemini AI)
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Analiza automáticamente el perfil, PCI, MEFI, PESTEL, MEFE y DOFA de <span className="text-[#39A900] font-semibold">{enterprise.name}</span> para generar un diagnóstico experto.
                  </p>
                </div>
                <button
                  onClick={handleGenerateAIAnalysis}
                  disabled={isAnalyzing}
                  className="px-5 py-3 bg-[#39A900] hover:bg-[#329600] disabled:opacity-50 text-white text-xs font-bold rounded-xl shadow-lg transition flex items-center justify-center gap-2 shrink-0"
                >
                  {isAnalyzing ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" /> Analizando matrices...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" /> Generar Diagnóstico con IA
                    </>
                  )}
                </button>
              </div>

              {aiError && (
                <div className="mt-4 p-4 bg-rose-500/20 border border-rose-500/40 rounded-xl text-xs text-rose-200 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{aiError}</span>
                </div>
              )}

              {aiAnalysis ? (
                <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-6 text-sm text-slate-100 leading-relaxed space-y-4 max-h-[600px] overflow-y-auto">
                  <div className="whitespace-pre-wrap font-sans">{aiAnalysis}</div>
                </div>
              ) : (
                <div className="mt-6 text-center py-10 text-slate-400 text-xs">
                  Haz clic en <span className="text-[#39A900] font-semibold">"Generar Diagnóstico con IA"</span> para obtener el informe estratégico detallado y recomendaciones personalizadas para la empresa.
                </div>
              )}
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setActiveTab('acciones')}
                className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 text-sm font-semibold rounded-xl transition"
              >
                &larr; Anterior
              </button>
              <button
                onClick={() => window.print()}
                className="px-6 py-3 bg-[#39A900] hover:bg-[#329600] text-white text-sm font-semibold rounded-xl shadow transition flex items-center gap-2"
              >
                <Printer className="w-4 h-4" /> Imprimir Reporte Completo
              </button>
            </div>
          </div>
        )}

      </main>

      {/* Floating Video Manual Window */}
      {isVideoModalOpen && (
        <div
          className={`print:hidden ${
            videoWindowMode === 'mini'
              ? 'fixed bottom-5 right-5 z-50 w-[340px] sm:w-[420px]'
              : 'fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6'
          }`}
          role="dialog"
          aria-modal={videoWindowMode !== 'mini'}
          aria-label="Video Manual de la Plataforma"
        >
          <div
            ref={videoContainerRef}
            className={`flex flex-col overflow-hidden rounded-2xl shadow-2xl border transition-all duration-300 ${
              isDarkMode
                ? 'bg-slate-900 border-slate-700 text-slate-100'
                : 'bg-white border-slate-200 text-slate-800'
            } ${
              videoWindowMode === 'mini'
                ? 'w-full shadow-2xl ring-2 ring-[#39A900]/40'
                : videoWindowMode === 'expanded'
                ? 'w-full max-w-6xl max-h-[94vh]'
                : 'w-full max-w-4xl max-h-[90vh]'
            }`}
          >
            {/* Floating Window Header */}
            <div className="bg-[#00324D] text-white px-4 py-3 flex items-center justify-between gap-3 border-b border-white/10">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="p-1.5 bg-[#39A900]/20 rounded-lg border border-[#39A900]/40 shrink-0">
                  <PlayCircle className="w-4 h-4 text-[#39A900]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold truncate">
                    Video Manual de la Plataforma SENA
                  </h3>
                  {videoWindowMode !== 'mini' && (
                    <p className="text-[11px] text-slate-300 truncate">
                      Guía audiovisual: Plan de Acción y Diagnóstico Estratégico Empresarial
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() =>
                    setVideoWindowMode(videoWindowMode === 'mini' ? 'normal' : 'mini')
                  }
                  className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition text-slate-200 hover:text-white"
                  title={
                    videoWindowMode === 'mini'
                      ? 'Restaurar ventana flotante'
                      : 'Minimizar a ventana flotante lateral (PiP)'
                  }
                >
                  <PictureInPicture2 className="w-4 h-4" />
                </button>
                {videoWindowMode !== 'mini' && (
                  <button
                    onClick={() =>
                      setVideoWindowMode(videoWindowMode === 'expanded' ? 'normal' : 'expanded')
                    }
                    className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition text-slate-200 hover:text-white"
                    title={videoWindowMode === 'expanded' ? 'Tamaño normal' : 'Ampliar ventana'}
                  >
                    {videoWindowMode === 'expanded' ? (
                      <Minimize2 className="w-4 h-4" />
                    ) : (
                      <Maximize2 className="w-4 h-4" />
                    )}
                  </button>
                )}
                <button
                  onClick={handleToggleVideoFullscreen}
                  className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition text-slate-200 hover:text-white"
                  title="Pantalla completa"
                >
                  <MonitorPlay className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="p-1.5 bg-rose-500/20 hover:bg-rose-600 rounded-lg transition text-rose-200 hover:text-white"
                  title="Cerrar ventana (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Video Player Area with Native Controls */}
            <div className="relative w-full aspect-video bg-black">
              <iframe
                key={`${videoPlayerSource}-${videoReloadKey}`}
                src={getVideoIframeSrc()}
                title="Video Manual de la Plataforma SENA"
                className="w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media; clipboard-write"
                allowFullScreen
              />
            </div>

            {/* Video Controls Bar */}
            <div
              className={`px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs border-t ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-300'
                  : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => {
                    setVideoAutoplay(true);
                    setVideoReloadKey(prev => prev + 1);
                  }}
                  className="px-2.5 py-1.5 bg-[#39A900] hover:bg-[#329600] text-white font-semibold rounded-lg flex items-center gap-1.5 transition shadow-sm"
                  title="Reiniciar o recargar reproducción del video"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  {videoWindowMode === 'mini' ? 'Reiniciar' : 'Reiniciar / Reproducir'}
                </button>

                {videoWindowMode !== 'mini' && (
                  <div
                    className={`flex rounded-lg p-0.5 border ${
                      isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
                    }`}
                  >
                    <button
                      onClick={() => {
                        setVideoPlayerSource('preview');
                        setVideoReloadKey(prev => prev + 1);
                      }}
                      className={`px-2.5 py-1 rounded-md font-semibold transition ${
                        videoPlayerSource === 'preview'
                          ? 'bg-[#00324D] text-white'
                          : isDarkMode
                          ? 'text-slate-300 hover:text-white'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Reproductor con Controles
                    </button>
                    <button
                      onClick={() => {
                        setVideoPlayerSource('vids');
                        setVideoReloadKey(prev => prev + 1);
                      }}
                      className={`px-2.5 py-1 rounded-md font-semibold transition ${
                        videoPlayerSource === 'vids'
                          ? 'bg-[#00324D] text-white'
                          : isDarkMode
                          ? 'text-slate-300 hover:text-white'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Vista Google Vids
                    </button>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={VIDEO_MANUAL_SHARE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-2.5 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 border transition ${
                    isDarkMode
                      ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-amber-300'
                      : 'bg-white hover:bg-slate-100 border-slate-300 text-[#00324D]'
                  }`}
                  title="Abrir el enlace original en Google Vids"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  {videoWindowMode === 'mini' ? 'Abrir' : 'Abrir en Google Vids'}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-12 print:hidden">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-slate-500 space-y-1">
          <p className="font-semibold text-[#00324D]">Servicio Nacional de Aprendizaje - SENA | Formación Profesional Integral</p>
          <p>Herramienta prototipo para formulación de Planes de Acción Empresarial y Diagnóstico Estratégico.</p>
        </div>
      </footer>
    </div>
  );
}
