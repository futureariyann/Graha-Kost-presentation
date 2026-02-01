export enum SlideLayout {
  TITLE = 'TITLE',
  SPLIT = 'SPLIT',
  COLUMNS = 'COLUMNS',
  PAIN_POINTS = 'PAIN_POINTS',
  FEATURES = 'FEATURES',
  TECH_STACK = 'TECH_STACK',
  ROI = 'ROI',
  CHECKLIST = 'CHECKLIST',
  TIMELINE = 'TIMELINE',
  PRICING = 'PRICING',
  COMPARISON = 'COMPARISON',
  CTA = 'CTA',
  STANDARD = 'STANDARD'
}

export interface SlideData {
  id: number;
  layout: SlideLayout;
  title: string;
  subtitle?: string;
  content?: string;
  highlights?: string[]; // Used for bullet points
  stats?: { label: string; value: string; desc?: string }[];
  visualPrompt?: string; // Description of the visual
  footer?: string;
  extra?: any; // For flexible data like charts or pricing
}
