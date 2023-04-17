/**
 * コーヒー銘柄のレスポンス
 */
export type CoffeeResponse = {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  image: string;
}[];
