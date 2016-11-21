"use strict";
var core_1 = require('@angular/core');
var OffClickDirective = (function () {
    function OffClickDirective() {
    }
    /* tslint:enable */
    OffClickDirective.prototype.onClick = function ($event) {
        //$event.stopPropagation();
        var _this = this;
        // Permite propagar o evento de clique para fechar outras eventuais combos que estejam abertas.
        // Para não fechar a combo atual, remove temporariamente o handler responsável por fechar a combo atual a partir de um evento de clique.
        document.removeEventListener('click', this.offClickHandler);
        setTimeout(function () {
            document.addEventListener('click', _this.offClickHandler);
        }, 0);
    };
    OffClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            document.addEventListener('click', _this.offClickHandler);
        }, 0);
    };
    OffClickDirective.prototype.ngOnDestroy = function () {
        document.removeEventListener('click', this.offClickHandler);
    };
    OffClickDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[offClick]'
                },] },
    ];
    /** @nocollapse */
    OffClickDirective.ctorParameters = [];
    OffClickDirective.propDecorators = {
        'offClickHandler': [{ type: core_1.Input, args: ['offClick',] },],
        'onClick': [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
    };
    return OffClickDirective;
}());
exports.OffClickDirective = OffClickDirective;
