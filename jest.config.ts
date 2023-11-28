export default {
  preset: "ts-jest",
  roots: ["<rootDir>/src", "<rootDir>/tests"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
    "\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg|gif)$":
      "jest-transform-stub",
  },
};
