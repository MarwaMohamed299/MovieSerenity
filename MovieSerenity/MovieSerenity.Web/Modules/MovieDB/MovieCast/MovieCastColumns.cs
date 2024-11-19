using Serenity.ComponentModel;
using System.ComponentModel;

namespace MovieSerenity.MovieDB.Columns;

[ColumnsScript("MovieDB.MovieCast")]
[BasedOnRow(typeof(MovieCastRow), CheckNames = true)]
public class MovieCastColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int MovieCastId { get; set; }
    public string MovieTitle { get; set; }
    public string PersonFullName { get; set; }
    [EditLink]
    public string Character { get; set; }
}