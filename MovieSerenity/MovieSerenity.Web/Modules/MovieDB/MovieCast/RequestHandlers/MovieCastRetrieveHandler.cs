using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<MovieSerenity.MovieDB.MovieCastRow>;
using MyRow = MovieSerenity.MovieDB.MovieCastRow;

namespace MovieSerenity.MovieDB;

public interface IMovieCastRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class MovieCastRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IMovieCastRetrieveHandler
{
    public MovieCastRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}