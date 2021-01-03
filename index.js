$(window).resize(function() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        $("#navbarContentList").addClass("flex-column");
    } 

    if (window.matchMedia("(min-width: 769px)").matches) {
        $("#navbarContentList").removeClass("flex-column");
    }
});