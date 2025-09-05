import { test, expect } from "@playwright/test";
import{loginPage} from '../pages/loginPage'

test('Login' , async({page})=> {

const login = new loginPage(page);

await login.LaunchWebsite();
await login.Login('tomsmith', 'SuperSecretPassword!');

});