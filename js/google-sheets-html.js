/*!
 * 
 * Google Sheets To HTML v0.9b
 * 
 * To use, simply replace the "tq?key=" value in the
 * URL below with your own unique Google document ID
 * 
 * The Google document's sharing must be set to public
 * 
 */

google.charts.load('current', {packages: ['table']});
var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1DbGEGbPlwSlNE62GkGlj0tZVy-c_tVc_Q5DIvWWOwik&output=html&usp=sharing');
    query.setQuery('SELECT A, B, C, D label A "Duration", B "Song", C "Requested By", D "URL"');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));
    visualization.draw(data, {
        allowHtml: true,
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualization);
