using MyRequest = MovieSerenity.Modules.MovieDB.Movie.MovieListRequest;
using MyResponse = Serenity.Services.ListResponse<MovieSerenity.MovieDB.MovieRow>;
using MyRow = MovieSerenity.MovieDB.MovieRow;

namespace MovieSerenity.MovieDB;

public interface IMovieListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class MovieListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMovieListHandler
{
    public MovieListHandler(IRequestContext context)
            : base(context)
    {
    }
    protected override void ApplyFilters(SqlQuery query)
    {
        base.ApplyFilters(query);

        if (!Request.Genres.IsEmptyOrNull())
        {
            var fld = MyRow.Fields;
            var mg = MovieGenresRow.Fields.As("mg");

            query.Where(Criteria.Exists(
                query.SubQuery()
                    .From(mg)
                    .Select("1")
                    .Where(
                        mg.MovieId == fld.MovieId &&
                        mg.GenreId.In(Request.Genres))));
        }
    }
}