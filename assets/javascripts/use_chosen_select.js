// do not access jQuery with $("...")
// See http://codeimpossible.com/2010/01/13/solving-document-ready-is-not-a-function-and-other-problems/
jQuery(document).ready(function(){
    jQuery(".chosen-select").chosen();

    // HACK fix some css settings changed, e.g. in top-menu-items should be done in the css files instead
    jQuery(".chosen-container").css({
        'margin-bottom': '4px',
        'margin-right': '15px',
        'margin-top': '6px'
    });
    jQuery(".chosen-container ul").css({
        'height': '200px'
    });
    jQuery(".chosen-container li").css({
        'float': 'none',
        'position': 'static',
        'border-left': 'none'
    });
    jQuery(".chosen-container .chosen-results, .chosen-container a").css('color', '#444444');
});
