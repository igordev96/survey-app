export interface IQuestion {
  id: number;
  question: string;
  image_url: string;
  thumb_url: string;
  published_at: string;
  choices: Array<IChoice>;
}

export interface IChoice {
  choice: string;
  votes: number;
}
