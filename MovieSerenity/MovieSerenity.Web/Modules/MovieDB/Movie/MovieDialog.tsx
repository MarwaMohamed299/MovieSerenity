import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { MovieForm } from '../../ServerTypes/MovieDB/MovieForm';
import { MovieRow } from '../../ServerTypes/MovieDB/MovieRow';
import { MovieService } from '../../ServerTypes/MovieDB/MovieService';

@Decorators.panel()
@Decorators.registerClass('MovieSerenity.MovieDB.MovieDialog')
export class MovieDialog extends EntityDialog<MovieRow, any> {
    protected getFormKey() { return MovieForm.formKey; }
    protected getRowDefinition() { return MovieRow; }
    protected getService() { return MovieService.baseUrl; }

    protected form = new MovieForm(this.idPrefix);
}