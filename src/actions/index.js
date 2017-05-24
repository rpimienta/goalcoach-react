import { SIGNED_IN, SET_GOALS, SET_COMPLETED } from '../constants';

export function logUser(email) {
    const action = {
        type:SIGNED_IN,
        email
    }
    console.log('email in action', email);
    return action;
}

export function setGoals(goals) {
    const action = {
        type:SET_GOALS,
        goals
    }
    console.log('setting goals in action', action);
    return action;
}

export function setCompleted(completedGoals) {
    const action = {
        type:SET_COMPLETED,
        completedGoals
    }
    return action;
}