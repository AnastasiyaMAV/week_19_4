const standartBtn = document.getElementById("sendStandardData");
const staticBtn = document.getElementById("sendStaticData");
const deleteBtn = document.getElementById("deleteData");
const deleteStandartBtn = document.getElementById("deleteStandartData");
const deleteStaticBtn = document.getElementById("deleteStaticData");

deleteBtn.addEventListener("click", () => {
    document.getElementById('emailInput').value = "";
    document.getElementById('domenInput').value = "";
    document.getElementById('dataRegDomenInput').value = "";
    document.getElementById('telInput').value = "";
});

standartBtn.addEventListener("click", () => {
    let validator = new Validator();
    document.getElementById('emailStandardInput').value = validator.isEmail(document.getElementById('emailInput').value);
    document.getElementById('domenStandardInput').value = validator.isDomain(document.getElementById('domenInput').value);
    document.getElementById('dataRegDomenStandardInput').value = validator.isDate(document.getElementById('dataRegDomenInput').value);
    document.getElementById('telStandardInput').value = validator.isPhone(document.getElementById('telInput').value);
});

deleteStandartBtn.addEventListener("click", () => {
    document.getElementById('emailStandardInput').value = "";
    document.getElementById('emailStandardInput').title = "";
    document.getElementById('domenStandardInput').value = "";
    document.getElementById('domenStandardInput').title = "";
    document.getElementById('dataRegDomenStandardInput').value = "";
    document.getElementById('dataRegDomenStandardInput').title = "";
    document.getElementById('telStandardInput').value = "";
    document.getElementById('telStandardInput').title = "";
});

staticBtn.addEventListener("click", () => {
    document.getElementById('emailStaticInput').value = ValidatorStatic.isEmail(document.getElementById('emailInput').value);
    document.getElementById('domenStaticInput').value = ValidatorStatic.isDomain(document.getElementById('domenInput').value);
    document.getElementById('dataRegDomenStaticInput').value = ValidatorStatic.isDate(document.getElementById('dataRegDomenInput').value);
    document.getElementById('telStaticInput').value = ValidatorStatic.isPhone(document.getElementById('telInput').value);
});

deleteStaticBtn.addEventListener("click", () => {
    document.getElementById('emailStaticInput').value = "";
    document.getElementById('emailStaticInput').title = "";
    document.getElementById('domenStaticInput').value = "";
    document.getElementById('domenStaticInput').title = "";
    document.getElementById('dataRegDomenStaticInput').value = "";
    document.getElementById('dataRegDomenStaticInput').title = "";
    document.getElementById('telStaticInput').value = "";
    document.getElementById('telStaticInput').title = "";
});

class Validator{
    constructor(emailStandardInput, domenStandardInput, dataRegDomenStandardInput, telStandardInput){
        this.emailStandardInput = emailStandardInput;
        this.domenStandardInput = domenStandardInput;
        this.dataRegDomenStandardInput = dataRegDomenStandardInput;
        this.telStandardInput = telStandardInput;
    }
    
    isEmail(emailStandardInput){
        let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        if (emailStandardInput.match(mailFormat)) {
            return true;
        }
        else {
            document.getElementById('emailStandardInput').title = "Ваш адрес электронной почты введен неверно! (Пример: example-678@mail.com)";
            return false;
        }
    }

    isDomain(domenStandardInput){
        let domenFormat = /^[A-Z0-9]+.[A-Z]{2,16}$/i;
        if (domenStandardInput.match(domenFormat)) {
            return true;
        }
        else {
            document.getElementById('domenStandardInput').title = "Ваш домен введен неверно! (Пример: domen.ru)";
            return false;
        }
    }

    isDate(dataRegDomenStandardInput){
        let dataFormat = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        if (dataRegDomenStandardInput.match(dataFormat)) {
            return true;
        }
        else {
            document.getElementById('dataRegDomenStandardInput').title = "Дата введена неверно! (Пример: 14.10.2021)";
            return false;
        }
    }

    isPhone(telStandardInput){
        let phoneFormat = /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/;
        if (telStandardInput.match(phoneFormat)) {
            return true;
        }
        else {
            document.getElementById('telStandardInput').title = "Ваш телефон некорректен! Пример: +7 xxx xxx xx xx";
            return false;
        }
    }   
}

class ValidatorStatic{
    static isEmail(emailStaticInput){
        let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        if (emailStaticInput.match(mailFormat)) {
            return true;
        }
        else {
            document.getElementById('emailStaticInput').title = "Ваш адрес электронной почты введен неверно! (Пример: example-678@mail.com)"
            return false;
        }
    }
    
    static isDomain(domenStaticInput){
        let domenFormat = /^[A-Z0-9]+.[A-Z]{2,16}$/i;
        if (domenStaticInput.match(domenFormat)) {
            return true;
        }
        else {
            document.getElementById('domenStaticInput').title = "Ваш домен введен неверно! (Пример: domen.ru)";
            return false;
        }
    }

    static isDate(dataRegDomenStaticInput){
        let dataFormat = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        if (dataRegDomenStaticInput.match(dataFormat)) {
            return true;
        }
        else {
            document.getElementById('dataRegDomenStaticInput').title = "Дата введена неверно! (Пример: 14.10.2021)";
            return false;
        }
    }

    static isPhone(telStaticInput){
        let phoneFormat = /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/;
        if (telStaticInput.match(phoneFormat)) {
            return true;
        }
        else {
            document.getElementById('telStaticInput').title = "Ваш телефон некорректен! Примеры: +7 xxx xxx xx xx";
            return false;
        }
    }
}