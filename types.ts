export type Language = 'en' | 'zh';

export type ContentString = {
  en: string;
  zh: string;
};

export interface NavItem {
  id: string;
  label: ContentString;
}

export interface TimelineEvent {
  year: string;
  title: ContentString;
  description: ContentString;
}

export interface HeritageForm {
  title: ContentString;
  description: ContentString;
  imageUrl: string;
  type: string;
}

export enum SectionId {
  HOME = 'home',
  LEGEND = 'legend',
  CONTEXT = 'context',
  HERITAGE = 'heritage',
  CONTEMPORARY = 'contemporary',
  RESOURCES = 'resources'
}