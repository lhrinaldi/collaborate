import { Type } from "@sinclair/typebox";
import { Model } from "objection";
import {
  AddressModel,
  EmailModel,
  PhoneModel,
} from "../contact-mechanisms/model";
import { TimestampedModel } from "../model";

export class OrganizationModel extends TimestampedModel {
  static tableName = "organizations";

  static get jsonSchema() {
    return Type.Intersect(
      [
        super.jsonSchema,
        Type.Object({
          name: Type.String(),
        }),
      ],
      { $id: "OrganizationInput" }
    );
  }

  static get outputSchema() {
    return Type.Intersect(
      [
        super.outputSchema,
        Type.Object({
          name: Type.String(),
        }),
      ],
      { $id: "OrganizationModel" }
    );
  }

  static relationMappings = {
    addresses: {
      relation: Model.ManyToManyRelation,
      modelClass: AddressModel,
      join: {
        from: "organizations.id",
        through: {
          from: "contact_mechanisms.organization_id",
          to: "contact_mechanisms.id",
        },
        to: "contact_mechanisms_addresses.contact_mechanism_id",
      },
    },
    emails: {
      relation: Model.ManyToManyRelation,
      modelClass: EmailModel,
      join: {
        from: "organizations.id",
        through: {
          from: "contact_mechanisms.organization_id",
          to: "contact_mechanisms.id",
        },
        to: "contact_mechanisms_emails.contact_mechanism_id",
      },
    },
    phones: {
      relation: Model.ManyToManyRelation,
      modelClass: PhoneModel,
      join: {
        from: "organizations.id",
        through: {
          from: "contact_mechanisms.organization_id",
          to: "contact_mechanisms.id",
        },
        to: "contact_mechanisms_phones.contact_mechanism_id",
      },
    },
  };

  name!: string;

  addresses?: AddressModel[];
  emails?: EmailModel[];
  phones?: PhoneModel[];
}
