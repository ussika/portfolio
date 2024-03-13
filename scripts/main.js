

const MobileContextMenu = document.getElementById("Mobile_ContextMenu");
const MobileServiceMenu= document.getElementById("MobileservicesContextMenu");

function open_mobile_menu() {

    if(MobileContextMenu.style.display=='block')
    { 
        MobileContextMenu.style.display='none';
    }else{
        MobileContextMenu.style.display="block";
    }
}


function hideMenu() {
  if(!window.menuHovered){
  ServiceMenu.style.display='none';
}
}





