Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<div>' +
((__t = ( ctx.renderInput() )) == null ? '' : __t) +
'</div>\n\n\n<!-- <input class="' +
((__t = ( ctx.classes )) == null ? '' : __t) +
'" data-hasTime="' +
((__t = ( ctx.component.hasTime )) == null ? '' : __t) +
'"  data-inputFormat="' +
((__t = ( ctx.component.inputDateFormat )) == null ? '' : __t) +
'" data-outputFormat="' +
((__t = ( ctx.component.outputDateFormat )) == null ? '' : __t) +
'" name="data[' +
((__t = ( ctx.inputKeyName )) == null ? '' : __t) +
']" type="text" /> -->';
return __p
}