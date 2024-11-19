import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { MovieCastRow } from "../MovieDB/MovieCastRow";

export interface PersonMovieColumns {
    MovieTitle: Column<MovieCastRow>;
    Character: Column<MovieCastRow>;
}

export class PersonMovieColumns extends ColumnsBase<MovieCastRow> {
    static readonly columnsKey = 'MovieSerenity.Modules.MovieDB.Person.PersonMovieColumns';
    static readonly Fields = fieldsProxy<PersonMovieColumns>();
}