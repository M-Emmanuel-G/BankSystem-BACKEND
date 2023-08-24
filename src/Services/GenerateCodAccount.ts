export abstract class GenerateCOD{
    static newCOD = ()=>{
        const number= Math.floor(Math.random() * 99999)
        const digit = Math.floor(Math.random() * 999)

        return `${number}-${digit}`
    }
}