const path = require("path")
const { override, addWebpackAlias } = require("customize-cra")

const resolvePath = src => path.resolve(__dirname, src)

module.exports = override(
    addWebpackAlias({
        "@assets": resolvePath("src/assets"),
        "@components": resolvePath("src/components"),
        "@constants": resolvePath("src/constants"),
        "@custom_modules": resolvePath("src/custom_modules"),
        "@layouts": resolvePath("src/layouts"),
        "@pages": resolvePath("src/pages"),
        "@state": resolvePath("src/state"),
        "@styled": resolvePath("src/styled"),
    })
)
