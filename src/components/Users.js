import React from 'react'
import {connect, useSelector} from 'react-redux';
import {getUsers} from '../store/actions/usersActions'

 class Users extends React.Component {

    componentDidMount(){
        this.props.getUsers()
        
    }

    render() {
        const {users} = this.props.users

        
        return (
            <div className="container">
                {users.map(u => 
                     <React.Fragment key={u.id}>
                         <h6 >{u.name}</h6> 
                     </React.Fragment>
                )}
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {getUsers})(Users);