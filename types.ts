export type Language = 'en' | 'zh';

export type ContentString = {
  en: string;
  zh: string;
};

export interface NavItem {
  id: SectionId;
  label: ContentString;
}

export enum SectionId {
  HOME = 'home',
  LEGEND = 'legend',
  HISTORY = 'history',
  HERITAGE = 'heritage',
  MODERN = 'modern',
  RESOURCES = 'resources'
}