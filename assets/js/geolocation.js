// "use strict";

// let user = {
// 	"country": "",
// 	"regionName": ""
// }

// const sendUser = (user) => {
// 	var xhr = new window.XMLHttpRequest()

//     xhr.open('POST', "http://localhost:3000/locate", true);
//     xhr.timeout = 3000
//     xhr.setRequestHeader('Content-Type', 'application/json');


//     xhr.onreadystatechange = function () {
//       if(xhr.readyState === 4 && xhr.status !== 0) {
//         var result = {}
//         console.log('xhr.responseText', xhr.responseText)
//       }
//     };

//     xhr.onerror = function () {
//       var result = {}
//       result.status = 404
//       result.responseText = 'failed to reach server'
//     }

//     xhr.ontimeout = function (x) {
//       var result = {}
//       result.status = xhr.status
//       result.responseText = "timeout"
//     }

//     console.log('stringify', JSON.stringify(user))

//     xhr.send(JSON.stringify(user));
// }

// const geolocation = (user) => {
//     let tempUser = {}

//     const xhr = new XMLHttpRequest()
//     xhr.open('GET', 'http://ip-api.com/json')

//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4) {
//             try {
//                 if (!(xhr.status >= 200 && xhr.status < 300)) {
//                     throw new Error(xhr.responseText)
//                 }

//                 var json = JSON.parse(xhr.responseText)

//                 user = {
// 	                "city": json.city,
//                 	"country": json.country,
// 	                "regionName": json.regionName,
// 	                "zip": json.zip,
// 	                "timezone": json.regionName
// 	            }

// 				sendUser(user)
//             } catch (error) {
//                 console.error('parsing failed', error)
// 				sendUser({})
//             }
//         }
//     }.bind(this)

//     xhr.send()
// }

// geolocation()
