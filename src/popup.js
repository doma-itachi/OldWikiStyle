window.onload=function(){
    //set i18n
    document.getElementById("description").innerHTML=chrome.i18n.getMessage("ext_desc");

    document.getElementById("version").innerHTML="v"+chrome.runtime.getManifest().version;

    document.getElementById("ghlink").addEventListener("click",function(){window.open("https://github.com/doma-itachi/OldWikiStyle","_blank")});
};