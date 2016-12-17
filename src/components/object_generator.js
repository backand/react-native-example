const fs = require('fs');
const os = require('os');

process.argv.slice(2).forEach(name => {

  var dir = name;
  var types = `./${name}/${name}Types.js`;
  var reducer = `./${name}/${name}Reducer.js`;
  var actions = `./${name}/${name}Actions.js`

  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  if (!fs.existsSync(types)) fs.writeFileSync(types, type_gen(name))
  if (!fs.existsSync(reducer)) fs.writeFileSync(reducer, reducer_gen(name))
  if (!fs.existsSync(actions)) fs.writeFileSync(actions, actions_gen(name))

});

function type_gen (name) {
  var upname = name.toUpperCase();
  return (
    `export const ${upname}_REQUEST = '${upname}_REQUEST';
export const ${upname}_RESOLVE = '${upname}_RESOLVE';
export const ${upname}_REJECT  = '${upname}_REJECT';

export const CREATE_${upname}_RESOLVE = 'CREATE_${upname}_RESOLVE';
export const CREATE_${upname}_REJECT  = 'CREATE_${upname}_REJECT';

export const UPDATE_${upname}_RESOLVE = 'UPDATE_${upname}_RESOLVE';
export const UPDATE_${upname}_REJECT  = 'UPDATE_${upname}_REJECT';

export const REMOVE_${upname}_RESOLVE = 'REMOVE_${upname}_RESOLVE';
export const REMOVE_${upname}_REJECT  = 'REMOVE_${upname}_REJECT';`
  )
}

function reducer_gen (name) {
  var upname = name.toUpperCase();
  return (
    `import { ${upname}_REQUEST, ${upname}_RESOLVE, ${upname}_REJECT,
  CREATE_${upname}_RESOLVE, CREATE_${upname}_REJECT,
  UPDATE_${upname}_RESOLVE, UPDATE_${upname}_REJECT,
  REMOVE_${upname}_RESOLVE, REMOVE_${upname}_REJECT } from './${name}Types';

export default (state = {}, action) => {
  switch (action.type) {
    case ${upname}_REQUEST:
      return {loading: true};
    case ${upname}_RESOLVE:
      return Object.assign({}, state, {
        loading: false,
        data: action.payload.data,
        loaded: true
      });
    case ${upname}_REJECT:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.error,
        loaded: false
      });
    case CREATE_${upname}_RESOLVE:
      // Write your code here!
      // Use action.payload to access data
      // EXAMPLE:
      // return Object.assign({}, state, {
      //   data: [action.payload.data, ...state.data]
      // });
  	case CREATE_${upname}_REJECT:
      return Object.assign({}, state, {
        error: action.payload.error
      });
  	case UPDATE_${upname}_RESOLVE:
      // Write your code here!
      // Use action.payload to access data
      // EXAMPLE:
      // return Object.assign({}, state, {
      //   data: [action.payload.data, ...state.data]
      // });
  	case UPDATE_${upname}_REJECT:
      return Object.assign({}, state, {
        error: action.payload.error
      });
  	case REMOVE_${upname}_RESOLVE:
      // Write your code here!
      // Use action.payload to access data
      // EXAMPLE:
	    // let newData = state.data.filter(item => item.id != action.payload.data.id);
      // return Object.assign({}, state, {
      //   data: newData
      // });
  	case REMOVE_${upname}_REJECT:
        return Object.assign({}, state, {
          error: action.payload.error
        });
    default:
      return state;
  }
}
`
  )
}

function actions_gen (name) {
  var upname = name.toUpperCase();
  return (
    `import { ${upname}_REQUEST, ${upname}_RESOLVE, ${upname}_REJECT,
  CREATE_${upname}_RESOLVE, CREATE_${upname}_REJECT,
  UPDATE_${upname}_RESOLVE, UPDATE_${upname}_REJECT,
  REMOVE_${upname}_RESOLVE, REMOVE_${upname}_REJECT } from './${name}Types';

export const get_${name} = (params = {}) => {
  return dispatch => {
    dispatch({
      type: ${upname}_REQUEST,
    })
    backand.service.getList('${name}', params,
      response => {
        dispatch({
          type: ${upname}_RESOLVE,
          payload: {
            data: response.data.data
          }
        });
      },
      error => {
        dispatch({
          type: ${upname}_REJECT,
          payload: {
            error: error.data
          }
        });
      });
  };
}

export const create_${name} = (data, params = {}) => {
  return dispatch => {
    backand.service.create('${name}', data, params,
      response => {
        // SUCCESS CALLBACK: Write your code here!
        // Use the following type, and payload structure in case of using dispatch():
        // dispatch({
        //   type: CREATE_${upname}_RESOLVE,
        //   payload: {
        //     data: DATA_TO_REDUCER
        //   }
        // });
      },
      error => {
        dispatch({
          type: CREATE_${upname}_REJECT,
          payload: {
            error: error.data
          }
        });
      });
  };
}

export const update_${name} = (id, data, params = {}) => {
  return dispatch => {
    backand.service.update('${name}', id, data, params,
      response => {
        // SUCCESS CALLBACK: Write your code here!
        // Use the following type, and payload structure in case of using dispatch():
        // dispatch({
        //   type: UPDATE_${upname}_RESOLVE,
        //   payload: {
        //     data: DATA_TO_REDUCER
        //   }
        // });
      },
      error => {
        dispatch({
          type: UPDATE_${upname}_REJECT,
          payload: {
            error: error.data
          }
        });
      });
  };
}

export const remove_${name} = (id) => {
  return dispatch => {
    backand.service.remove('${name}', id,
      response => {
        // SUCCESS CALLBACK: Write your code here!
        // Use the following type, and payload structure in case of using dispatch():
        // dispatch({
        //   type: REMOVE_${upname}_RESOLVE,
        //   payload: {
        //     data: DATA_TO_REDUCER
        //   }
        // });
      },
      error => {
        dispatch({
          type: REMOVE_${upname}_REJECT,
          payload: {
            error: error.data
          }
        });
      });
  };
}
`
  )
}
