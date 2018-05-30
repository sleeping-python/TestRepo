import {BugAction} from './bugTracker/actions'
import {EnthusiasmAction} from './hello/actions'

export type RootAction = EnthusiasmAction | BugAction;