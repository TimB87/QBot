export const environment = {
    production: false,
    apiBaseUrl: "https://marjorie.azurewebsites.net/api/Request/",
    selfUrl: "https://marjorie-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "2bc2d6df-bd83-4beb-af4c-681767093733",
        clientId: "b98d679b-55e0-4a2f-acbc-08b08ecdb4b7",
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
