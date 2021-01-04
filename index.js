function detectMediaSize(mediaQueryList) {
    if (mediaQueryList.matches) {
        $("#navbarContentList").addClass("flex-column");
    } else {
        $("#navbarContentList").removeClass("flex-column");
    }
}

var maxWidthMatch = window.matchMedia("(max-width: 768px)");
maxWidthMatch.addListener(detectMediaSize);
window.onload = detectMediaSize(maxWidthMatch);
