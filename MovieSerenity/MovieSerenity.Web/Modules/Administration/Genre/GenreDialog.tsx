import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { GenreForm, GenreRow, GenreService } from '../../ServerTypes/Modules';

@Decorators.registerClass('MovieSerenity.Adminstration.GenreDialog')
export class GenreDialog extends EntityDialog<GenreRow, any> {
    protected getFormKey() { return GenreForm.formKey; }
    protected getRowDefinition() { return GenreRow; }
    protected getService() { return GenreService.baseUrl; }

    protected form = new GenreForm(this.idPrefix);
}