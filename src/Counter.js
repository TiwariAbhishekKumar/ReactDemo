import React,{Component} from 'react';

class Counter extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            Counter:0
        }
    }
    increment()
    {
        this.setState({
          Counter:  this.state.Counter + 1
        },
        ()=> {console.log('callback value', this.state.Counter)})
    }

     render()
     {
         return (
             <div>
              <div>count-{this.state.Counter}</div>
<button onClick={()=> this.increment()}>increment</button>
             </div>
         )
     }

}


export default Counter;