export class User {
    constructor(
        public id: number = null,
        public fName: string = "",
        public lName: string = "",
        public email: string = "",
        public pw: string = "",
        public confirmpw: string = "",
        public street: string = "",
        public city: string = "",
        public unit: number = null,
        public state: string = "",
        public lucky: boolean = null,
        public createdAt: Date = new Date(),
        public updatedAt: Date = new Date()
    ){}
}
