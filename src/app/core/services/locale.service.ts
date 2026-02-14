import { Injectable, signal, computed, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';

export type SupportedLocale = (typeof environment.supportedLocales)[number];

const LOCALE_COOKIE_KEY = 'preferred_locale';
const COOKIE_MAX_AGE_DAYS = 365;

@Injectable({
    providedIn: 'root',
})
export class LocaleService {
    private readonly platformId = inject(PLATFORM_ID);
    private readonly isBrowser = isPlatformBrowser(this.platformId);

    /** Current active locale */
    private readonly _currentLocale = signal<SupportedLocale>(this.resolveInitialLocale());

    /** Reactive read-only accessor */
    readonly currentLocale = this._currentLocale.asReadonly();

    /** All supported locales */
    readonly supportedLocales = environment.supportedLocales;

    /** Human-readable locale labels */
    readonly localeLabels = computed(() => ({
        en: 'English',
        de: 'Deutsch',
        fr: 'Français',
        it: 'Italiano',
    }));

    /**
     * Manually set the active locale and persist to cookie.
     */
    setLocale(locale: SupportedLocale): void {
        this._currentLocale.set(locale);
        if (this.isBrowser) {
            this.setCookie(LOCALE_COOKIE_KEY, locale, COOKIE_MAX_AGE_DAYS);
        }
    }

    /**
     * Check if a locale is supported.
     */
    isSupported(locale: string): locale is SupportedLocale {
        return (environment.supportedLocales as readonly string[]).includes(locale);
    }

    /**
     * Resolve the initial locale from cookie → browser → default.
     */
    private resolveInitialLocale(): SupportedLocale {
        if (!this.isBrowser) {
            return environment.defaultLocale as SupportedLocale;
        }

        // 1. Check cookie
        const cookieLocale = this.getCookie(LOCALE_COOKIE_KEY);
        if (cookieLocale && this.isSupported(cookieLocale)) {
            return cookieLocale;
        }

        // 2. Detect browser language
        const browserLang = navigator.language?.split('-')[0];
        if (browserLang && this.isSupported(browserLang)) {
            return browserLang;
        }

        // 3. Fallback to default
        return environment.defaultLocale as SupportedLocale;
    }

    private getCookie(name: string): string | null {
        if (!this.isBrowser) return null;
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? decodeURIComponent(match[2]) : null;
    }

    private setCookie(name: string, value: string, days: number): void {
        if (!this.isBrowser) return;
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/;SameSite=Lax`;
    }
}
