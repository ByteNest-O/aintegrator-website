export const environment = {
    production: true,
    apiBaseUrl: 'https://api.yourdomain.com/api',
    sanity: {
        projectId: 'YOUR_PROJECT_ID',
        dataset: 'production',
        apiVersion: '2024-01-01',
        useCdn: true,
    },
    defaultLocale: 'en',
    supportedLocales: ['en', 'de', 'fr', 'it'] as const,
};
