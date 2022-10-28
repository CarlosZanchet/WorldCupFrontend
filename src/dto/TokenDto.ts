import { User } from "../entities/User";

export interface TokenDto {
  token: string;
  user: User;
}