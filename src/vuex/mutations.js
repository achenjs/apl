export default {
  urlInfo (state, obj) {
    if (obj) {
      var path = obj.path;
      var parameter = obj.parameter;
      var len = Object.keys(parameter).length;
      var str = '';
      for (let i in parameter) {
        if (parameter[i] === '' || parameter[i] === undefined || parameter[i] === null) {
          delete parameter[i];
        } else {
          str += '&' + i + '=' + parameter[i];
        }
      };
      state.changeUrl = path + str.replace('&', '?');
    }
  }
};
