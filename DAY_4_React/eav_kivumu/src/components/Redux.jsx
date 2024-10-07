/*
Redux: state  management  store glabl state in single store
principles:
1. Single source of truth
2. State is read-only
3. Changes are made with pure functions

COMPONENTS:
1. store: this is where  the applicaiton state are held.
2. action:  this is plain js(vanilla)  object that describes 
                a change  or  event  that has accurd
3. reducer: pure function that takes the current state and an action,
                and returns a new state.
4. Dispatch : function used to send actions to the redux store
5. Selctors: function that extract  specific partd of states


Redux flow explained

1. componets Dispatch an action: dispatch(action)
2.  action describes what happened : action (type)
3.the reducer handles the action  
4. store updated
5. components react to state changes





*/