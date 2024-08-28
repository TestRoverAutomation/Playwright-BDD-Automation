import { createBdd } from 'playwright-bdd';


const { Before, After, BeforeAll, AfterAll,  } = createBdd();

Before(async()=>{
    console.log("This is a Before.")
});

After(async()=>{
    console.log("This is a After.")
});

BeforeAll(async()=>{
    console.log("This is a BeforeAll.")
});

AfterAll(async()=>{
    console.log("This is a AfterAll.")
});