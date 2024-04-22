import formatMoney from '../format-money';
import Helper from '@ember/component/helper';

export default Helper.helper(function(params, options) {
  var value = params[0];
  return formatMoney(value, options);
});
