import React, {Component} from "react";
import {connect} from "react-redux";
import { addEmployees} from "../../actions/index";
import {bindActionCreators} from "redux";

export class EditEmployees extends Component  {

componentWillMount(){
    
}
    
render(){
        console.log(this.props);
    return (
        <div>Something</div>
        )
}
}

function mapStateToProps(state){
    return {
        leaves:state.books
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addEmployees}, dispatch)
  }

export default connect(mapDispatchToProps)(EditEmployees)