import {test,expect} from  "@playwright/test"

/*const username="admin"
const password="sooM+H@w1P2P"
const login=`${username}:${password}`
const value=btoa(login)
console.log(value)*/
let token="YWRtaW46c29vTStIQHcxUDJQ"
let ID:any

test.describe.serial("Execute in serial mode",async()=>{


test('Create Problem request using PW API',async({request})=>{
    let responsebody=await request.post('https://dev231684.service-now.com/api/now/table/problem',
        {
            headers:{
                "content-type":"application/json",
                "Authorization":`Basic ${token}`
            },
            data:{
                "description":"Create a problem request"
            }
        })
let res=await responsebody.json()
console.log(res)

let resStatus=responsebody.status()
console.log(resStatus)
expect(resStatus).toBe(201)

let resStatusText=responsebody.statusText()
console.log(resStatusText)
expect(resStatusText).toBe("Created")

ID=res.result.sys_id
console.log(ID)

})
test('Fetch details of problem',async({request})=>{
    let responsebody=await request.get(`https://dev231684.service-now.com/api/now/table/problem/${ID}`,
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
test('Update details of problem',async({request})=>{
    let responsebody=await request.patch(`https://dev231684.service-now.com/api/now/table/problem/${ID}`,
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Basic ${token}`
            },
            data:{
                "description":"Problem resolved"
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
test('Delete details of problem',async({request})=>{
    let responsebody=await request.delete(`https://dev231684.service-now.com/api/now/table/problem/${ID}`,
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Basic ${token}`
            }
        })
    //let res=await responsebody.json()
    //console.log(res)

    let resStatus=responsebody.status()
    console.log(resStatus)
    expect(resStatus).toBe(204)

    let resStatusText=responsebody.statusText()
    console.log(resStatusText)
    expect(resStatusText).toBe("No Content")
})
})


