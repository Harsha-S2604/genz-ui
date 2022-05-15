import { Route, Switch} from 'react-router-dom';

const Router = ( { routerList } ) => {

    return (
        <Switch>
            {routerList.map((routerVal) => {
                if(routerVal.path === "/") {
                    return <Route exact path={routerVal.path} component={routerVal.component} />
                } else {
                    return <Route path={routerVal.path} component={routerVal.component} />
                }
            })}
        </Switch>
    )
}
