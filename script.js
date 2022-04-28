function send(){
      //console.log(createUrl());
      var oReq = new XMLHttpRequest();
      oReq.addEventListener("load", function() {
          document.getElementById("translated_text").value = JSON.parse(this.responseText).translations[0].text;

      });
      oReq.open("POST", createUrl(), true);
      oReq.send();
      
}

function createUrl() {
    return `https://api-free.deepl.com/v2/translate?auth_key=${document.getElementById("key").value}&text=${document.getElementById("text").value}&${(document.getElementById("source_lang").value == "") ? "" : document.getElementById("source_lang").value + "&"}target_lang=${document.getElementById("target_lang").value}`;
}

document.getElementById("translate-btn").addEventListener("click", send);
