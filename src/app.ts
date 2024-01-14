
import {yarg} from "./thirdPartyLibraries/yargsAdapter";
import {Presentation} from "./presentation/presentation";


const main = async()=>{
    const {b:base,l:limit,s:isTableShowed,n:tableName,d:destination}=yarg;

    Presentation.run({base,limit,isTableShowed,tableName,destination})
}
(async()=>{
    await main()
})();


