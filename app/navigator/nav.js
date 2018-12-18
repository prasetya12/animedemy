import RootNavigator from './RootNavigator'

const initialState = RootNavigator.router.getStateForAction(
    RootNavigator.router.getActionForPathAndParams('Login')
)

const navReducer = (state = initialState, action) => {
    const nextState = RootNavigator.router.getStateForAction(action,state)

    return nextState || state
}

export default navReducer