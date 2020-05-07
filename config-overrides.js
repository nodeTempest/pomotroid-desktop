const path = require("path")
const { override, addWebpackAlias } = require("customize-cra")

const resolvePath = src => path.resolve(__dirname, src)

module.exports = override(
    addWebpackAlias({
        "@constants": resolvePath("src/constants"),
        "@modules": resolvePath("src/modules"),
        "@layouts": resolvePath("src/layouts"),
        "@pages": resolvePath("src/pages"),
        "@state": resolvePath("src/state"),
        "@styled": resolvePath("src/styled"),
        "@utils": resolvePath("src/utils"),
    })
)
