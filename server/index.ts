import { createServer } from "http";
import next from "next";
import { parse } from "url";

// tslint:disable-next-line
const pathMatch = require("path-match");
// @ts-ignore
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = true;
const app = next({ dev });
const handle = app.getRequestHandler();
const route = pathMatch();
const matches = [
  { route: route("/workshop/:id/edit"), page: "/workshop-edit" },
  { route: route("/workshop/new"), page: "/workshop-new" },
  { route: route("/workshop/:id"), page: "/workshop" },
  { route: route("/cook/:id"), page: "/cook" },
];

app.prepare().then(() => {
  createServer((req, res) => {
    // @ts-ignore
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;
    let hasMatch = false;

    for (const match of matches) {
      const params = match.route(pathname);
      if (params) {
        app.render(req, res, match.page, Object.assign(params, query));
        hasMatch = true;
        break;
      }
    }
    if (!hasMatch) {
      handle(req, res, parsedUrl);
    }
    // @ts-ignore
  }).listen(port, (err: any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
