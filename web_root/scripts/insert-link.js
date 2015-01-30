/*global $j*/
$j(function() {
    'use strict';
    $j.get('/public/link.html', function(linkHtml) {
        var appendSelector = $j('#login-inputs');
        appendSelector.append(linkHtml);
    });
});