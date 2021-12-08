import Type from "./mutation-type";
const mutations = {
  [Type.ROLEID]: (state, data) => {
    state.roleId = data;
  },
  [Type.USERNAME]: (state, data) => {
    state.username = data;
  },
};
export default mutations;
