function myLoad(){
    loadTextFileAjaxSync = function (filePath, mimeType)
    {
      var xmlhttp=new XMLHttpRequest();
      xmlhttp.open("GET",filePath,false);
      if (mimeType != null) {
        if (xmlhttp.overrideMimeType) {
          xmlhttp.overrideMimeType(mimeType);
        }
      }
      xmlhttp.send();
      if (xmlhttp.status==200 && xmlhttp.readyState == 4 )
      {
        return xmlhttp.responseText;
      }
      else {
        // TODO Throw exception
        return null;
      }
    }
    var jsonfile = loadTextFileAjaxSync("Biblija.json", "application/json");

    var json = JSON.parse(jsonfile);

    var testTag = document.createElement("div");
    testTag.innerHTML = json[0].voved[0];
    document.querySelector("body").appendChild(testTag);
}