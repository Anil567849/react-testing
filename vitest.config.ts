

import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        environment: 'jsdom', // // by default our test execute on our node environment but node doesn't know browswer api, so can we test our react-components. For that we need jsdom. It emulates the browser environment.
        globals: true, // we now have vitest modules globally, now we don't need to import module every time
        setupFiles: 'tests/setup.ts' // this file will run every time before test files
    }
})