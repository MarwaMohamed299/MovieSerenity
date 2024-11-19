using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<MovieSerenity.MovieDB.MovieCastRow>;
using MyRow = MovieSerenity.MovieDB.MovieCastRow;

namespace MovieSerenity.MovieDB;

public interface IMovieCastListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class MovieCastListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMovieCastListHandler
{
    public MovieCastListHandler(IRequestContext context)
            : base(context)
    {
    }
}