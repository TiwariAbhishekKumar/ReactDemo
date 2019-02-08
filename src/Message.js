import React,{Component} from 'react'

class Message extends Component
{
constructor(){
super()
this.state={Message:'Welcome visitor', Name:'Abhishek'}
}
changeMessage()
{
    this.setState({
        Message:'Thank you For visiting'
    })
}

render(){
    return( 
    <div>
        <h1>{ this.state.Message + ' '+  this.state.Name }</h1>
        <button onClick={()=>this.changeMessage()}>Change State</button>
    </div>
    )
}

}
 export default Message