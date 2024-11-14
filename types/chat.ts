export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatHistory {
  messages: Message[];
} 