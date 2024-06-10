describe("Module 3: WebdriverIO Introduction", () => {
  beforeEach(async () => {
    await browser.url(
      "https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard"
    );
  });

  it("Test to validate email error msg", async () => {
    const patientsButton = await $("div[routerLink='/patients']");
    const addNewPatient = await $(
      "//button[contains(text(),'Add New Patient')]"
    );
    const patientNameInput = await $("input[name='Name']");
    const saveButton = await $("div.button-container>button.e-primary");
    const emailError = await $("//label[contains(text(),'Enter valid email')]");

    await patientsButton.click();
    await addNewPatient.click();
    await patientNameInput.setValue("John Doe");
    await saveButton.click();
    expect(await emailError.getText()).toEqual("Enter valid email");
  });

  it("Test to validate appointment planner", async () => {
    const scheduleButton = await $("div[routerLink='/calendar']");
    const appointmentPlanner = await $(
      "ejs-schedule.doctor-appointment-planner"
    );

    await scheduleButton.click();
    await expect(appointmentPlanner).toBeDisplayed();
  });

  it("Test to validate link from dashboard to ", async () => {
    const appointmentsLink = await $("//a[text()='Book Appointments']");
    const appointmentPlanner = await $(
      "//ejs-schedule[@cssclass='doctor-appointment-planner']"
    );

    await appointmentsLink.click();
    await expect(appointmentPlanner).toBePresent();
  });

  it("Test to validate link from dashboard to Doctors availability", async () => {
    const viewAllLink = await $("//a[contains(text(),'View All')]");
    const doctorNembo = await $("//div[text()='Dr. Nembo Lukeni']");

    await viewAllLink.click();
    await expect(doctorNembo).toHaveText("Dr. Nembo Lukeni");
  });
});
