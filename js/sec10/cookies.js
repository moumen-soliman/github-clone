document.cookie = "username=mooumen soliman; expires=1645744851023;"
document.cookie = "age=100;"
document.cookie = "city=cario;"
document.cookie = "lang=javascript;"

const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const nameSplit = value.split(`; ${name}=`);

    return nameSplit.pop().split(";").shift();
}


// key
// value
// expire
const setCookie = (key, value, expireDateByDay) => {
    let currentDateByMilliSeconds = new Date().getTime();
    let updatedDate = currentDateByMilliSeconds + (expireDateByDay*24*60*60*1000);

    let expiresData = `expires=${updatedDate}`
    document.cookie = `${key}=${value};${expiresData};`
}

