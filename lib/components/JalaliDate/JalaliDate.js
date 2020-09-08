var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Components } from 'formiojs';
var FieldComponent = Components.components.field;
import editForm from './JalaliDate.form';
var JalaliDate = /** @class */ (function (_super) {
    __extends(JalaliDate, _super);
    function JalaliDate(component, options, data) {
        return _super.call(this, component, options, data) || this;
    }
    JalaliDate.schema = function () {
        return FieldComponent.schema({
            type: 'jalaliDate'
        });
    };
    Object.defineProperty(JalaliDate.prototype, "classes", {
        get: function () {
            return " jalaliDate form-control ";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JalaliDate.prototype, "getInputName", {
        get: function () {
            return "" + this.component.key;
        },
        enumerable: true,
        configurable: true
    });
    JalaliDate.prototype.render = function (children) {
        return _super.prototype.render.call(this, this.renderTemplate('jalaliDate', {
            classes: this.classes,
            inputKeyName: this.getInputName,
        }));
    };
    JalaliDate.editForm = editForm;
    JalaliDate.builderInfo = {
        title: 'Jalali Date',
        group: 'basic',
        icon: 'calendar',
        weight: 70,
        documentation: 'https://github.com/alifa98/',
        schema: JalaliDate.schema()
    };
    return JalaliDate;
}(FieldComponent));
export default JalaliDate;
