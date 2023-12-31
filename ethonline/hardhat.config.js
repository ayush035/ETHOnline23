/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.18",
  },
  networks: {
    localnet: {
        chainId: 31415926,
        url: "http://127.0.0.1:1234/rpc/v1",
        accounts: [PRIVATE_KEY],
    },
    calibrationnet: {
        chainId: 314159,
        url: "https://api.calibration.node.glif.io/rpc/v1",
        accounts: [PRIVATE_KEY],
    },
    filecoinmainnet: {
        chainId: 314,
        url: "https://api.node.glif.io",
        accounts: [PRIVATE_KEY],
    },
        scrollSepolia: {
          url: "https://sepolia-rpc.scroll.io/" || "",
          accounts:
            process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
        }
    

}
  