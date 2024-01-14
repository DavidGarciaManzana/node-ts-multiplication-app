import {CreateTable} from "../useCases/createTableUseCase";
import {CreateTableBanner} from "../useCases/createTableBannerUseCase"
import {SaveFile} from "../useCases/saveFileUseCase";

interface runOptions {
    base:number,
    limit:number,
    isTableShowed:boolean,
    tableName:string,
    destination:string
}

export class Presentation {
    static run({base,limit,isTableShowed,tableName,destination} :runOptions){
        console.log('Server running...')
        const title = new CreateTableBanner().execute({tableName})
        const table = new CreateTable().execute({base,limit})
        const finalTable = title + table
        isTableShowed && console.log(finalTable)
        const isTabledSaved = new SaveFile().execute({path:destination,base,content:finalTable})
        isTabledSaved && console.log(`File created successfully, tabled saved at ${destination}!`)
    }
}
