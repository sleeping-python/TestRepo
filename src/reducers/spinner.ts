export interface ISpinnerAction {
    type:string,
    payload:number
}
export function spinnerReducer(spinnerState:number, action:ISpinnerAction){
    if(action.type === "INCREAMENT") {return spinnerState += action.payload;}
    if(action.type === "DECREAMENT") {return spinnerState -= action.payload;}
    return spinnerState;
}