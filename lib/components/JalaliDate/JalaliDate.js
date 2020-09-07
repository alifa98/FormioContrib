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
            return " jalaliDate form-contro ";
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
    JalaliDate.prototype.attach = function (element) {
        var _this = this;
        var refs = {};
        refs[this.getInputName] = 'multiple';
        this.loadRefs(element, refs);
        console.log(element);
        console.log(this.refs[this.getInputName][0]);
        this.addEventListener(this.refs[this.getInputName][0], 'change', function () { return _this.updateValue(); });
        return _super.prototype.attach.call(this, element);
    };
    JalaliDate.prototype.getValue = function () {
        console.log("Get Called");
        return this.dateValue;
    };
    JalaliDate.prototype.setValue = function (value) {
        console.log("Set Called");
        if (!value) {
            return;
        }
        this.dateValue = value;
    };
    JalaliDate.editForm = editForm;
    JalaliDate.builderInfo = {
        title: 'Jalali Date',
        group: 'basic',
        icon: 'fa fa-calendar',
        weight: 70,
        documentation: 'https://github.com/alifa98/',
        schema: JalaliDate.schema()
    };
    return JalaliDate;
}(FieldComponent));
export default JalaliDate;
