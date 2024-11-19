import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { PersonDialog } from './PersonDialog';
import { PersonService } from '../../ServerTypes/MovieDB/PersonService';
import { PersonColumns } from '../../ServerTypes/MovieDB/PersonColumns';
import { PersonRow } from '../../ServerTypes/MovieDB/PersonRow';

@Decorators.registerClass('MovieSerenity.MovieDb.PersonGrid')
export class PersonGrid extends EntityGrid<PersonRow> {
    protected getColumnsKey() { return PersonColumns.columnsKey; }
    protected getDialogType() { return PersonDialog; }
    protected getRowDefinition() { return PersonRow; }
    protected getService() { return PersonService.baseUrl; }
}