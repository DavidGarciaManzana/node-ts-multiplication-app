import yargs from "yargs";
import {hideBin} from "yargs/helpers"

export const yarg = yargs(hideBin(process.argv))
    .option('b',{
        alias:'base',
        type:'number',
        demandOption:true,
        describe:'Multiplication base'
    })
    .option('l',{
        alias:'limit',
        type:'number',
        default:10,
        describe:'Limit'
    })
    .option('s',{
        alias:'show',
        type:'boolean',
        default:false,
        describe:'show table'
    })
    .option('n',{
        alias:'name',
        type:'string',
        default:'table',
        describe:'File name'
    })
    .option('d',{
        alias:'destination',
        type:'string',
        default:'outputs',
        describe:'File directory'
    })
    // .check((argv,options)=>{
    //     console.log("Checking arguments:", argv);
    //     if(argv.b < 1) {throw "Error: base must be greater than 0"}
    // })
    .parseSync()
