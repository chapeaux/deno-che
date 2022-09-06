import { Application } from "https://deno.land/x/oak/mod.ts";
const app = new Application();
app.use(async (ctx) => {
  console.log(Deno.cwd()+'/public');
  await ctx.send({
    root: Deno.cwd()+'/public',
    index: 'index.html'
  });
});
await app.listen({ port: 8080 });

