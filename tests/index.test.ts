import download from '../index';
import * as fs from "fs";

async function test() {
    const stats = await download('https://github.com/mrdoob/three.js/tree/dev/docs/manual', "./tests/test");
    if (stats.success) {
        console.log("Success");
    } else {
        console.log(stats.error);
    }
    await fs.promises.rm("./tests/test", { recursive: true });
}
test();