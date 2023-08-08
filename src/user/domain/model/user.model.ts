export class UserModel {
    constructor(
        private readonly email: string,
        private readonly password: string,
        private readonly nickname: string,
        private readonly height: number,
        private readonly weight: number,
        private readonly age: number,
        private readonly salt: string,
    ) {}
    
    public getEmail(): Readonly<string> {return this.email}
    public getPassword(): Readonly<string> {return this.password}
    public getNickName(): Readonly<string> {return this.nickname}
    public getHeight(): Readonly<number> {return this.height}
    public getWeight(): Readonly<number> {return this.weight}
    public getAge(): Readonly<number> {return this.age}
    public getSalt(): Readonly<string> {return this.salt}
}