export class EcomChangePage {
    constructor(page) {
      this.page = page;
      this.editAccount = page.getByRole('link', {name: 'Edit your account information'}); 
      this.FirstName_box = page.getByPlaceholder('First Name');
      this.LastName_box = page.getByPlaceholder('Last Name');
      this.continue_btn =  page.locator("input[value='Continue']");
      this.sucess_Message = page.getByText("Success: Your account has been successfully updated.");
  
    }
  
    async clickOnEditMyAccount() {
      await this.editAccount.click();
    }
  
    async editFirstName(firstName) {
      await this.FirstName_box.fill(firstName);
    }
  
    async editLastName(lastName) {
      await this.LastName_box.fill(lastName);
    }
  
    async clickOnContinue() {
      await this.continue_btn.click();
    }
  };