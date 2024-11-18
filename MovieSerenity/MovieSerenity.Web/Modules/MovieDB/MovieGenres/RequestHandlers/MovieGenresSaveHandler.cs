using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<MovieSerenity.MovieDB.MovieGenresRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = MovieSerenity.MovieDB.MovieGenresRow;

namespace MovieSerenity.MovieDB;

public interface IMovieGenresSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class MovieGenresSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMovieGenresSaveHandler
{
    public MovieGenresSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}