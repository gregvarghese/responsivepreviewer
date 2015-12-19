// Resize Frame Function
function ShowMobile(id,height,tb){
    var obj=document.getElementById(id);
    obj.style.width=height+'px';
    document.getElementById(tb).value='width: '+height+'px';
}

// Show Original Size Function (FullScreen)
function ShowDesktop(id){
     var obj=document.getElementById(id);
     obj.style.width='100%';
     document.getElementById('TB1').value='width: 100%';
}

function changeFrameURL(iframe, url){
      document.getElementById(iframe).setAttribute('src', url);
}