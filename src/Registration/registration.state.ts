interface Person{
    name:string,
    lastname:string,
    age:number
}

export type RegistrationState={
    name:string;
    lastname:string;
    age:number,
    storage: Map<number, Person>,
    id:number,
    updateName:(name:string)=> (state:RegistrationState) => RegistrationState,
    updateLastname:(lastname:string)=> (state:RegistrationState) => RegistrationState,
    updateAge:(age:number)=> (state:RegistrationState) => RegistrationState,
    insertPerson:(state:RegistrationState) => RegistrationState
}

export const initRegistrationState: RegistrationState = {
    name: "Enter",
    lastname: "Enter lastname",
    age: 18,
    storage: new Map,
    id:0,
    updateName:(name: string) => (state:RegistrationState) : RegistrationState =>({
        ...state,
        name:name
    }),
    updateLastname:(lastname: string) => (state:RegistrationState) : RegistrationState =>({
        ...state,
        lastname:lastname
    }),
    updateAge:(age: number) => (state:RegistrationState) : RegistrationState =>({
        ...state,
        age:age
    }),
    insertPerson: (state:RegistrationState) : RegistrationState =>({
        ...state,
        id: state.id + 1,
        storage : state.storage.set(state.id, {
            name: state.name,
            lastname: state.lastname,
            age: state.age
        })
    })
}