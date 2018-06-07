import React, {Component} from "react";
import {connect} from "react-redux";
import { addEmployees} from "../../actions/index";
import {bindActionCreators} from "redux";

export class EditEmployees extends Component  {
  constructor(props){
      super();
     var initial =this.props.location.employees;
     if(initial){
       
     } 
    
  }
    
    


    handleInput = (event,name) => {
        const newFormdata = {
            ...this.state.formdata
        }
        newFormdata[name] = event.target.value

        this.setState({
            formdata:newFormdata
        });
    }

    submitForm = (e) => {
        e.preventDefault();
        addEmployees(this.state.formdata);
    }

    componentWillUnmount(){
      addEmployees(this.state.formdata);
    }

    render(){
        console.log(this.props);
    return (
        <form onSubmit ={this.submitForm}>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1"
                 aria-describedby="emailHelp" placeholder="Enter email"
                 value={this.state.formdata.email}
                 onChange={(event)=>this.handleInput(event,'email')}
                 />
                
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control"
                 id="exampleInputPassword1" placeholder="Password"
                 value={this.state.formdata.password}
                 onChange={(event)=>this.handleInput(event,'password')}
                 
                 />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Name</label>
                <input type="text" class="form-control"
                 id="exampleInputPassword1" placeholder="nmae"
                 value={this.state.formdata.name}
                 onChange={(event)=>this.handleInput(event,'name')}
                 />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Department</label>
                <input type="text" class="form-control"
                 id="exampleInputPassword1" placeholder="deparmtent"
                 value={this.state.formdata.department}
                 onChange={(event)=>this.handleInput(event,'department')}
                 />
            </div>
            <button type="submit" class="btn btn-primary" onClick = {this.submitForm}>Submit</button>
      </form>
    )
}
}

// function mapStateToProps(state){
//     return {
//         books:state.books
//     }
// }

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addEmployees}, dispatch)
  }

export default connect(mapDispatchToProps)(EditEmployees)