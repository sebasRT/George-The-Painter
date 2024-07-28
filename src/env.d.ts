interface ImportMetaEnv {
    readonly RESEND_KEY: string;
    readonly PUBLIC_RESEND_KEY: string;
    readonly SITE: string;
    readonly MODE: "production" | "development";
    // more env variables...
}
interface ImportMeta {
    readonly env: ImportMetaEnv;
}
SITE="https://www.george-the-painter.com"
RESEND_KEY=re_JLA5pZAE_7S7HDZonC75377xBA9bDLCSi
PUBLIC_RESEND_KEY=re_JLA5pZAE_7S7HDZonC75377xBA9bDLCSi