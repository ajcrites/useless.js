;(function (window, document, Array, undefined) {
    var _arrayCall = function () {
        return Array.prototype[arguments[0]].apply(arguments[1][0], Array.prototype.slice.call(arguments[1], 1));
    },
    u = {
        query: function () {
            nodes = document.querySelectorAll(arguments[0]);
            if (nodes.length === 1) {
                return nodes[0];
            }
            else {
                return nodes;
            }
        },
        forEach: function () { return _arrayCall("forEach", arguments); },
        slice: function () { return _arrayCall("slice", arguments); }
    };
    u.q = u.query;

    window.u = u;
})(window, document, Array);
