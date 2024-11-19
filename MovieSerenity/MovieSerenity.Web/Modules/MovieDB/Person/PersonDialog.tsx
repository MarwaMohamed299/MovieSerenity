import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { PersonRow } from '../../ServerTypes/MovieDB/PersonRow';
import { PersonForm } from '../../ServerTypes/MovieDB/PersonForm';
import { PersonService } from '../../ServerTypes/MovieDB/PersonService';
import "./PersonDialog.css";
@Decorators.registerClass('MovieSerenity.MovieDb.PersonDialog')
export class PersonDialog extends EntityDialog<PersonRow, any> {
    protected getFormKey() { return PersonForm.formKey; }
    protected getRowDefinition() { return PersonRow; }
    protected getService() { return PersonService.baseUrl; }
    protected gerRowDefinition() { return PersonRow; }
    protected form = new PersonForm(this.idPrefix);

    protected afterLoadEntity() {
        super.afterLoadEntity();

        this.form.MoviesGrid.personId = this.entityId;
    }
}