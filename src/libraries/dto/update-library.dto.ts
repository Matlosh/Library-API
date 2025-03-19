import { Library } from "../interfaces/library.interface";

export class UpdateLibraryDto implements Library {
  id: number;
  userId: number;
  name: string;
  isPublic: boolean;
}