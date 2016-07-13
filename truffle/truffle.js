module.exports = {
    build: {
        "index.html": "index.html",
        "app.js": [
            "javascripts/app.js"
            ],
        "app.css": [
            "stylesheets/app.css"
            ],
        "images/": "images/"
    },
    deploy: [
        "Token",
        "Decoder",
        "ChannelManagerContract",
        "HumanStandardTokenFactory",
        "HumanStandardToken",
        "IterableMappingCMC",
        "IterableMappingNCC",
        "NettingChannelContract",
        "Registry",
        "SampleRecipient",
        "Slicer",
        "Standard_Token",
        "StandardToken",
        "TokenTester"
        ],
    rpc: {
        host: "localhost",
        port: 8101,
        from: "329482da2a2c7b2412589d85312765f32514dd59"
    }
};