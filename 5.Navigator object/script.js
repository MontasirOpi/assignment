function getBrowserInfo() {
    var browserName = navigator.userAgent;
    var browserVersion = navigator.appVersion;
    
    return {
      name: browserName,
      version: browserVersion
    };
  }
  
  function displayBrowserInfo() {
    var browserInfo = getBrowserInfo();
    document.getElementById('browserName').textContent = browserInfo.name;
    document.getElementById('browserVersion').textContent = browserInfo.version;
  }