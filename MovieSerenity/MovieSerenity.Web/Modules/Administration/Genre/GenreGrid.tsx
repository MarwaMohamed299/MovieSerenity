import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { GenreDialog } from './GenreDialog';
import { GenreColumns, GenreRow, GenreService } from '../../ServerTypes/Modules';

@Decorators.registerClass('MovieSerenity.Adminstration.GenreGrid')
export class GenreGrid extends EntityGrid<GenreRow> {
    protected getColumnsKey() { return GenreColumns.columnsKey; }
    protected getDialogType() { return GenreDialog; }
    protected getRowDefinition() { return GenreRow; }
    protected getService() { return GenreService.baseUrl; }
}