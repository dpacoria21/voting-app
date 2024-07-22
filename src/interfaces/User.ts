export interface User {
    self:                       null;
    id:                         string;
    origin:                     null;
    createdTimestamp:           number;
    username:                   string;
    enabled:                    boolean;
    totp:                       boolean;
    emailVerified:              boolean;
    firstName:                  null | string;
    lastName:                   null | string;
    email:                      string;
    federationLink:             null;
    serviceAccountClientId:     null;
    attributes:                 null;
    credentials:                null;
    disableableCredentialTypes: any[];
    requiredActions:            any[];
    federatedIdentities:        null;
    realmRoles:                 null;
    clientRoles:                null;
    clientConsents:             null;
    notBefore:                  number;
    applicationRoles:           null;
    socialLinks:                null;
    groups:                     null;
    access:                     Access;
}

export interface Access {
    manageGroupMembership: boolean;
    view:                  boolean;
    mapRoles:              boolean;
    impersonate:           boolean;
    manage:                boolean;
}
