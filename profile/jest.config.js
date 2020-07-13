module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    setupFilesAfterEnv: [
          "./src/test/setup.ts"
    ],
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/test/"
    ],
    coverageReporters: [
        "html",
        "text",
        [
            "lcov",
            {
                projectRoot: ".."
            }
        ]
    ]
};