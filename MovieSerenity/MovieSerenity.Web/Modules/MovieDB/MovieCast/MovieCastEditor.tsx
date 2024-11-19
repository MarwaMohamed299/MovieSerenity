import { Decorators, WidgetProps} from '@serenity-is/corelib';
import {  MovieCastColumns, MovieCastForm, MovieCastRow } from '../../ServerTypes/MovieDB';
import {  GridEditorBase} from '@serenity-is/extensions';

@Decorators.registerEditor('MovieSerenity.MovieDB.MovieCastEditor')
export class MovieCastEditor<P = {}> extends GridEditorBase<MovieCastRow, P> {
    protected getColumnsKey() { return MovieCastColumns.columnsKey }
    protected getLocalTextPrefix() { return MovieCastRow.localTextPrefix; }

    constructor(props: WidgetProps<P>) {
        super(props);
    }
}