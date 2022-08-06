import React from 'react';
import Header from "./Header";
import {rootReducerType} from "../../redux/redux-store";
import {connect} from 'react-redux';
import {getMeTC} from "../../redux/auth-reducer";


type MapStatePropsType = {
    isAuth: boolean,
    login: null
}
type MapDispatchPropsType = {
    // setUserDataAC: (data: userDataType) => void
    getMeTC: () => void

}
export type authPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<authPropsType, rootReducerType> {

    componentDidMount() {

        this.props.getMeTC()

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

export default connect(mapStateToProps, {getMeTC})(HeaderContainer);