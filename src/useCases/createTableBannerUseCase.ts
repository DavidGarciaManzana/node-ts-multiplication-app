export class CreateTableBanner{
constructor(){}

    execute({tableName="Tabla"}:{tableName?:string}){
    return`
====================
${tableName}
====================\n`
    }
}