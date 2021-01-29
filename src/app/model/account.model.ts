export interface Account {
  id?: string;
  title: string;
  value: string | number;
  pay_day: number;
  payment_month: string;
  year: number;
  paid: boolean;
}
