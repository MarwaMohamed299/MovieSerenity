using MyRequest = MovieSerenity.Administration.UserListRequest;
using MyResponse = Serenity.Services.ListResponse<MovieSerenity.Administration.UserRow>;
using MyRow = MovieSerenity.Administration.UserRow;

namespace MovieSerenity.Administration;
public interface IUserListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class UserListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUserListHandler
{
    public UserListHandler(IRequestContext context)
         : base(context)
    {
    }
}