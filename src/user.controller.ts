import { Get } from '@nestjs/common';

export class UserController {

    constructor(){}

    @Get()
    getUser() {
        console.log("teste desafio aula 05");
        return "user";
    }

}