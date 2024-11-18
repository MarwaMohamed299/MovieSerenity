using Serenity.ComponentModel;
using System.ComponentModel;

namespace MovieSerenity.Modules.Administration.Genre.Genre;

[ColumnsScript("Adminstration.Genre")]
[BasedOnRow(typeof(GenreRow), CheckNames = true)]
public class GenreColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int GenreId { get; set; }
    [EditLink]
    public string Name { get; set; }
}