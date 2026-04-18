import fetch from "node-fetch";
import { expect } from "chai";
import Ajv from "ajv";
const ajv = new Ajv();
const schemaRegister = {
    type: "object",
    properties: {
        id: { type: "number" },
        token: { type: "string" }
    },
    required: ["id", "token"],
    additionalProperties: false
};
const schemaUser = {
    type: "object",
    properties: {
        data: {
            type: "object",
            properties: {
                id: { type: "number" },
                email: { type: "string" },
                first_name: { type: "string" },
                last_name: { type: "string" }
            },
            required: ["id", "email", "first_name", "last_name"]
        }
    },
    required: ["data"]
};
describe("API Tests Suite", function () {
    const baseURL = "https://reqres.in";
    const schemaRegister = {
        "type": "object",
        "properties": {
            "id": { "type": "number" },
            "token": { "type": "string" }
        },
        "required": ["id", "token"]
    };
    //test case 1 - get - harus bisa ngambil data single user
    it("Get - Get single user", async function () {
        const response = await fetch(`${baseURL}/api/users/2`, {
            method: "GET",
            headers: {"x-api-key": "reqres_73cf8090ed9d410ab8e0ad831e50df00"}
        });
        const body = await response.json();
        console.log("GET Single User Status:", response.status);
        console.log(body);
        expect(response.status,'Status code harus 200').to.equal(200);
        expect(body.data.id).to.equal(2);
        expect(body.data.first_name).to.equal("Janet");
    });
    
    // test case 2 - get - harus ngambil daftar user (list user)
    it("GET - Get list user", async function () {
        const response = await fetch(`${baseURL}/api/users?page=2`, {
            method: "GET",
            headers: {"x-api-key": "reqres_73cf8090ed9d410ab8e0ad831e50df00"}
        });
        const body = await response.json();
        console.log("GET List User Status:", response.status);
        console.log(body);

        expect(response.status, "Status code harus 200").to.equal(200);
        expect(body.page).to.equal(2);
        expect(body.data).to.be.an("array");
    });
    // test case 3 - post - harus bisa mendaftarkan user baru dengan sukses    
    it("POST - Register", async function () {
        const response = await fetch(`${baseURL}/api/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key" : "reqres_73cf8090ed9d410ab8e0ad831e50df00"
            },
            body: JSON.stringify({
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            })
        });
        const body = await response.json();
        console.log("POST Register Status:", response.status);
        console.log(body);
        const valid = ajv.validate(schemaRegister, body);
        expect(valid, "Struktur JSON salah!").to.be.true;
        expect(response.status,'Status code harus 200 untuk register sukses').to.equal(200);
        expect(body).to.have.property("id");
        expect(body).to.have.property("token");

    });
});