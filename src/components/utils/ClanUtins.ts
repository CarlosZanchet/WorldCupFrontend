import { Cla } from "../../entities/Cla";

export const clans: Cla[] = [
  new Cla('id', 'logo', 'Cla Teste', new Date(), 'private').toJson(),
  new Cla('id', 'logo', 'Cla Bolao', new Date(), 'public').toJson(),
  new Cla('id', 'logo', 'Cla Novo Time', new Date(), 'private').toJson(),
  new Cla('id', 'logo', 'Cla Meu Bolao', new Date(), 'private').toJson(),
  new Cla('id', 'logo', 'Cla Teste 2', new Date(), 'public').toJson(),
  new Cla('id', 'logo', 'Cla Seleça', new Date(), 'private').toJson(),
]