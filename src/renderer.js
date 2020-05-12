$ = window.jQuery = require("jquery");


$(document).ready(() => {
    var buttons = $('.toggle')
    buttons.each((i, button) => {
        console.log(i, button)
        $(button).attr('active', i > 2 ? 'false' : 'true');
    });

    buttons.click((event) => {
        console.log(event)
        let button = $(event.currentTarget)
        button.attr('active', button.attr('active') == 'true' ? 'false' : 'true');
        if(buttons.hasClass('pt')){
            $('.p' + button.attr('id') + 'tog').toggle(1000);
        }
    })

    $('pt').click((a,b) => {
        console.log(a,b);

    })
});