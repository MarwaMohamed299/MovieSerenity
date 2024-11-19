using Serenity.Navigation;
using MyPages = MovieSerenity.MovieDb.Pages;
using MoviesPage = MovieSerenity.MovieDB.Pages;
using CastPage = MovieSerenity.MovieDB.Pages;

[assembly: NavigationMenu(6000, "Movie Database", icon: "fa-film")]
[assembly: NavigationLink(int.MaxValue, "Movie Database/Movies",
    typeof(MoviesPage.MoviePage), icon: "fa-video-camera")]
[assembly: NavigationLink(int.MaxValue, "Movie Database/Person",
    typeof(MyPages.PersonPage), icon: "fa-users")]
