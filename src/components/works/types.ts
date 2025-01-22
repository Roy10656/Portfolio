export interface Work {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  highlights: string[];
  link: string;
  award?: string;
}