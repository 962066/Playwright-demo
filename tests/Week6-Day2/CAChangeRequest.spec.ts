import {test,expect} from "@playwright/test"

/*const username="admin"
const password="sooM+H@w1P2P"
const login=`${username}:${password}`
const value=btoa(login)
console.log(value);*/
let token='YWRtaW46c29vTStIQHcxUDJQ'
let ID:any

test.describe.serial('Execute the tests in serial mode',async()=>{

test('Create Change request using PW API',async({request})=>{
    let responsebody=await request.post('https://dev231684.service-now.com/api/now/table/change_request',
    {
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Basic ${token}`
        },
        data:{
            "short_description":"Change request"
        }
    })
let res=await responsebody.json()////converting json-object format is called as "Deserialiazation"
console.log(res)

let resStatus=responsebody.status()
console.log(resStatus)
expect(resStatus).toBe(201);

let resStatusText=responsebody.statusText()
console.log(resStatusText)
expect(resStatusText).toBe("Created")

ID=res.result.sys_id
console.log(ID)

})
test('Fetch the details of change request using PW API',async({request})=>{
    let responsebody=await request.get(`https://dev231684.service-now.com/api/now/table/change_request/${ID}`,
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Basic ${token}`
            }
        })
    let res=await responsebody.json()
    console.log(res)

    let resStatus=responsebody.status()
    console.log(resStatus)
    expect(resStatus).toBe(200)

    let resStatusText=responsebody.statusText()
    console.log(resStatusText)
    expect(resStatusText).toBe("OK")   
})
test('Update details of Change request',async({request})=>{
    let responsebody=await request.patch(`https://dev231684.service-now.com/api/now/table/change_request/${ID}`,
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Basic ${token}`
            },
            data:{
                "short_description":"Request changed to incident"
            }
        })
    let res=responsebody.json()
    console.log(res)

    let resStatus=responsebody.status()
    console.log(resStatus)
    expect(resStatus).toBe(200)

    let resStatusText=responsebody.statusText()
    console.log(resStatusText)
    expect(resStatusText).toBe("OK")
})
test('Delete the details from Change request',async({request})=>{
    let responsebody=await request.delete(`https://dev231684.service-now.com/api/now/table/change_request/${ID}`,
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Basic ${token}`
            }
        })
    let resStatus=responsebody.status()
    console.log(resStatus)
    expect(resStatus).toBe(204)

    let resStatusText=responsebody.statusText()
    console.log(resStatusText)
    expect(resStatusText).toBe("No Content")
})
})