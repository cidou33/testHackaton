const cross = document.getElementById('CDburgerCross');
const barNav = document.getElementById('CDulHeader');
const linkMembers =document.getElementById('CDlinkMembers');
const linkBecome =document.getElementById('CDlinkBecome');
const midBox = document.getElementById('CDstickMid');
const topBox = document.getElementById('CDstickTop');
const bottomBox = document.getElementById('CDstickBot');

function openClose(){
    barNav.classList.toggle('CDulHidden');
    linkMembers.classList.toggle('CDnone');
    linkBecome.classList.toggle('CDnone');
    topBox.classList.toggle('CDtopStick');
    midBox.classList.toggle('CDmidStick');
    bottomBox.classList.toggle('CDbottomStick');
}

cross.addEventListener('click',openClose);