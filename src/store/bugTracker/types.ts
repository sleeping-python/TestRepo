export interface IBugTrackerStoreState {
    bugs:IBugs[]
}

export interface IBugs {
    name:string,
    severity:number
}