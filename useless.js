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
        splice: function () { return _arrayCall("splice", arguments); },
        reverse: function () { return _arrayCall("reverse", arguments); },
        shift: function () { return _arrayCall("shift", arguments); },
        unshift: function () { return _arrayCall("unshift", arguments); },
        reduce: function () { return _arrayCall("reduce", arguments); },
        reduceRight: function () { return _arrayCall("reduceRight", arguments); },
        map: function () { return _arrayCall("map", arguments); },
        every: function () { return _arrayCall("every", arguments); },
        some: function () { return _arrayCall("some", arguments); }
        indexOf: function () { return _arrayCall("indexOf", arguments); }
        lastIndexOf: function () { return _arrayCall("lastIndexOf", arguments); }
        slice: function () { return _arrayCall("slice", arguments); },
        join: function () { return _arrayCall("join", arguments); },
        concat: function () { return _arrayCall("concat", arguments); },
    };
    u.q = u.query;

    window.u = u;
})(window, document, Array);
