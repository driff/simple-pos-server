import {Context} from "koa";
import {User} from "../entity/user";

export async function createUser(ctx: Context){
    console.log('create user');
        const user: User = new User();
        user.firstName = "Johan";
        user.lastName = "Garcia";
        user.password = "1234";
        user.username = "johnjgp";
        await user.save().catch(reason => {
            console.error(reason);
            ctx.status = 420;
            ctx.message = reason;
        });
        ctx.status = 200;
        return ctx.body = user;
}

export async function getUsers(ctx: Context) {
    ctx.status = 200;
    return ctx.body = await User.find().catch(reason => {
        console.error(reason);
        ctx.status = 423;
        ctx.message = reason;
    });
}
