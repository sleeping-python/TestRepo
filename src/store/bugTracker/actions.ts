import * as constants from '../../constants'

export interface IAddBug {
    type: constants.ADD_BUG;
}

export type BugAction = IAddBug;

export function addBug(): IAddBug {
    return {
        type: constants.ADD_BUG
    }
}