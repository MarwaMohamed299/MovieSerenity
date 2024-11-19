import { Decorators} from '@serenity-is/corelib';
import {  MovieCastForm, MovieCastRow } from '../../ServerTypes/MovieDB';
import {  GridEditorDialog } from '@serenity-is/extensions';

@Decorators.registerEditor('MovieSerenity.MovieDB.MovieCastEditor')
export class MovieCastEditDialog extends GridEditorDialog<MovieCastRow> {
    protected getFormKey() { return MovieCastForm.formKey; }
    protected getNameProperty() { return MovieCastRow.nameProperty; }
    protected getLocalTextPrefix() { return MovieCastRow.localTextPrefix; }

    protected form: MovieCastForm = new MovieCastForm(this.idPrefix);
    protected getDialogType() { return MovieCastEditDialog; }

    protected getAddButtonCaption() {
        return "Add";
    }
}