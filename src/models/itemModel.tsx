// To parse this data:
//
//   import { Convert, Item } from "./file";
//
//   const item = Convert.toItem(json);

export interface ShoppingItemModel {
  id: string;
  name: string;
  bought: boolean;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toItemModel(json: string): ShoppingItemModel {
    return JSON.parse(json);
  }

  public static itemModelToJson(value: ShoppingItemModel): string {
    return JSON.stringify(value);
  }
}
