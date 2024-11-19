import { Decorators} from '@serenity-is/corelib';
import { MovieCastForm, MovieCastRow} from '../../ServerTypes/MovieDB';
import { GridEditorDialog } from '@serenity-is/extensions';
import "./MovieCastEditDialog.css";


@Decorators.registerClass("MovieSereinity.MovieDB.MovieCastEditDialog")
export class MovieCastEditDialog extends GridEditorDialog<MovieCastRow> {
    protected getFormKey() { return MovieCastForm.formKey; }
    protected getNameProperty() { return MovieCastRow.nameProperty; }
    protected getLocalTextPrefix() { return MovieCastRow.localTextPrefix; }

    protected form: MovieCastForm = new MovieCastForm(this.idPrefix);
}