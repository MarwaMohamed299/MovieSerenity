import { Decorators, WidgetProps } from '@serenity-is/corelib';
import { MovieCastColumns, MovieCastForm, MovieCastRow } from '../../ServerTypes/MovieDB';
import { GridEditorBase, GridEditorDialog } from '@serenity-is/extensions';

@Decorators.registerClass('MovieSerenity.MovieDB.MovieCastEditor')
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