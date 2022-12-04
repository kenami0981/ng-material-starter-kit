import {AddressModel} from "./address.model";
import {NamesModel} from "./names.model";

export interface AddUserModel {
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly name: NamesModel;
  readonly address: AddressModel[];
  readonly phone: string;
}
