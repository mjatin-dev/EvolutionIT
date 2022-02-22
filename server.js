import { http } from "firebase-functions";
import next from "next";

const isDev = process.env.NODE_ENV !== "production";

const server = next({
  dev: isDev,
  conf: { distDir: ".next" },
});

const nextJsHandle = server.getRequestHandler();
//we will create our firebase function

exports.nextServer2 = https.onRequest((req, res) => {
  return server.prepare().then(() => {
    return nextJsHandle(req, res);
  });
});
