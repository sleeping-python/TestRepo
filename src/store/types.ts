import { IBugTrackerStoreState } from "./bugTracker/types";
import { IHelloStoreState } from "./hello/types";

export interface IStoreState {
    bugTrackerStoreState:IBugTrackerStoreState,
    helloStoreState:IHelloStoreState
};