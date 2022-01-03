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
            id: 101,
            email: "ivanpier@gmail.com",
            usr: "ivanpier",
            psw: "abc123",
            age: 44,
            method: "POST",
            avatar: "docs/avatar/default.png"
        },
        {
            id: 102,
            email: "ivanpier_2@gmail.com",
            usr: "ivanpier-2",
            psw: "abc123-2",
            age: 42,
            method: "POST-2",
            avatar: "docs/avatar/default.png"
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
        method: "PUT",
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
        })
        .catch((error) => {
            console.table({
                "code": error.status,
                "message": error.statusText,
                "testo": error.message
            })
        })
}