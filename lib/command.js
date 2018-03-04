'use strict';

/*eslint-disable no-console*/

const argv = require('minimist')(process.argv.slice(2));
const pkg = require('../package.json');

const version = `v${pkg.version}`;

function parse() {
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

    if (!argv._.length && !input) {
        showHelp();
        return;
    }

    exec({input, output, config});
}

parse();

function exec(info) {
    console.log('PROCESSING:', info);
}

function showHelp() {
    const gap = '   ';
    const msg = `
Docref command-line interface ${version}\n
Required:
${gap}[-i,--input] <input file>

Optional:
${gap}[-o,--output] <output file>
${gap}[-c,--config] <configuration file>
${gap}[-h,--help] show the help
${gap}[-v,--version] show the version
`;
    console.log(msg);
}