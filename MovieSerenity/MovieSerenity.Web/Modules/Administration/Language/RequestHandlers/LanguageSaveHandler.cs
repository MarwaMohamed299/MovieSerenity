using MyRequest = Serenity.Services.SaveRequest<MovieSerenity.Administration.LanguageRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = MovieSerenity.Administration.LanguageRow;


namespace MovieSerenity.Administration;
public interface ILanguageSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
public class LanguageSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageSaveHandler
{
    public LanguageSaveHandler(IRequestContext context)
         : base(context)
    {
    }
}