import "https://cdn.jsdelivr.net/npm/comlink/dist/umd/comlink.js";
import { getDataFromAPI } from "./getDataFromAPI";
/** 因为是 worker 中，所以是 globalThis */
(globalThis as any).Comlink.expose(getDataFromAPI);
