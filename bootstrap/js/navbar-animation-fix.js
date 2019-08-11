$('#menu-dropdown').on('show.bs.collapse', function() {
    $('#topcasafina-banner').css('transform', 'translate(-50% , 10%');
});

$('#menu-dropdown').on('hide.bs.collapse', function() {
    $('#topcasafina-banner').css('transform', 'translate(-50% , -50%');
});