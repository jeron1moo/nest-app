import { AbstractDto } from '../dtos';

export abstract class AbstractEntity<T extends AbstractDto = AbstractDto> {
  id: number;
  uuid: string;

  abstract dtoClass: new (entity: AbstractEntity, options?: any) => T;
}
