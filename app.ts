import Koa, { Next, Context } from "koa";
const app = new Koa();
import json from "koa-json";
// const onerror = require("koa-onerror");
import bodyparser from "koa-bodyparser";
import logger from "koa-logger";
import koa_static from "koa-static";
import cors from "koa-cors";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "./src/conf/jwt";

import index from "./src/routes/index";
import login from "./src/routes/login";
import user from "./src/routes/user";

// error handler
// onerror(app);

// middlewares
app.use(
  cors({
    origin: function (ctx) {
      return "*";
    },
    maxAge: 5,
    credentials: true,
  })
);

app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(logger());
app.use(koa_static(__dirname + "/public"));

// logger
app.use(async (ctx: Context, next: Next) => {
  const start = new Date();
  await next();
  const ms = new Date().valueOf() - start.valueOf();
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// 添加临时ctx，以供routers向controller传递ctx
app.use((ctx: Context, next: Next) => {
  (global as any).tmp_ctx = null
  next()
})

app.use(login.routes());
app.use(login.allowedMethods());

app.use(async (ctx: Context, next: Next) => {
  const token = ctx.header.authorization;
  if (token) {
    const decode = jwt.verify(token.split(" ")[1], SECRET_KEY);
    ctx.userInfo = decode;
  }
  next();
});

// routes
app.use(index.routes());
app.use(index.allowedMethods());
app.use(user.routes());
app.use(user.allowedMethods());

// error-handling
app.on("error", (err: Error, ctx: Context) => {
  console.error("server error", err, ctx);
});

export default app;
