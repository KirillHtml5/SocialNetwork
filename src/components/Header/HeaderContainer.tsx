import React from 'react';
import Header from "./Header";
import axios from "axios";
import {rootReducerType} from "../../redux/redux-store";
import {connect} from 'react-redux';
import {setUserDataAC, userDataType} from "../../redux/auth-reducer";


type MapStatePropsType = {
    isAuth: boolean,
    login: null
}
type MapDispatchPropsType = {
    setUserDataAC: (data: userDataType) => void

}
export type authPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<authPropsType, rootReducerType> {

    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then((res) => {
                // this.props.isFetching(false)
                if (res.data.resultCode === 0) {
                    this.props.setUserDataAC(res.data.data)
                }
                console.log(res.data.data)
            })
    }

    render() {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth}/>
        )
    }
}

let mapStateToProps = (state: rootReducerType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login

    }
}

export default connect(mapStateToProps, {setUserDataAC})(HeaderContainer);