import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib";
import { Gender } from "../Modules/MovieDB.Person.Gender";

export interface PersonRow {
    PersonId?: number;
    FirstName?: string;
    LastName?: string;
    BirthDate?: string;
    BirthPlace?: string;
    Height?: number;
    Gender?: Gender;
    FullName?: string;
    PrimaryImage?: string;
    GalleryImages?: string;
}

export abstract class PersonRow {
    static readonly idProperty = 'PersonId';
    static readonly nameProperty = 'FullName';
    static readonly localTextPrefix = 'MovieDb.Person';
    static readonly lookupKey = 'MovieDb.Person';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<PersonRow>('MovieDb.Person') }
    static async getLookupAsync() { return getLookupAsync<PersonRow>('MovieDb.Person') }

    static readonly deletePermission = 'Adminstration:General';
    static readonly insertPermission = 'Adminstration:General';
    static readonly readPermission = 'Adminstration:General';
    static readonly updatePermission = 'Adminstration:General';

    static readonly Fields = fieldsProxy<PersonRow>();
}