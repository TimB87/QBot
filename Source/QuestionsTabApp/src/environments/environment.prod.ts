export const environment = {
    production: false,
    apiBaseUrl: "https://hsdbot.azurewebsites.net/api/Request/",
    selfUrl: "https://hsdbot-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "2bc2d6df-bd83-4beb-af4c-681767093733",
        clientId: "6ebf083f-435a-48b9-b941-3f6cf4affa1e",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
