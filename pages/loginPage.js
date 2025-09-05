exports.loginPage = class loginPage {


  constructor(page) {
    this.page = page;
    this.usernameTextbox = page.getByRole("textbox", { name: "Username" });
    this.passwordTextbox = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: " Login" });
  }

  async LaunchWebsite(){
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async Login(userName, passWord) {
    await this.usernameTextbox.fill(userName);
    await this.passwordTextbox.fill(passWord);
    await this.loginButton.click();
  }
}
