using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace MovieSerenity.MovieDB.Pages;

[PageAuthorize(typeof(MovieCastRow))]
public class MovieCastPage : Controller
{
    [Route("MovieDB/MovieCast")]
    public ActionResult Index()
    {
        return this.GridPage<MovieCastRow>("@/MovieDB/MovieCast/MovieCastPage");
    }
}