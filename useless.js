;(function (window, document, Array, undefined) {
    var _arrayCall = function () {
        return Array.prototype[arguments[0]].apply(arguments[1][0], Array.prototype.slice.call(arguments[1], 1));
    },
    u = {
        query: function () {
            return document.querySelectorAll(arguments[0]);
        },
    };
    u.q = u.query;
    ["forEach", "splice", "reverse", "shift", "unshift", "reduce",
    "reduceRight", "map", "every", "some", "indexOf", "lastIndexOf",
    "slice", "join", "concat"].forEach(function (fun) {
        u[fun] = function () { _arrayCall(fun, arguments); };
    });

    window.u = u;
})(window, document, Array);
