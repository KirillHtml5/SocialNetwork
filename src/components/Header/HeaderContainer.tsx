import React from 'react';
import Header from "./Header";
import {rootReducerType} from "../../redux/redux-store";
import {connect} from 'react-redux';
import {setUserDataAC, userDataType} from "../../redux/auth-reducer";
import {authAPI} from "../../api/Api";


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
        authAPI.getMe()
            .then((data) => {
                // this.props.isFetching(false)
                if (data.resultCode === 0) {
                    this.props.setUserDataAC(data.data)
                }
                console.log(data.data)
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