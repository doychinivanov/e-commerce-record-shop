import admin from 'firebase-admin';

// add this as env
const serviceAccountKey = {
    type: 'service_account',
    project_id: 'vinyled-266bb',
    private_key_id: 'f78e1a017ad10b373076d756466db4bbdc080e03',
    private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDDNz8GwSesRtAK\nLboxEUQkX8qJhlqQCmcP41kEGTX85RHoyYTbcfUF94Qip0C2bXmCUxsNk2BYDEyl\nbTER8eEnx7fez0UfnXWxDu+GKkr+quoV6jgmJ4Y3HO5N9jzzZUSQbTuMePI2FJkB\n8SRJs8iX63/M88kH4XWUntufGbGO1cYoLK16QRjNjeGCtWMfe4K7EP/ds9F401VB\nauvn6xqdOpieSWYotssn4lThZXa76662S846fv0vIgLoR75PiVVyMRQciFcpFzFA\nlouZqQN45OuspL+fZdu0c4JjAfnDvxMc4TcLkVz7f3NnfNLlYL3p2iPmmqajOOe8\nfP9uhGHrAgMBAAECggEANSjZtmap/Y1pAKSUI+F+S2N0fX/DMJ9MknSIHIga/guJ\nFXmu/q0pGp9c8azW//aO1LD52HgOD9wFkTTLXIYgGJuX1ApgWewgjP8ytbfVpUT4\nqtAVyzoPH/n2YO+RiHxGsAe25BlZZ+WzBubaSWG2WbxtGGw4jbdVNAwQZWJzSiAt\nEo5hjDULqs0hLe1YOoSChv/LRuc7I9/mHbd6ZiZyNLQmxHehIwYwJStzrI64mvU5\n6/yFDsJhTYH+baj1g902jaNLGQ8jWcH/iddLLMwcVBZMkyIoV4aDWiyK4gn3MPux\nnKCmvq1kZ6KOz96WwfuricdMBqx4i2YUy+TPU/TsQQKBgQD7q8RaphN/NbbBmcZd\n7/YZHIVn/IhDWKoHzuDjy63tNBJh1sXBAuAESHc1E6EuPC02eVYaapi6jWTU9yLq\ndbhLl7JpGnGsEdHeaaOZVyIAJqgYJPluQyKCtFdRr5p2DcWhAihQxmVNvML0A7lx\nwsr1xI3NVoRdkX/DFtfvCf+QQQKBgQDGkuEAtHuFeEyxXrdnefkddPEFBkAswq88\n2zXDUbXjipbPlTzyThBIHoEftAblnpR9+Q+JSnXOJ9leDv1DRHq21FJY3cAbgOJ8\nQwfJ6h4qtzitqyH9mZaOEpSKSdv9Krga3Qed9je99EC2S2Sq79BHUWrPCwqZQdNr\naLjSCk1nKwKBgDeTDqEV22hT7C+ETZGg069n5O25jj2Q7rsaq/6hk561yPlh+/lL\nMTzA49IMq6MSFsnYsXLT5zYK0yFUEZnEtRW8QeGDvWZJ6RY8LaxG2XM/Fg9+2rXG\njXBfcojPRkSbdfDAETcFGIm6DTLlP6YnZbov1UBqwoAHCTeDa9uVUaIBAoGBAJji\nmS3Lx5Z5isK9JAQdWvmdAbxWla5grj7yn7AkByCLoZVtV6FPDSYZplzcZLsBn15m\nFdokZBM3hxnt/HyACuMdEdGt2azTTI1TpnmFMXi93HuJ2P/B8rKsB4V5XFDNRTYZ\nmzW5Ti2IExLHdVhOj1N5kfyaiax5i+eUl0fP+sxFAoGAfEXRY0MMg9WsftEeVWaN\nqlKDLr+LLRDlmBfAs2e2WxA4sOHcHInPJLKVyAkhh/3+y9naHxHAThnbpwZt+QK6\nxuwnfNRlDBeIT/eDugE8Sakj0wmw1Xt9AHXDJziA7304k0xhnSGCtkINAivOjQLj\nY4317cYbs23ATIWzub2UNp0=\n-----END PRIVATE KEY-----\n',
    client_email: 'firebase-adminsdk-1uo6j@vinyled-266bb.iam.gserviceaccount.com',
    client_id: '110063266448803142735',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-1uo6j%40vinyled-266bb.iam.gserviceaccount.com'
};

export default admin;
export const firebaseConfig = (server) => {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccountKey),
    });
};