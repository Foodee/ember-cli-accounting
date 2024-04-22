import formatNumber from '../format-number';
import Helper from '@ember/component/helper';

export default Helper.helper(function(params, options) {
  var value = params[0];
  return formatNumber(value, options);
});
