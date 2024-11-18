using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<MovieSerenity.Modules.Administration.Genre.Genre.GenreRow>;
using MyRow = MovieSerenity.Modules.Administration.Genre.Genre.GenreRow;

namespace MovieSerenity.Modules.Administration.Genre.Genre.RequestHandlers;

public interface IGenreRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class GenreRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IGenreRetrieveHandler
{
    public GenreRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}