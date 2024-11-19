using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<MovieSerenity.MovieDB.MovieCastRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = MovieSerenity.MovieDB.MovieCastRow;

namespace MovieSerenity.MovieDB;

public interface IMovieCastSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class MovieCastSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMovieCastSaveHandler
{
    public MovieCastSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}