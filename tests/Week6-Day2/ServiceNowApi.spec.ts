import {test, expect} from "@playwright/test"

//btoa inbuilt base64 encoder

const username="admin"
const password="sooM+H@w1P2P"
const login=`${username}:${password}`
const value=btoa(login)
 console.log(value);

//using url
let token="YWRtaW46c29vTStIQHcxUDJQ"

let ID:any

test.describe.serial("Execute in serial mode", async()=>{
test('Create incident using PW API', async({request})=>{

//object to json is called "Serialization"
let responsebody=await request.post('https://dev231684.service-now.com/api/now/table/incident',
    {
        headers: {
            "Content-Type": "application/json",
            //"Authorization": `Basic ${value}`//btoa(inbuilt)
            "Authorization": `Basic ${token}`//url encoded
        },
        data: {
            "description": "Create incident using Playwright API"
        }
    })

let res= await responsebody.json()  //converting json-object format is called as "Deserialiazation"
console.log(res);

let resstatus=responsebody.status()
console.log(resstatus);

expect (resstatus).toBe(201)

let resstatusText=responsebody.statusText()

console.log(resstatusText);
expect(resstatusText).toBe("Created")

ID=res.result.sys_id
console.log(ID);

})

test('fetch incident using PW API', async({request})=>{

//object to json is called "Serialization"
let responsebody=await request.get(`https://dev231684.service-now.com/api/now/table/incident/${ID}`,
    {
        headers: {
            "Content-Type": "application/json",
            //"Authorization": `Basic ${value}`
            "Authorization": `Basic ${token}`
        }
    })

let res= await responsebody.json()  //converting json-object format is called as "Deserialiazation"
console.log(res);

let resstatus=responsebody.status()
console.log(resstatus);

expect (resstatus).toBe(200)

let resstatusText=responsebody.statusText()

console.log(resstatusText);
expect(resstatusText).toBe("OK")


})

test('update incident using PW API', async({request})=>{

//object to json is called "Serialization"
let responsebody=await request.patch(`https://dev231684.service-now.com/api/now/table/incident/${ID}`,
    {
        headers: {
            "Content-Type": "application/json",
            //"Authorization": `Basic ${value}`
            "Authorization": `Basic ${token}`
        },
        data:{

           "short_description" : "partial update of the incident"
        }
    })

let res= await responsebody.json()  //converting json-object format is called as "Deserialiazation"
console.log(res);

let resstatus=responsebody.status()
console.log(resstatus);

expect (resstatus).toBe(200)

let resstatusText=responsebody.statusText()

console.log(resstatusText);
expect(resstatusText).toBe("OK")


})

test('delete incident using PW API', async({request})=>{

//object to json is called "Serialization"
let responsebody=await request.delete(`https://dev231684.service-now.com/api/now/table/incident/${ID}`,
    {
        headers: {
            "Content-Type": "application/json",
            //"Authorization": `Basic ${value}`
             "Authorization": `Basic ${token}`
        }
        
    })

// let res= await responsebody.json()  //converting json-object format is called as "Deserialiazation"
// console.log(res);

let resstatus=responsebody.status()
console.log(resstatus);

expect (resstatus).toBe(204)

let resstatusText=responsebody.statusText()

console.log(resstatusText);
expect(resstatusText).toBe("No Content")


})

})