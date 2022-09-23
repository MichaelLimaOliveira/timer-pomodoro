import { Cycle } from "./reducer";

export enum ActionTypes {
    ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
    MARCK_CURRENT_CYCLE_AS_FINISHED = "MARCK_CURRENT_CYCLE_AS_FINISHED",
    INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
}

export function addNewCycleAction(newCycle: Cycle) {
    return {
        type: ActionTypes.ADD_NEW_CYCLE,
        payload: {
            newCycle,
        },
    };
}

export function marckCurrentCycleAsFinishedAction() {
    return {
        type: ActionTypes.MARCK_CURRENT_CYCLE_AS_FINISHED,
    };
}

export function interruptCurrentCycleAction() {
    return {
        type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
    };
}
