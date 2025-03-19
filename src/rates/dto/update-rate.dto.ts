import { Rate } from '../interfaces/rate.interface';

export class UpdateRateDto implements Rate {
  id: number;
  userId: number;
  bookId: number;
  score: number;
  comment: string;
}
