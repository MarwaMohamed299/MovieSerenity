using MovieSerenity.Modules.Administration.Genre.Genre;

namespace MovieSerenity.Administration.Pages;

[PageAuthorize(typeof(GenreRow))]
public class GenrePage : Controller
{
    [Route("Adminstration/Genre")]
    public ActionResult Index()
    {
        return this.GridPage<GenreRow>("@/Genre/Genre/GenrePage",
            GenreRow.Fields.PageTitle());
    }
}

