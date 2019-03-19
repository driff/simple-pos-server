import {createApp} from "./app";

const port = process.env.NODE_PORT || 3000;

createApp().then(app => {
   app.listen(port, () => {
       console.log(`Listening on PORT: ${port}`);
   });
});
