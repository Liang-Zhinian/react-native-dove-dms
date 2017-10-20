const dmssoap = {

    send: (url: string, method: string, xml: string, callback: (err, data) => void) => {
        var request = new XMLHttpRequest();
        request.onreadystatechange = (e) => {
          if (request.readyState !== 4) {
            return;
          }
        
          if (request.status === 200) {
            console.log('success', request.responseText);
            callback(null, request.responseText);
          } else {
            console.warn('error ' + request.responseText);
            callback(new Error(500, request.responseText), null);
          }
        };

        request.open(method, url, true);

        // Set some headers: the body of this POST request is XML
        request.setRequestHeader('Content-Type', 'application/soap+xml; charset=utf-8');
        request.setRequestHeader('Content-Length', xml.length);
        // This header is a required part of the SOAP protocol
        request.setRequestHeader("SOAPAction", '""');

        // Now send an XML-formatted SOAP request to the server
        request.send(xml);
    }
};

export default dmssoap;