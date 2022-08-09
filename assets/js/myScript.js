let option = {
    animation: true,
    delay: 2500
};

function Toasty(){
    let getToastHtmlElement = document.getElementById("toastNotification");
    let toastElement =  new bootstrap.Toast(getToastHtmlElement, option);
    toastElement.show();
}

function ToastyPay(){
    let getToastHtmlElement = document.getElementById("toastNotificationPay");
    let toastElement =  new bootstrap.Toast(getToastHtmlElement, option);
    toastElement.show();
}


