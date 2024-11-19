using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace MovieSerenity.MovieDb.Pages;

[PageAuthorize(typeof(PersonRow))]
public class PersonPage : Controller
{
    [Route("MovieDb/Person")]
    public ActionResult Index()
    {
        return this.GridPage<PersonRow>("@/MovieDb/Person/PersonPage");
    }
}