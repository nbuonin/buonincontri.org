window.addEventListener('load', function() {
    var toggler = document.querySelector('.navbar-toggler');
    var collapse = document.querySelector('#nav-collapse');
    toggler.addEventListener('click', function(evt) {
        collapse.classList.toggle('nav-collapse-show');
    });
});

var getOutboundLink = function(url) {
    gtag('event', 'click', {
        'event_category': 'outbound',
        'event_label': url,
        'transport_type': 'beacon',
        'event_callback': function(){window.open(url, '_blank');}
        'event_timeout': 1500
    });
};
