export class MetValue {
    _id: string = ""
    id: number = 0
    activity: string = ""
    specific_motion: string = ""
    met: number = 0
    duration: number = 0
    userId: string = ""
    userName: string = ""
    userWeight: number = 0
    calorieOut: number = 0
    constructor() {
        this._id = ""
        this.activity = ""
        this.id = 0
        this.specific_motion = ""
        this.met = 0
        this.duration = 0
        this.userName = ""
        this.userId = ""
        this.userWeight = 0
        this.calorieOut = 0
    }
}
