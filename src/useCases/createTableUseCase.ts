interface CreateTableUseCase {
    execute:(data:CreateTableData)=>string;
}
interface CreateTableData {
    base:number;
    limit?:number;
}
export class CreateTable implements CreateTableUseCase{
    constructor() {
    }
    execute({base,limit=10}:CreateTableData){
        let content:string = ''

        for (let i:number=1;i<=limit;i++){
            content += `${base} x ${i} = ${base*i}\n`
        }
        return content;
    }
}
