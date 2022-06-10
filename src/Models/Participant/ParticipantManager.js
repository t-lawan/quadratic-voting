import { ParticipantModel } from "./Participant"

export class ParticipantManagerModel {
    participants: []
    constructor(numberOfParticipants){
        this.#build(numberOfParticipants)
    }

    #build = (numberOfParticipants) => {
        this.loadTestParticipants(numberOfParticipants)
    }

    loadTestParticipants = (numberOfParticipants) => {
        for(let i = 0; i++; i < numberOfParticipants){
            this.addParticipant(this.createParticipant())
        }
    }

    createParticipant = () => {
        return new ParticipantModel()
    }

    addParticipant = (participant) => {
        this.participants.push(participant)
    }
    



}