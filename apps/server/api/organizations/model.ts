import { Type } from "@sinclair/typebox";
import { BaseModel } from "../model";

export class OrganizationModel extends BaseModel {
  static tableName = "organizations";

  static get jsonSchema() {
    return Type.Intersect([
      super.jsonSchema,
      Type.Object({
        name: Type.String(),
      }),
    ]);
  }

  name!: string;
}
