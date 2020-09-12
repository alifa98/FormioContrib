Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<input class="' +
((__t = ( ctx.classes )) == null ? '' : __t) +
'"\n    data-hasTime="' +
((__t = ( ctx.component.hasTime )) == null ? '' : __t) +
'"\n    data-showingFormat="' +
((__t = ( ctx.showingFormat )) == null ? '' : __t) +
' ' +
((__t = ( ctx.component.hasTime? 'HH:mm':'' )) == null ? '' : __t) +
'"\n    data-inputFormat="' +
((__t = ( ctx.component.inputDateFormat )) == null ? '' : __t) +
' ' +
((__t = ( ctx.component.hasTime? 'HH:mm':'' )) == null ? '' : __t) +
'"\n    data-outputFormat="' +
((__t = ( ctx.component.outputDateFormat )) == null ? '' : __t) +
' ' +
((__t = ( ctx.component.hasTime? 'HH:mm':'' )) == null ? '' : __t) +
'"\n    name="' +
((__t = ( ctx.inputKeyName )) == null ? '' : __t) +
'"\n    type="text" />';
return __p
}