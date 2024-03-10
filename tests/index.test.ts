import download from '../index';
import * as fs from "fs";

async function test() {
    await download('https://github.com/mrdoob/three.js/tree/dev/docs/manual', "./tests/test", ["Creating-a-scene.html", "Creating-text.html"]);
    await fs.promises.rm("./tests/test", { recursive: true });
}
test();