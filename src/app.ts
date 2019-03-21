import "reflect-metadata";
import * as Koa from "koa";
import * as cors from "@koa/cors";
import * as bodyParser from "koa-bodyparser";
import * as Router from "koa-router";
import {Api} from "./routes/api";

export const createApp = async (): Promise<Koa> => {
    // cors
    const corsMiddleware = cors({
        allowHeaders: ["Content-Type"],
        credentials: true
    });
    const app = new Koa();
    app.use(async (ctx, next) => {
        try {
            await next();
        } catch (err) {
            // tslint:disable-next-line:no-console
            console.log(err);
            const errorCode = (err.isBoom && err.data && err.data.code) ? err.data.code : "INTERNAL_ERROR";
            ctx.status = (err.isBoom && err.output && err.output.statusCode) ?
                err.output.statusCode : err.status || 500;
            ctx.body = {code: errorCode, message: err.message};
        }
    });

    app.use(bodyParser());
    // root router
    const rootRouter = new Router();
    rootRouter.use(Api.routes());

    // health check
    rootRouter.get("/", async ctx => {
        ctx.body = "running healthy!";
    });

    rootRouter.all("*", corsMiddleware);
    app.use(rootRouter.routes());
    return app;
};

// export default createApp;
