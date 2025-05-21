import { Library } from "../interfaces/library.interface";

export class CreateLibraryDto implements Library {
	userId: number;
	name: string;
	isPublic: boolean;
}