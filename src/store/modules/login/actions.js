import Type from "./mutation-type";
// import loginApi from '@/api/login/login'

const actions = {
  //不调用接口请求数据
  setROLEID: ({ commit }, row) => {
    commit(Type.ROLEID, row);
    // request.get(`gzbmj/gwcl/old/gethtml.json?ID=${ID}`).then((result) => {
    //
    // }).catch((error) => {
    //   console.log('error: ', error)
    // })
  },

  // //调用接口请求数据
  // getpatientQueryTableData: ({commit}, data) => {
  //     daySurgeryIntroApi.getpatientQueryTableData(data).then(res => {
  //         if (res.code == 200) {
  //             commit(Type.PATIENTQUERYTABLEDATA, res.entitys)
  //         }
  //     }).catch((error) => {
  //
  //         console.log('error: ', error)
  //     })
  //
  // } ,
  // //action中可以有不刷新数据的方法，前提是不调用commit方法
  // getZW: ({ commit }, param) => {
  //     request.get(`gzbmj/gwcl/old/getZW.json?fileName=${param.filename}&PID=${param.PID}`).then((result) => {
  //     }).catch((error) => {
  //         console.log('error: ', error)
  //     })
  // }
};

export default actions;
