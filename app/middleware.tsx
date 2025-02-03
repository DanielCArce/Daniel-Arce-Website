import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "es"], // Idiomas disponibles
  defaultLocale: "en", // Idioma predeterminado
  localeDetection: true, // Detecta el idioma del navegador
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"], // Evita que afecte rutas específicas
};
