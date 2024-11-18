using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<MovieSerenity.Modules.Administration.Genre.Genre.GenreRow>;
using MyRow = MovieSerenity.Modules.Administration.Genre.Genre.GenreRow;

namespace MovieSerenity.Modules.Administration.Genre.Genre.RequestHandlers;

public interface IGenreListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class GenreListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IGenreListHandler
{
    public GenreListHandler(IRequestContext context)
            : base(context)
    {
    }
}