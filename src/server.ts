import "reflect-metadata";
import {createApp} from "./app";
import {createConnection} from "typeorm";

const port = process.env.NODE_PORT || 3000;
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => console.log('Module disposed. '));
}
createConnection().then(async connection => {
    createApp().then(app => {
       app.listen(port, () => {
           console.log(`Listening on PORT: ${port}`);
       });
    });
}).catch(reason => console.error("TypeORM connection error: ", reason));
