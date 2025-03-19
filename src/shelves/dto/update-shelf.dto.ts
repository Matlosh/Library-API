import { Shelf } from "../interfaces/shelf.interface"

export class UpdateShelfDto implements Shelf {
  id: number;
  libraryId: number;
  name: string;
  isDefault: boolean;
}