import { AUTH ,TRACK,IMG} from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};


export const userStatus = (id,router) => async (dispatch) => {
  try {
    const { data } = await api.userStatus(id);

    dispatch({ type: TRACK, payload: data });
    router.push('/');
  } catch (error) {
    console.log(error.message);
  }
};
export const userImg = (id,user) => async (dispatch) => {
  try {
    const { data } = await api.userImg(id,user);

    dispatch({ type: IMG, payload: data });
  
    console.log('sucessfully send')
  } catch (error) {
    console.log(error.message);
    console.log('error')
  }
};

// export const updatePost = (id, post) => async (dispatch) => {
//   try {
//     const { data } = await api.updatePost(id, post);

//     dispatch({ type: UPDATE, payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };