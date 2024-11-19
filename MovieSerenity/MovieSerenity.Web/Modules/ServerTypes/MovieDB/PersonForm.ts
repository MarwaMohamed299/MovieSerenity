import { StringEditor, DateEditor, EnumEditor, IntegerEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";
import { PersonMovieGrid } from "../../MovieDB/Person/PersonMovieGrid";
import { Gender } from "../Modules/MovieDB.Person.Gender";

export interface PersonForm {
    FirstName: StringEditor;
    LastName: StringEditor;
    BirthDate: DateEditor;
    BirthPlace: StringEditor;
    Gender: EnumEditor;
    Height: IntegerEditor;
    MoviesGrid: PersonMovieGrid;
}

export class PersonForm extends PrefixedContext {
    static readonly formKey = 'MovieDb.Person';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!PersonForm.init)  {
            PersonForm.init = true;

            var w0 = StringEditor;
            var w1 = DateEditor;
            var w2 = EnumEditor;
            var w3 = IntegerEditor;
            var w4 = PersonMovieGrid;

            initFormType(PersonForm, [
                'FirstName', w0,
                'LastName', w0,
                'BirthDate', w1,
                'BirthPlace', w0,
                'Gender', w2,
                'Height', w3,
                'MoviesGrid', w4
            ]);
        }
    }
}

[Gender]; // referenced types