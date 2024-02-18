import { SetCurrentTile } from "../types";

export const setCurrentTileHelper = (props: SetCurrentTile) => {
    const {tileIndex, type } = props
    let creditChange = null
    switch(type){
        case "House":
            creditChange = "+5"
            break
        case "Rock":
            creditChange = "-3"
            break
        default:
            break
    }
    return {
        tileIndex,
        type,
        creditChange
    }
}