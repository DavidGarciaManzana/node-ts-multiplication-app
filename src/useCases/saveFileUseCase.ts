import * as fs from "fs";

interface SaveFileUseCase{
    execute:(data:SaveFileData)=>boolean;
}
interface SaveFileData{
    path?:string,
    base:number,
    content:string;
}

export class SaveFile {
    constructor() {
    }
    execute({path='outputs',base,content}:SaveFileData){
        try {
            fs.mkdirSync(path,{recursive:true})
            fs.writeFileSync(`${path}/tabla${base}.txt`, content);
            return true
        } catch (err){
            console.error(err)
            return false
        }


    }

}