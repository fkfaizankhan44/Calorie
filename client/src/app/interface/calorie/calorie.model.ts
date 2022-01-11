export class Calorie {
    _id: string = ""
    id: number = 0
    name: string = ""
    food_group: string = ""
    calories: number = 0
    fat: number = 0
    protein: number = 0
    carbohydrate: number = 0
    serving_description: string = ""
    meal: string = ""
    userId: string = ""
    userName: string = ""
    userBmr: number = 0



    // activity: string = ""
    // specific_motion: string = ""
    // met: number = 0
    // duration: number = 0
    // userWeight: number = 0
    // calorieOut: number = 0


    constructor() {
        this._id = ""
        this.id = 0
        this.name = ""
        this.food_group = ""
        this.calories = 0
        this.fat = 0
        this.protein = 0
        this.carbohydrate = 0
        this.serving_description = ""
        this.meal = ""
        this.userId = ""
        this.userName = ""
        this.userBmr = 0

        // this.activity = ""
        // this.specific_motion = ""
        // this.met = 0
        // this.duration = 0
        // this.userWeight = 0
        // this.calorieOut = 0

    }
}
