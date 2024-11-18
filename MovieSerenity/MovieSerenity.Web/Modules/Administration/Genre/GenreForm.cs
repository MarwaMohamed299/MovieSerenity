using Serenity.ComponentModel;

namespace MovieSerenity.Modules.Administration.Genre.Genre;

[FormScript("Adminstration.Genre")]
[BasedOnRow(typeof(GenreRow), CheckNames = true)]
public class GenreForm
{
    public string Name { get; set; }
}