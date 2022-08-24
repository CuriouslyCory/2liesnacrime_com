// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { episodeRouter } from "./episode";
import { authRouter } from "./auth";
import { buzzsproutRouter } from "./buzzsprout";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("episode.", episodeRouter)
  .merge("buzzsprout.", buzzsproutRouter)
  .merge("auth.", authRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
