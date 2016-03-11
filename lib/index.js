/**
 * @author Lcf.vs
 * @license Copyright MIT 2016
 * @repo https://github.com/Lcfvs/renderable-html
 * @module lib
 */

void function () {
    'use strict';

    var renderable,
        htmlize,
        slice,
        html;

    renderable = require('renderable');
    htmlize = require('htmlize');

    slice = Function.call.bind(Array.prototype.slice);

    html = function(buffer) {
        var document,
            renderer;

        document = htmlize(buffer.toString());
        renderer = Object.create(null);

        renderer.render = function() {
            return document.cloneNode(true);
        };

        return renderer;
    };

    html.register = function() {
        return renderable.register(html, slice(arguments));
    };

    html.render = function() {
        return renderable.render(html, slice(arguments));
    };

    module.exports = html;
}();