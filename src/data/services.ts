export interface Service {
  id: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'motorized-valve',
    title: 'Motorized Valve Overhaul & Integration',
    description:
      'Complete overhaul, integration, and commissioning of motorized valves for industrial process systems.',
  },
  {
    id: 'control-valve',
    title: 'Control Valve Servicing',
    description:
      'Inspection, repair, and calibration of control valves to restore precise flow and pressure regulation.',
  },
  {
    id: 'safety-valve',
    title: 'Safety Valve Calibration & Live Testing',
    description:
      'Safety valve calibration, overhaul servicing, and live testing to meet operational and regulatory standards.',
  },
  {
    id: 'actuators',
    title: 'Actuators Servicing',
    description:
      'Servicing of pneumatic, electric, and hydraulic actuators for reliable valve and equipment operation.',
  },
  {
    id: 'pump-compressor',
    title: 'Pump & Compressor',
    description:
      'Maintenance and servicing of pumps and compressors to support continuous plant operations.',
  },
  {
    id: 'in-situ-machining',
    title: 'In Situ Machining & Lapping',
    description:
      'On-site machining and lapping services including flange repairing without removing equipment.',
  },
  {
    id: 'bolt-torquing',
    title: 'Bolt Torquing, Tensioning & Hot Bolting',
    description:
      'Controlled bolting services including torqueing, tensioning, and hot bolting for critical connections.',
  },
  {
    id: 'n2-testing',
    title: 'N₂ Testing & Flushing',
    description:
      'Nitrogen testing and flushing services for pipeline and system integrity verification.',
  },
  {
    id: 'field-instrument',
    title: 'Field Instrument Calibration & Servicing',
    description:
      'Calibration and servicing of field instruments to ensure accurate measurement and control.',
  },
  {
    id: 'valves-management',
    title: 'Valves Management',
    description:
      'Comprehensive valves management programs covering inventory, maintenance planning, and lifecycle support.',
  },
  {
    id: 'training',
    title: 'Training, Testing & Certification',
    description:
      'Technical training, testing, and certification programs for valves, actuators, and field equipment.',
  },
];
