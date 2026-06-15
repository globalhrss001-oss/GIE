export interface Service {
  id: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'motorized-valve',
    title: 'Motorized Valve Integration & Servicing',
    description:
      'Integration, overhaul, and on-site servicing of motorized valves including large-format units up to 24 inches.',
  },
  {
    id: 'control-valve',
    title: 'Control Valve Servicing & Calibration',
    description:
      'Inspection, repair, calibration, and in situ servicing of control valves to restore precise flow and pressure regulation.',
  },
  {
    id: 'safety-valve',
    title: 'Safety Valve Calibration, Overhaul & Live Testing',
    description:
      'Safety valve calibration, overhaul servicing, live testing, and electric valve testing including HRSG boiler applications.',
  },
  {
    id: 'actuators',
    title: 'Actuators & Electrical Actuator Services',
    description: 'Servicing of pneumatic, electric, and hydraulic actuators.',
  },
  {
    id: 'pump-compressor',
    title: 'Pump & Compressor',
    description: 'Maintenance and servicing of pumps and diaphragm pump.',
  },
  {
    id: 'in-situ-machining',
    title: 'Flange Management & In Situ Machining',
    description: 'On-site flange machining, lapping, and repairing.',
  },
  {
    id: 'bolt-torquing',
    title: 'Bolt Torquing & Tensioning',
    description:
      'Controlled bolting services including torquing and tensioning for critical flange and equipment connections.',
  },
  {
    id: 'n2-testing',
    title: 'N₂ Testing & Flushing',
    description:
      'Nitrogen testing and flushing services for pipeline and system integrity verification.',
  },
  {
    id: 'field-instrument',
    title: 'Field Instrument Calibration',
    description:
      'Calibration and servicing of field instruments for pressure, temperature, and level measurement.',
  },
  {
    id: 'valve-testing-class',
    title: 'Valve Testing & 3rd Party Class Approval',
    description:
      "Valve pressure testing, modification, components machining, and class test arrangements with ABS, DNV, and Lloyd's.",
  },
  {
    id: 'valves-management',
    title: 'Total Valve Management',
    description:
      'Comprehensive valve management programs covering inventory, maintenance planning, and lifecycle support.',
  },
  {
    id: 'training',
    title: 'Control & Safety Valve Training',
    description:
      'Technical training on fundamental maintenance, testing with standard compliance, and total valve management certification.',
  },
  {
    id: 'commissioning',
    title: 'On-Site Commissioning',
    description:
      'Field commissioning and valve integration services at client facilities across Asia Pacific and the Middle East.',
  },
];
