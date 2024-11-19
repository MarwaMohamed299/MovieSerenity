using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<MovieSerenity.MovieDb.PersonRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = MovieSerenity.MovieDb.PersonRow;

namespace MovieSerenity.MovieDb;

public interface IPersonSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class PersonSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPersonSaveHandler
{
    public PersonSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}