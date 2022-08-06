import React from "react";
import {Navigate} from "react-router-dom";
import {connect, ConnectedComponent, ConnectProps} from "react-redux";
import {rootReducerType} from "../redux/redux-store";
import {DistributiveOmit} from "react-redux";
import {GetLibraryManagedProps} from "react-redux";
import {Shared} from "react-redux";
import {DispatchProp} from "react-redux";
import {AnyAction} from "redux";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: rootReducerType): MapStatePropsType => ({isAuth: state.auth.isAuth})


export const withAuthRedirect = <P extends object>(Component: React.ComponentType<P>): ConnectedComponent<React.FunctionComponent<MapStatePropsType>, DistributiveOmit<GetLibraryManagedProps<React.FunctionComponent<MapStatePropsType>>, keyof Shared<MapStatePropsType & DispatchProp<AnyAction>, GetLibraryManagedProps<React.FunctionComponent<MapStatePropsType>>>> & ConnectProps> => {
    const WithRedirect: React.FC<MapStatePropsType> = ({isAuth, ...props}) => {
        if (!isAuth) return <Navigate to={'/login'}/>
        return <Component {...props as P}/>
    }
    return connect(mapStateToProps)(WithRedirect)
}