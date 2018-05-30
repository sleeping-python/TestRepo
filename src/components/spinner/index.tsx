import * as React from 'react';

export interface ISpinnerProps {
    testString: string
}

export default class Spinner extends React.Component<ISpinnerProps, any> {
  constructor(props : ISpinnerProps){
    super(props);
    // {testString:String} = props;
  }
  public render() {    
    return (
      <div>
          <input type="button" value="Increment"/>
          <input type="button" value="Decreament"/>
          <br/>
          <label htmlFor="SpinnerArea">0</label>
      </div>
    );
  }
}
