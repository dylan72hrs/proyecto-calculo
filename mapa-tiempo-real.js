// mapa-tiempo-real.js

window.onload = function() {
    const reportContainer = window.opener.document.getElementById('report-container');
    const realTimeMap = document.getElementById('real-time-map');
    
    if (reportContainer) {
        realTimeMap.innerHTML = reportContainer.innerHTML;
        
        const commentBoxes = realTimeMap.getElementsByClassName('comment-box');
        while (commentBoxes.length > 0) {
            commentBoxes[0].parentElement.removeChild(commentBoxes[0]);
        }
    }
};
