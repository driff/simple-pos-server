import * as Router from "koa-router";
import {Context} from "koa";
import {createUser, getUsers} from "../controllers/user";

export const Api: Router = new Router({prefix: '/api'});
Api.get('/', (ctx: Context) => {
    ctx.status = 200;
    ctx.body = {msg: 'success'};
});

Api.get('/user', createUser);
Api.get('/users', getUsers);
