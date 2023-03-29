export const clients = [
    {
        resourceId: "https://some_cool_resource",
        clientId: "some_cool_resource",
        clientSecret: "some_cool_resource_password",
        scopes: [
            "some_cool_resource_dev_read",
            "some_cool_resource_dev_write"
        ],
        grant_types: ['client_credentials', 'authorization_code'],
        redirect_uris: ['http://localhost:5000'],

        canAccess: [{
            ressourceId: "some_cool_microservice",
            scopes: [
                "some_cool_microservice_custom_access_scope",
            ]
        }]
    },
    {
        clientId: "some_cool_microservice",
        clientSecret: "some_cool_microservice_password",
        scopes: [
            "some_cool_microservice_custom_access_scope",
        ],
        grant_types: ['client_credentials', 'refresh_token', 'authorization_code'],
        redirect_uris: ['http://localhost:5000'],

        canAccess: [{
            ressourceId: "some_cool_resource",
            scopes: [
                "some_cool_resource_dev_read",
            ]
        }]
    },
];

export const getClientsForConfig = (clients) => {

    return clients.map(c => ({
        client_id: c.clientId,
        client_secret: c.clientSecret,
        grant_types: c.grant_types,
        redirect_uris: c.redirect_uris,
    }));
    // {
    //   client_id: 'oidcCLIENT',
    //   client_secret: '...',
    //   grant_types: ['refresh_token', 'authorization_code'],
    //   redirect_uris: ['http://sso-client.dev/providers/7/open_id', 'http://sso-client.dev/providers/8/open_id'],
    // }
}
