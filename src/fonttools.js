import { subset } from "@web-alchemy/fonttools";
import fs from "fs";
import path from "path";
import CONFIG_JSON from "../config.json" with { type: "json" };



export const FONT_TOOLS_EX = async (config) => {
    const START_TIME = Date.now();

    console.log("🚀 Processing ...");

    const { file, target, text, min } = config;

    const INPUT_FILE = file || "./main.ttf";
    const OUTPUT_FILE = target || "./main.woff2";
    const SUBSET_TEXT = text ? text : (
        min ? CONFIG_JSON.defaultSubset || "全世界无产者联合起来，。！？ AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890,.!?:;-" : false
    );
    const INPUT_EXTNAME = path.extname(INPUT_FILE).toLowerCase().slice(1);
    const OUTPUT_EXTNAME = path.extname(OUTPUT_FILE).toLowerCase().slice(1);



    const inputFileBuffer = await fs.promises.readFile(INPUT_FILE);
    const outputConfig = SUBSET_TEXT ? {
        "text": SUBSET_TEXT,
        "layout-features": "*",
        "glyph-names": true
    } : {
        "*": true
    };
    const outputFileBuffer = await subset(inputFileBuffer, {
        ...outputConfig,
        ...(INPUT_EXTNAME == OUTPUT_EXTNAME ? {} : {
            "flavor": OUTPUT_EXTNAME == "woff" ? "woff" : "woff2"
        })
    });



    await fs.promises.writeFile(OUTPUT_FILE, outputFileBuffer);

    console.log(`✅ ${INPUT_FILE.toLowerCase()} to ${OUTPUT_FILE.toLowerCase()}. ${((Date.now() - START_TIME) / 1000).toFixed(1)}s`);
    console.log("");
    return;

};