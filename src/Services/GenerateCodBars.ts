export abstract class GenerateCodBars{
    static newCodBars = ()=>{
        const serieOne= Math.floor(Math.random() * 99999999999999)
        const serieTwo= Math.floor(Math.random() * 99999999999999)
        const serieThree= Math.floor(Math.random() * 99999999999999)

        return `${serieOne}-${serieTwo}-${serieThree}`
    }
}