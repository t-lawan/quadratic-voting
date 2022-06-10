import { Rules } from "../../Utility/Rules";

export class ParticipantModel {
    tokens;
    constructor(){
        this.#build();
    }

    #build = () => {
        this.tokens = Rules.startNumberOfTokens
    }

}