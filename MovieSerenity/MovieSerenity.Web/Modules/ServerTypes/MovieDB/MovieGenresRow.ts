import { fieldsProxy } from "@serenity-is/corelib";

export interface MovieGenresRow {
    MovieGenreId?: number;
    MovieId?: number;
    GenreId?: number;
    MovieTitle?: string;
    GenreName?: string;
}

export abstract class MovieGenresRow {
    static readonly idProperty = 'MovieGenreId';
    static readonly localTextPrefix = 'MovieDB.MovieGenres';
    static readonly deletePermission = 'Adminstration:General';
    static readonly insertPermission = 'Adminstration:General';
    static readonly readPermission = 'Adminstration:General';
    static readonly updatePermission = 'Adminstration:General';

    static readonly Fields = fieldsProxy<MovieGenresRow>();
}