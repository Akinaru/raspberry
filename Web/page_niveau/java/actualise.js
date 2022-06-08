$(function() {
    startRefresh();
});

function startRefresh() {
    setTimeout(startRefresh,1000);
    $.get('load.php', function(data) {
        $('#content_div_id').html(data);    
    });
}
