(function($){

    var signin$ = $('#signin');
    var user$ = $('#user');
    var pass$ = $('#pass');

    signin$
    .click((function(e) {

        e.preventDefault();

        $.post('/login?', {user:user$.val(),pass:pass$.val()}, (function(data) {

            if(data.success == true) {
                window.location = '/media';
            }else{

            }

        }).bind(this));

    }).bind(signin$))

    window.history.replaceState('Object', 'Title', '/');

})(jQuery);
