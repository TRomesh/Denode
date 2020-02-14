import { readJson, writeJson } from "https://deno.land/std/fs/mod.ts";
import { Application, Router } from "https://deno.land/x/oak/mod.ts";
// declear our oak server app
const app = new Application();
// declear our router
const router = new Router();

//defining routes
router
    .get("/", ({ request, response, params }) => {
        response.body = "Hello world!";
    })
    .get("/getdata", async ({ request, response, params }) => {
        const data = await readJson(`./data.json`);
        response.body = data;
    }).post("/postdata", async ({ request, response, params }) => {
        const data = await writeJson(`data.json`, { message: "bar" }, { spaces: 2 });
        response.body = 'asasa';
    });


app.use(router.routes());
app.use(router.allowedMethods())

//listening to post 8000
app.listen({ port: 8000 });