const { defineConfig } = require("cypress");

module.exports = defineConfig({
   projectId: "g3qq4o",
  e2e: {

     video: true, // this will disable the video recording for the test run
     videoCompression: 32, // this will set the video compression level to 32
     screenshotOnRunFailure: true, // this will take a screenshot on test failure
     videosFolder: "myvideo", // this will set the folder where the videos will be stored
     screenshotsFolder: "myscreenshots", // this will set the folder where the screenshots will be stored 
     trashAssetsBeforeRuns:false, // this setting will make sure previous runs related artificats like
     //screen shots , videos will be cleared.
     includeShadowDom:true,

     baseUrl:'http://192.168.24.87:8080',
     //http://192.168.24.87:8080
    //experimentalStudio:true, 
    //supportFile:
    // this command is used to enabled the studio command in the test runner 
    //there is a torch icon exist for your test suite and test case when you mouseover on the test case or test suite

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
