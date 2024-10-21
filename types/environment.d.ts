export { };

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_GTAG: string;
            RESEND_KEY: string;
            CONTACT_MAIL: string;
        }
    }
}