console.log('Hey!');

var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", {fps: 10, qrbox: 250});

function onScanSuccess(qrCodeMessage) {
    // handle on success condition with the decoded message
    html5QrcodeScanner.clear();
    // ^ this will stop the scanner (video feed) and clear the scan area.
}

html5QrcodeScanner.render(onScanSuccess);