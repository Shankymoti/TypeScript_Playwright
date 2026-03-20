

import {test,expect } from '@playwright/test'

test.describe('Group1', async()=>{
    test('Test1', async({page})=>{
        console.log(" this is Test1 ......")    
    })

    test('Test2', async({})=>{
        console.log(" this is Test2 ......")
})

})

test.describe('Group2', async()=>{
    test('Test3', async({})=>{
        console.log(" this is Test3 ......")    
    })

    test('Test4', async({})=>{
        console.log(" this is Test4 ......")
})

})

//npx playwright test tests/Ex41_grouping.spec.ts --grep Group2
//npx playwright test tests/Ex41_grouping.spec.ts --grep Group1 --headed


/*
import { test, expect } from '@playwright/test';


test.describe('Group1',async()=>{
    
    test('Test1', async () => {
        console.log(" this is Test1 ......")
    });


    test('Test2', async () => {
        console.log(" this is Test2 ......")
    });

})


test.describe('Group2',async()=>{
  
    test('Test3', async () => {
        console.log(" this is Test3 ......")
    });


    test('Test4', async () => {
        console.log(" this is Test4 ......")
    });

})

*/