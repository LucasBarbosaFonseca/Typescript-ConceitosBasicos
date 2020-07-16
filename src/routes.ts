import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWord(request: Request, response: Response) {
  const user = createUser({
    name: "Lucas Barbosa Fonseca",
    email: "lufonsecabarbosa@hotmail.com",
    password: "12345",
    techs: ["NodeJs", "ReactJs", "React Native"],
  });

  return response.json(user);
}
