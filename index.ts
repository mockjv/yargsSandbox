
import * as yargs from "yargs";

const args = yargs
.command({
    command: '$0',
    describe: 'Automatic?',
    builder: () => {
        return yargs.option("test2", {desc: "test?"});
    },
    handler: () => {
        console.log("DEFAULT");
    }
})
.command({
    command: 'login',
    describe: 'Perform a login',
    builder: () => {
        return yargs.option("test", {desc: "test?"});
    },
    handler: () => {
        console.log("LOGIN");
    }
})
.option('verbose', {
    alias: 'v',
    default: false
})
.help()
.argv;

console.log(args);