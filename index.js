#! /usr/bin/env node

import { Command } from "commander";
import { FONT_TOOLS_EX } from "./src/fonttools.js";
import { CN_FONT_SPLIT_EX } from "./src/cn-font-split.js";

console.log("");
console.log("\x1b[44m\x1b[37m%s\x1b[0m", `    ZSFT CLI    `);
console.log("");

const program = new Command();

program.arguments("[file] [target]")
    .option("-f, --file <path>", "Input file. default: main.ttf")
    .option("-t, --target <format>", "Output format. default: woff2")
    .option("-m, --min", "Subset font. default: false")
    .option("--text <string>", "Text to subset.")
    .action(async (file, target, options) => {
        if (file) options.file = file;
        if (target) options.target = target;
        await FONT_TOOLS_EX(options);
    });

program.command("split [input] [output]")
    .option("-i, --input <path>", "Input file. default: main.ttf")
    .option("-o, --output <path>", "Output directory. default: input file name")
    .option("--name <string>", "CSS font name. default: auto")
    .action(async (input, output, options) => {
        if (input) options.input = input;
        if (output) options.output = output;
        await CN_FONT_SPLIT_EX(options);
    });

program.parse(process.argv);
