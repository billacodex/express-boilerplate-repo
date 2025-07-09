import { transformToSnakeCase, transformToCamelCase } from "../../services/entity.helper";


export abstract class BaseEntity<EntityType> {
  /**
   * Initializes the entity with partial data.
   * This is a generic constructor that assigns all properties from the `data` object.
   * @param data A partial object of the entity type.
   */
  constructor(data: Partial<EntityType> = {}) {
    Object.assign(this, data);
  }

  /**
   * Transforms the entity's properties to snake_case for database persistence.
   * @returns An object with snake_case keys.
   */
  toDatabaseObject(): unknown {
    return transformToSnakeCase<this>({ ...this });
  }

  /**
   * An alias for toDatabaseObject.
   * @returns An object with snake_case keys.
   */
  toTransformedObject(): unknown {
    return this.toDatabaseObject();
  }

  /**
   * A static factory method to create and populate an entity from a request DTO.
   * It maps snake_case properties from the DTO to the entity's camelCase properties.
   *
   * 'this' is polymorphic, referring to the constructor of the class that extends BaseEntity.
   *
   * @param req The request DTO object.
   * @returns A new, partially populated instance of the entity.
   */
  static fromRequest<E extends BaseEntity<unknown>>(
    this: new (data: Partial<E>) => E,
    dto: object,
  ): E {
    const camelCaseData = transformToCamelCase<Partial<E>>(dto);
    return new this(camelCaseData);
  }
}
