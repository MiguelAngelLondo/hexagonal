import { user } from "./user";

export interface userRepository {
   create(id: user): Promise < void >;
   getAll(): Promise < user[] >;
}