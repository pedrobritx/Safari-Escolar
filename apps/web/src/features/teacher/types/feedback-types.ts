export type FeedbackCategory = 'positive' | 'improvement';

export interface FeedbackTemplate {
  id: string;
  label: string;
  icon: string;
  points: number;
  category: FeedbackCategory;
}

export interface FeedbackEvent {
  id: string;
  studentId: number;
  templateId: string;
  timestamp: string;
  note?: string;
  points: number;
}
