using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<MovieSerenity.MovieDb.PersonRow>;
using MyRow = MovieSerenity.MovieDb.PersonRow;

namespace MovieSerenity.MovieDb;

public interface IPersonRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class PersonRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPersonRetrieveHandler
{
    public PersonRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}