import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import mongoose from "mongoose";

@ValidatorConstraint({ async: false })
export class IsObjectIdConstraint implements ValidatorConstraintInterface {
  validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> | boolean {
    const isValidObjectId = mongoose.Types.ObjectId.isValid(value); 
    return isValidObjectId;
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return 'String is not a valid ObjectId';
  }
}

export function IsObjectId(validationOptions?: ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsObjectIdConstraint
    });
  }
}