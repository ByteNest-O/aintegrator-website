export const environment = {
    production: false,
    apiBaseUrl: 'http://localhost:3000/api',
    sanity: {
        projectId: 'YOUR_PROJECT_ID',
        dataset: 'development',
        apiVersion: '2024-01-01',
        useCdn: false,
    },
    defaultLocale: 'en',
    supportedLocales: ['en', 'de', 'fr', 'it'] as const,
};
