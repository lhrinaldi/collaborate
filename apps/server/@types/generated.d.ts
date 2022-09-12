/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/api/organizations": {
    /** Returns a list of organizations or an empty list */
    get: {
      responses: {
        /** Default Response */
        200: {
          content: {
            "application/json": components["schemas"]["Organization"][];
          };
        };
      };
    };
  };
}

export interface components {
  schemas: {
    Organization: {
      id: string;
      createdAt: string;
      updatedAt?: string;
      name: string;
    };
  };
}

export interface operations {}

export interface external {}