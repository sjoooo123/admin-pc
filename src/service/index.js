// 导入所有的接口
const req = context => context.keys().map(context);
const ret = req(require.context("./api/", true, /\.js$/));
const svc = {};
ret.forEach(item => {
  for (let key in item) {
    svc[key] = item[key];
  }
});

export default svc;
