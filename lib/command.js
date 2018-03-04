'use strict';

/*eslint-disable no-console*/

const argv = require('minimist')(process.argv.slice(2));
const pkg = require('../package.json');

const version = `v${pkg.version}`;

function parseCommand() {
    if (argv.v || argv.version) {
        console.log(version);
        return;
    }

    if (argv.h || argv.help) {
        showHelp();
        return;
    }

    const input = argv.i || argv.input || argv._[0];
    const output = argv.o || argv.output || argv._[1];
    const config = argv.c || argv.config;
    const silent = argv.s || argv.silent;

    if (!argv._.length && !input) {
        showHelp();
        return;
    }

    exec({input, output, config, silent});
}

function exec(info) {
    console.log('PROCESSING:', info);
}

function showHelp() {
    const gap = '   ';
    const msg = `
DocRef command-line interface ${version}\n
Syntax: inputFile [outputFile] [options]

Required:
${gap}[-i,--input] <input file>

Optional:
${gap}[-o,--output] <output file>
${gap}[-c,--config] <configuration file>
${gap}[-h,--help] show the help
${gap}[-v,--version] show the version
${gap}[-s,--silent] show only errors

Examples:
${gap}docref src/input.ts 
${gap}docref src/input.ts dest/output.ts
${gap}docref -i src/input.ts -o dest/output.ts -c config.json
${gap}docref -i=src/input.ts -o=dest/output.ts -c=config.js
`;
    console.log(msg);
}

parseCommand();
