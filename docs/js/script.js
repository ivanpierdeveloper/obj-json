'use strict'
const cls = new Classmyalertjs();
const fnc = Funcmyalertjs;
// testing
// cls.messaggio("Call method messaggio");
// fnc.showMyAlert("titolo", "messaggio.", "var(--info)", "var(--white)", "var(--warning)", "var(--dark)");
function sendData() {
    console.table({
            "message": "OK",
            "code": 200
        })
        // questo modo è uguale al seguente ###
    var obj = {
        id: 101,
        email: "ivanpier@gmail.com",
        usr: "ivanpier",
        psw: "abc123",
        age: 44,
        method: "POST",
        avatar: "docs/avatar/default.png"
    }
    var obj2 = {
        id: 102,
        email: "ivanpier@gmail.com",
        usr: "ivanpier",
        psw: "abc123",
        age: 44,
        method: "POST",
        avatar: "docs/avatar/default.png"
    }
    var arr = [];
    arr.push(obj);
    arr.push(obj2);
    // fetchObjJson(arr);
    // ### seguente
    var obj_other = [{
            id: 1,
            email: "ivanpier@developer.com",
            usr: "ivanpier",
            psw: "ivanpeir123",
            age: 25,
            method: "POST",
            avatar: "img/avatar/default.png"
        },
        {
            id: 2,
            email: "ivanapple@developer.com",
            usr: "ivanapple",
            psw: "ivanapple123",
            age: 33,
            method: "POST",
            avatar: "img/avatar/avatar-3.png"
        },
        {
            id: 3,
            email: "pluto@developer.com",
            usr: "pluto",
            psw: "pluto123",
            age: 38,
            method: "POST",
            avatar: "img/avatar/avatar-2.png"
        },
        {
            id: 4,
            email: "paperino@developer.com",
            usr: "paperino",
            psw: "paperino12345",
            age: 40,
            method: "POST",
            avatar: "img/avatar/avatar-1.png"
        },
        {
            id: 5,
            email: "pippo@developer.com",
            usr: "pippo",
            psw: "pippo12345",
            age: 42,
            method: "POST",
            avatar: "img/avatar/avatar-4.png"
        },
        {
            id: 6,
            email: "topolino@developer.com",
            usr: "topolino",
            psw: "topolino12345",
            age: 45,
            method: "POST",
            avatar: "img/avatar/avatar-5.png"
        }
    ]
    fetchObjJson(obj_other);
}
async function fetchObjJson(receive) {
    let url = "docs/pages/obj-json.php";
    /*
    const frmData = new FormData();
    frmData.append("id1", 101);
    // or
    frmData.append("id2", obj.id2);
    */
    const hd = new Headers({
        "Content-Type": "application/json"
    });
    const rq = new Request(url, {
        method: "POST",
        mode: "cors",
        headers: hd,
        body: JSON.stringify({ receive })
    }); // ./rq
    await fetch(rq)
        .then((rs) => {
            if (rs.ok) {
                return Promise.resolve(rs.json());
            } else {
                return Promise.reject({
                    status: rs.status,
                    statusText: rs.statusText,
                    message: "Non trovo la pagina, errore interno del server o altro."
                })
            }
        })
        .then((data) => {
            // obj arr
            console.table({
                "data": data // singoli data[0].id  // all first element data[0]
            })

            // singoli obj
            /*
            console.table({
                    "data": data // $json_all (data.id1) $json_only_one data
                })
                */
            /*
            console.table({
                // exception $error
                "data": data.code // or data.message
            })
            */
            createDIV(data);
        })
        .catch((error) => {
            console.table({
                "code": error.status,
                "message": error.statusText,
                "testo": error.message
            })
        })
}
// create the view
async function createDIV(data) {
    const container = document.querySelector('.container');
    const div = document.createElement('div');
    div.style.setProperty('border', '1px solid var(--yellow)');
    div.style.setProperty('width', '95%');
    div.style.setProperty('margin-top', '5px');
    div.style.setProperty('border-radius', '8px');
    div.style.setProperty('padding', '18px');
    div.style.setProperty('font-size', '8pt');
    div.style.setProperty('font-family', 'Arial, sans-serif');
    div.style.setProperty('font-variant', 'small-caps');
    const table = document.createElement('table');
    const caption = document.createElement('caption');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const tfoot = document.createElement('tfoot');
    const htr = document.createElement('tr');
    const thID = document.createElement('th');
    const thEMAIL = document.createElement('th');
    const thUSR = document.createElement('th');
    const thPSW = document.createElement('th');
    const thAGE = document.createElement('th');
    const thMETHOD = document.createElement('th');
    const thAVATAR = document.createElement('th');
    const txtCAPTION = document.createTextNode("elenco utenti");
    caption.appendChild(txtCAPTION);
    thID.innerHTML = "id";
    // or
    const textEMAIL = document.createTextNode("e-mail");
    thEMAIL.appendChild(textEMAIL);
    thUSR.innerHTML = "username";
    thPSW.innerHTML = "password";
    thAGE.innerHTML = "age";
    thMETHOD.innerText = "method";
    thAVATAR.innerHTML = "avatar"

    htr.appendChild(thID);
    htr.appendChild(thEMAIL);
    htr.appendChild(thUSR);
    htr.appendChild(thPSW);
    htr.appendChild(thAGE);
    htr.appendChild(thMETHOD);
    htr.appendChild(thAVATAR);
    thead.appendChild(htr);
    table.appendChild(caption);
    table.appendChild(thead);
    /*
    var obj = [{
                id: 1,
                email: "ivanpier@developer.com",
                usr: "ivanpier",
                psw: "abcdw12345",
                age: 25,
                avatar: "img/avatar/default.png"
            },
            {
                id: 2,
                email: "ivanapple@developer.com",
                usr: "ivanapple",
                psw: "ivanapple12345",
                age: 33,
                avatar: "img/avatar/avatar-3.png"
            }
        ]
    */
    // var arr = Array();
    // arr.push(obj);
    /*
    console.table({
        "content arr": arr,
        "count arr": arr.length
    });
    */
    // obj.forEach(function(val, indice) {
    data.forEach(function(val) {
        const btr = document.createElement('tr');
        const tdID = document.createElement('td');
        const tdEMAIL = document.createElement('td');
        const tdUSR = document.createElement('td');
        const tdPSW = document.createElement('td');
        const tdAGE = document.createElement('td');
        const tdMETHOD = document.createElement('td');
        const tdAVATAR = document.createElement('td');
        const img = document.createElement('img');
        img.src = val.avatar;
        img.alt = "not image";
        img.style.setProperty('width', '50px');
        img.style.setProperty('height', '50px');
        img.style.setProperty('border', '1px solid var(--secondary');
        img.style.setProperty('border-radius', '100px');
        const a = document.createElement('a');
        a.href = val.avatar;
        a.target = "_blank";
        a.appendChild(img);
        tdID.innerText = val.id;
        tdEMAIL.innerText = val.email;
        tdUSR.innerText = val.usr;
        tdPSW.innerText = val.psw;
        tdAGE.innerText = val.age;
        tdMETHOD.innerText = val.method;
        tdAVATAR.appendChild(a);
        btr.appendChild(tdID);
        btr.appendChild(tdEMAIL);
        btr.appendChild(tdUSR);
        btr.appendChild(tdPSW);
        btr.appendChild(tdAGE);
        btr.appendChild(tdMETHOD);
        btr.appendChild(tdAVATAR);
        tbody.appendChild(btr);
    }); // ./forEach
    const ftr = document.createElement('tr');
    const ftd = document.createElement('td');
    ftd.colSpan = "7";
    ftd.innerText = `avatar inviati ${data.length - 1} avatar ricevuti ${data.length}`;
    ftr.appendChild(ftd);
    tfoot.appendChild(ftr);
    table.appendChild(tbody);
    table.appendChild(tfoot);
    table.cellSpacing = "10";
    table.cellPadding = "18";
    div.appendChild(table);
    container.appendChild(div);
}
// ./creata the view
// createDIV();