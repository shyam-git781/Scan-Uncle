const baseUrl = ((): string => {
    switch (process.env.NODE_ENV) {
        case 'production': {
            return '';
        }

        case 'development': {
            return 'http://localhost:8080';
        }

        default: {
            return '';
        }
    }
})();

const apiBaseUrl = (() => `${baseUrl}`)();
// const sherlockNonSSOApiUrl = (() => `${baseUrl}/external`)();

export const environment = {
    baseUrl,
    apiBaseUrl,
    // sherlockNonSSOApiUrl
};
