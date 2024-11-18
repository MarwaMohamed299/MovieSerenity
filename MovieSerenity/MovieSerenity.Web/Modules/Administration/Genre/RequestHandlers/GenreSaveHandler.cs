using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<MovieSerenity.Modules.Administration.Genre.Genre.GenreRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = MovieSerenity.Modules.Administration.Genre.Genre.GenreRow;

namespace MovieSerenity.Modules.Administration.Genre.Genre.RequestHandlers;

public interface IGenreSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class GenreSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IGenreSaveHandler
{
    public GenreSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}