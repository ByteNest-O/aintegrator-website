import { Injectable } from '@angular/core';
import { createClient, type SanityClient, type QueryParams } from '@sanity/client';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class SanityService {
    private readonly client: SanityClient;

    constructor() {
        this.client = createClient({
            projectId: environment.sanity.projectId,
            dataset: environment.sanity.dataset,
            apiVersion: environment.sanity.apiVersion,
            useCdn: environment.sanity.useCdn,
        });
    }

    async fetch<T>(query: string, params?: QueryParams): Promise<T> {
        return this.client.fetch<T>(query, params ?? {});
    }

    async getById<T>(id: string): Promise<T> {
        const query = `*[_id == $id][0]`;
        return this.fetch<T>(query, { id });
    }

    async getByType<T>(
        type: string,
        options?: { order?: string; limit?: number; offset?: number }
    ): Promise<T[]> {
        let query = `*[_type == $type]`;

        if (options?.order) {
            query += ` | order(${options.order})`;
        }

        if (options?.offset !== undefined) {
            const start = options.offset;
            const end = options.limit ? start + options.limit : '';
            query += `[${start}...${end}]`;
        } else if (options?.limit) {
            query += `[0...${options.limit}]`;
        }

        return this.fetch<T[]>(query, { type });
    }

    async getBySlug<T>(type: string, slug: string): Promise<T> {
        const query = `*[_type == $type && slug.current == $slug][0]`;
        return this.fetch<T>(query, { type, slug });
    }
}
