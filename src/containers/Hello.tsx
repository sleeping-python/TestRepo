import { connect, Dispatch } from 'react-redux';

import {Hello, IProps, IPropsActions, IPropsState} from '../components/hello';
import * as actions from '../store/hello/actions';
import { IStoreState } from '../store/types';


export function mapStateToProps({helloStoreState}: IStoreState) {
  return {
    enthusiasmLevel:helloStoreState.enthusiasmLevel,
    name: helloStoreState.languageName,
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
  }
}

export function mergeProps(stateProps: IPropsState, dispatchProps: IPropsActions, ownProps: IProps) {
    return Object.assign({}, ownProps, stateProps, dispatchProps);
  }

export default connect<IProps>(mapStateToProps, mapDispatchToProps, mergeProps)(Hello);