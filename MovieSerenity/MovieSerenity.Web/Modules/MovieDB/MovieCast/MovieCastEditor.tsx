import { Decorators, WidgetProps } from '@serenity-is/corelib';
import { GridEditorBase } from '@serenity-is/extensions';
import { MovieCastColumns, MovieCastRow } from '../../ServerTypes/MovieDB';
import { MovieCastEditDialog } from './MovieCastEditDialog';
import { PersonRow } from '../../ServerTypes/MovieDB/PersonRow';

@Decorators.registerEditor("MovieSerenity.MovieDB.MovieCastEditor")
export class MovieCastEditor<P = {}> extends GridEditorBase<MovieCastRow, P> {
    protected getColumnsKey() { return MovieCastColumns.columnsKey }
    protected getLocalTextPrefix() { return MovieCastRow.localTextPrefix; }

    constructor(props: WidgetProps<P>) {
        super(props);
    }
    protected getDialogType() { return MovieCastEditDialog; }

    protected getAddButtonCaption() {
        return "Add";
    }
    protected validateEntity(row: MovieCastRow, id: number) {
        if (!super.validateEntity(row, id))
            return false;

        var itemId = id ?? row[this.getIdProperty()];
        PersonRow.getLookupAsync().then(x => {
            var item = this.view?.getItemById(itemId);
            if (item) {
                item.PersonFullName = x.itemById[row.PersonId].FullName;
                this.view.updateItem(itemId, item);
            }
        });

        return true;
    }
}