let option = {
    animation: true,
    delay: 2500
};

function Toasty(){
    let getToastHtmlElement = document.getElementById("toastNotification");
    let toastElement =  new bootstrap.Toast(getToastHtmlElement, option);
    toastElement.show();
}