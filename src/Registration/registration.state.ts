export type RegistrationState = {
    name:string,
    lastname:string,
    age:number,
    updateName:(name:string) => (state:RegistrationState) => RegistrationState
}

export const initRegistrationState:RegistrationState = {
    name:"Enter",
    lastname:"Enter lastname",
    age:22,
    updateName:(name: string) => (state:RegistrationState) : RegistrationState => {
        return {
            name:name,
            lastname:state.lastname,
            age:state.age,
            updateName:state.updateName
        }
    }
}