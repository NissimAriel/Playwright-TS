import {test, expect} from '@playwright/test'
import { request } from 'http';



interface IResponse {
    name?: string;
    job?: string;
    id?: string;
    createdAt?: string;
}

const baseUrl = 'https://reqres.in';  

test.describe("API Test Block", () => {

     

    test("Validate getting a single user by API call", async({request}) => {

        const responseUserId2Data = {
            "data": {
              "id": 2,
              "email": "janet.weaver@reqres.in",
              "first_name": "Janet",
              "last_name": "Weaver",
              "avatar": "https://reqres.in/img/faces/2-image.jpg"
            },
            "support": {
              "url": "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
              "text": "Tired of writing endless social media content? Let Content Caddy generate it for you."
            }
          }
        
        const singleUserResponse = await request.get(`${baseUrl}/api/users/2`);
        expect(singleUserResponse.status()).toBe(200)
        expect(await singleUserResponse.json()).toEqual(responseUserId2Data);
        const jsonResponse = await singleUserResponse.json();
        expect(jsonResponse.data).toHaveProperty( "last_name", "Weaver");
        expect(jsonResponse.data).toHaveProperty( "avatar", "https://reqres.in/img/faces/2-image.jpg");
    })

    test("Validate user creation by API call", async({request}) => {

        const data = {
            "name": "Nissim",
            "job": "Automation leader"
        }
        const userCreationReaponse = await request.post(`${baseUrl}/api/users`, {data});
        expect(userCreationReaponse.status()).toBe(201);
        expect(userCreationReaponse.statusText()).toBe("Created");
        //const jsonResponse: ICreateResponse = await userCreationReaponse.json();    // One way with interface - More safe
        const jsonResponse = await userCreationReaponse.json();                       // Second way simple less safe less defined...
        expect(jsonResponse).toHaveProperty("name","Nissim");                
        expect(jsonResponse).toHaveProperty("job","Automation leader");
        expect(jsonResponse.id).toBeDefined();
        expect(jsonResponse.createdAt).toBeDefined();
    }) 

    test("Valiadte update information by PATCH API method", async({request}) => {

        const data = {
            "name": "morpheus",
            "job": "zion residents leader"
        }

        const updatedUserResponse = await request.patch(`${baseUrl}/api/users/2`, {data});
        const jsonResponse: IResponse = await updatedUserResponse.json();
        expect(updatedUserResponse.status()).toBe(200);
        expect(updatedUserResponse.statusText()).toBe("OK");
        expect(jsonResponse.name).toEqual(data.name);
        expect(jsonResponse.job).toEqual(data.job);
    })

    test("Validate Delete user by API call", async ({request}) => {

        const deleteUserResponse = await request.delete(`${baseUrl}/api/users/2`);
        expect(deleteUserResponse.status()).toBe(204);
        expect(deleteUserResponse.statusText()).toBe("No Content");
        
    })

    
})
