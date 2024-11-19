using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<MovieSerenity.MovieDb.PersonRow>;
using MyRow = MovieSerenity.MovieDb.PersonRow;

namespace MovieSerenity.MovieDb;

public interface IPersonListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class PersonListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPersonListHandler
{
    public PersonListHandler(IRequestContext context)
            : base(context)
    {
    }
}