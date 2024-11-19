import { fieldsProxy } from "@serenity-is/corelib";

export interface MovieCastRow {
    MovieCastId?: number;
    MovieId?: number;
    PersonId?: number;
    Character?: string;
    MovieTitle?: string;
    PersonFullName?: string;
}

export abstract class MovieCastRow {
    static readonly idProperty = 'MovieCastId';
    static readonly nameProperty = 'Character';
    static readonly localTextPrefix = 'MovieDB.MovieCast';
    static readonly deletePermission = 'Adminstration:General';
    static readonly insertPermission = 'Adminstration:General';
    static readonly readPermission = 'Adminstration:General';
    static readonly updatePermission = 'Adminstration:General';

    static readonly Fields = fieldsProxy<MovieCastRow>();
}